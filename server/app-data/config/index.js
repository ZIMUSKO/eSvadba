export const {
  APP_PORT = 4000,
  NODE_ENV = 'development',

  MONGO_USER = 'testuser',
  MONGO_PASSWORD = 'testpassword',
  MONGO_HOST = 'cluster0-fwcta.mongodb.net/test?retryWrites=true&w=majority',

  JWT_SECRET = '7Y2Hqjt2B5nBt9ZSrRnzQhsf9Y57IjzvFB9aK1oC2Lkljr1on1BMIXcoLk8cGe7J',
  JTW_EXPIRATION = 604800000,


  SESSION_NAME = 'sid',
  SESSION_SECRET = '7Y2Hqjt2B5nBt9ZSrRnzQhsf9Y57IjzvFB9aK1oC2Lkljr1on1BMIXcoLk8cGe7J',
  SESSION_LIFETIME = 604800000,

  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_PASS = 'password',
} = process.env;

export const IS_PROD = NODE_ENV === 'production';
