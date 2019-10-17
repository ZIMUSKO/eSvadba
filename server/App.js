const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const helmet = require('helmet');
const nextjsApp = require('next');
const typeDefs = require('./app-data/grapqhl/typeDefs');
const resolvers = require('./app-data/grapqhl/resolvers');
const db = require('./app-data/db');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = nextjsApp({ dev });
const handle = nextApp.getRequestHandler();
const port = 3003;

const App = async () => {
  try {
    await nextApp.prepare();

    const app = express();

    app.use(helmet());

    const server = new ApolloServer({
      context: async ({ req }) => {
        try {
          if (req) {
            const token = req.headers['x-access-token'];

            return { token };
          }

          return null;
        } catch (err) {
          throw err;
        }
      },
      typeDefs,
      resolvers,
      playground: {
        endpoint: 'graphiql',
        settings: {
          'editor.theme': 'light',
        },
      },
    });

    server.applyMiddleware({ app, path: '/api' });

    await db();

    // Routes
    app.get('*', (req, res) => handle(req, res));

    await app.listen({ port });

    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = App;
