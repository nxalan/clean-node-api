export default {
  mongoUrl: global.__MONGO_URI__ || 'mongodb+srv://nodedb:nodedb@cluster0.ykmno.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  port: process.env.PORT || 5050
}
