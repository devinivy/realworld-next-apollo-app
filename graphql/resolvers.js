import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
    Query: {
        article: (parent, args, context) => null
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {

            return new Date(value); // value from the client
        },
        serialize(value) {

            return value; // value sent to the client
        },
        parseLiteral(ast) {

          if (ast.kind === Kind.STRING) {
              return new Date(ast.value) // ast value is always in string format
          }

          return null;
        }
    })
};
