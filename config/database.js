module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST'),
        port: env.int('DB_PORT'),
        database: env('DB_NAME'),
        username: env('DB_USERNAME'),
        password: env('DB_PASSWORD'),
        ssl: env.bool('DB_SSL')
      },
      options: {}
    },
  },
});
