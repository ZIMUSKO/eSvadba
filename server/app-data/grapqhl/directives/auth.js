import { SchemaDirectiveVisitor, AuthenticationError, ForbiddenError } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';
import { User } from '../../models';

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      const [, , context] = args;
      const token = context.req.header('x-access-token');
      const encodedTokenInfo = User.ensureSignedIn(token);
      const { fetchUser, requiredRole } = this.args;
      if (fetchUser || requiredRole) {
        if (!encodedTokenInfo.userId) {
          throw new AuthenticationError('You must be signed in.');
        }
        const userInfo = await User.findById(encodedTokenInfo.userId);
        if (!userInfo) {
          throw new AuthenticationError('You must be signed in.');
        }

        if (requiredRole) {
          if (userInfo.type !== requiredRole) {
            throw new ForbiddenError('You do not have permission to do that');
          }
        }
        context.userInfo = userInfo;
      }
      return resolve.apply(this, args);
    };
  }
}

export default AuthDirective;
