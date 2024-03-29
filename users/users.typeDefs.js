import { gql } from "apollo-server"

export default gql`
    type User {
        id: Int
        username: String
        email: String
        name: String
        location: String
        password: String
        avatarURL: String
        githubUsername: String
        createdAt: String
        updatedAt: String
    }
    type Mutation {
        createAccount(
            name: String!
            username: String!
            email: String!
            password: String!
        ): User
    }
    type Query {
        seeProfile(username: String!): User
    }
`
