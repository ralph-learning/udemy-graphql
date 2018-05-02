import { makeExecutableSchema } from 'graphql-tools';

const usersMock: any[] = [
  {
    id: 1,
    name: 'Ralph Effting',
    email: 'ralfting@gmail.com',
  },
  {
    id: 2,
    name: 'Marina C. Bonin',
    email: 'marina@gmail.com',
  },
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    allUsers: () => usersMock,
  },
  Mutation: {
    createUser: (parante, args) => {
      const newUser = {...args, id: usersMock.length + 1};
      usersMock.push(newUser);

      return newUser;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });