export default {
  mongoUrl: global.__MONGO_URI__,
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
