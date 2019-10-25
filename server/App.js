import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import session from 'express-session';

import helmet from 'helmet';
import nextjsApp from 'next';

import db from './app-data/db';

import typeDefs from './app-data/grapqhl/typeDefs';
import resolvers from './app-data/grapqhl/resolvers';
import schemaDirectives from './app-data/grapqhl/directives';

import {
  NODE_ENV, IS_PROD, APP_PORT,
  SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET,
  // REDIS_HOST, REDIS_PORT, REDIS_PASS,
} from './app-data/config';

const nextApp = nextjsApp({ dev: !IS_PROD });
const handle = nextApp.getRequestHandler();


const App = async () => {
  try {
    await nextApp.prepare();

    const app = express();

    // TODO USE REDIS STORE
    // const RedisStore = connectRedis(session);
    // const store = new RedisStore({
    //   host: REDIS_HOST,
    //   port: REDIS_PORT,
    //   pass: REDIS_PASS
    // })
    app.use(helmet(), session({
      // store: RedisStore
      name: SESSION_NAME,
      secret: SESSION_SECRET,
      resave: true,
      rolling: true,
      saveUninitialized: true,
      cookie: {
        maxAge: parseInt(SESSION_LIFETIME, 0),
        sameSite: true,
        secure: IS_PROD,
      },
    }));

    const server = new ApolloServer({
      // context: async ({ req }) => {
      //   try {
      //     if (req) {
      //       const token = req.headers['x-access-token'];
      //
      //       return { token };
      //     }
      //
      //     return null;
      //   } catch (err) {
      //     throw err;
      //   }
      // },
      context: ({ req, res }) => ({ req, res }),
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: IS_PROD ? false : {
        endpoint: 'api',
        settings: {
          'request.credentials': 'include',
        },
      },
    });

    server.applyMiddleware({ app, path: '/api' });

    await db();
    // Routes
    app.get('*', (req, res) => handle(req, res));

    app.listen({ port: APP_PORT }, () => {
      console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`);
      console.log(`Using environment: ${NODE_ENV}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = App;
