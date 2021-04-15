const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config')

// String! = param must be a string !=must return

const server = new ApolloServer({
  typeDefs:typeDefs,
  resolvers:resolvers,
  context:({req})=>({req})
})

mongoose.connect(MONGODB, {useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
  console.log("Mongo connected")
  return server.listen({port:5000})
}).then(res=>{
  console.log(`Server started at ${res.url}`)
})