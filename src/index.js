const { gql, ApolloServer } = require("apollo-server");

/**
 * Scalar types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
 */

/**
 * => Schema
 * -> Schema Definition Language
 * -> SDL
 */

const resolvers = {
    Query: {
        hello() {
            return "World";
        },
        usuario() {
            return {
                idade: 32,
                salario: 7524.40,
                nome: "Samuel",
                ativo: true,
                id: "0s1a2m3u4e5l"
            }
        },
        linguagens() {
            return ["C", "C#", "Java", "Python"]
        }
    }
}

const typeDefs = gql`
    type Query {
        hello: String
        usuario: User
        linguagens: [String!]!
    }
    type User {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(3000, () => console.log("Aplicativo em execução"))