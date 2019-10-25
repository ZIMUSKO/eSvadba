import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';
import { User } from '../../models';

class GuestDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = function (...args) {
      const [, , context] = args;
      User.ensureSignedOut(context.req);
      return resolve.apply(this, args);
    };
  }
}

export default GuestDirective;
