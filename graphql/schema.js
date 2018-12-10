export default `
scalar Date

schema {
    query: Query
}

type Query {
    article (slug: ID!): Article
}

type Article {
    slug: ID!,
    title: String!,
    description: String,
    body: String,
    tagList: [String!]!,
    createdAt: Date!,
    updatedAt: Date!,
    favorited: Boolean!,
    favoritesCount: Int!,
    author: Profile!
}

type Profile {
    username: ID!,
    bio: String,
    image: String,
    following: Boolean!
}
`;
