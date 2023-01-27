
const prodConfig = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: process.env.MYSQLDIALECT,
}

const devConfig = {
  username: process.env.DEV_MYSQLUSER,
  password: process.env.DEV_MYSQLPASSWORD,
  database: process.env.DEV_MYSQLDATABASE,
  port: process.env.DEV_MYSQLPORT,
  dialect: process.env.DEV_MYSQLDIALECT,
}

module.exports = {
  development: devConfig,
  test: devConfig,
  production: prodConfig
}
