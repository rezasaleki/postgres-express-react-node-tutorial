require('dotenv').config();

// config.js
module.exports = {
    app: {
        port: process.env.DEV_APP_PORT || 3000,
        appName: process.env.APP_NAME || 'APP',
        env: process.env.NODE_ENV || 'development',
    },
    db: {
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'todos_dev',
        password: process.env.DB_PASS || 'postgres',
        username: process.env.DB_USER || '123!@#',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: true,
    },
    winiston: {
        logpath: '/AppLogs/logs/',
    },
    auth: {
        jwt_secret: process.env.JWT_SECRET,
        jwt_expiresin: process.env.JWT_EXPIRES_IN || '1d',
        saltRounds: process.env.SALT_ROUND || 10,
        refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
        refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
    },
    sendgrid: {
        api_key: process.env.SEND_GRID_API_KEY,
        api_user: process.env.USERNAME,
        from_email: process.env.FROM_EMAIL || 'rezasaleki.09@gmail.com',
    },

};