const typeDefs = `
    type Query {
        feed : [User!]!
    }
    type User {
        id: ID!,
        firstName: String!,
        lastName: String!
    }
`

export default typeDefs