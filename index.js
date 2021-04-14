const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const {MONGODB} = require('./config')

// String! = param must be a string !=must return
const typeDefs = gql`
  type Query{
    sayHi: String!
  }
`

const resolvers = {
  Query:{
    sayHi: ()=>'Hello world'
  }
}

const server = new ApolloServer({
  typeDefs:typeDefs,
  resolvers:resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
  console.log("Mongo connected")
  return server.listen({port:5000})
}).then(res=>{
  console.log(`Server started at ${res.url}`)
})