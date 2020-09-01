import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    inu: [Inu]
  }

  type Inu {
    name: String
    age: Int
  }
`

const resolvers = {
  Query: {
    inu: () => [
      {
        name: 'でかいいぬ',
        age: '5',
      },
    ],
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler({
  path: '/api/graphql',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
