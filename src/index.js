import { GraphQLServer } from 'graphql-yoga'
import typeDefs from './typeDefs'
import resolvers from './resolvers'


// Create an express server and a GraphQL endpoint
const server = new GraphQLServer({
    typeDefs,
    resolvers
  })

server.start(() => console.log(`Server is running on http://localhost:4000`))
