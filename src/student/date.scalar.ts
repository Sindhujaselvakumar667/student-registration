import { Scalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql';

@Scalar('Date')
export class DateScalar {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(value); // Convert incoming string to Date object
  }

  serialize(value: Date): string {
    return value.toISOString(); // Convert outgoing Date object to ISO string
  }

  parseLiteral(ast: any): Date {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // Convert AST string to Date object
    }
    return null;
  }
}
