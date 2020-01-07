import { SchemaDirectiveVisitor, AuthenticationError, ForbiddenError } from 'apollo-server-express';
import { defaultFieldResolver } from 'graphql';
import { User } from '../../models';
import getProjection from '../resolvers/utils';

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      const [, , context, info] = args;
      const token = context.req.header('x-access-token');
      const encodedTokenInfo = User.ensureSignedIn(token);
      const { fetchUser, requiredRole } = this.args;
      if (fetchUser || requiredRole) {
        if (!encodedTokenInfo.userId) {
          throw new AuthenticationError('You must be signed in.');
        }
        const userInfo = await User.findById(encodedTokenInfo.userId, getProjection(info));
        if (!userInfo) {
          throw new AuthenticationError('You must be signed in.');
        }

        if (requiredRole) {
          if (userInfo.roleName !== requiredRole) {
            throw new ForbiddenError('You do not have permission to do that');
          }
        }
        context.userInfo = userInfo;
      } else {
        context.userInfo = { id: encodedTokenInfo.userId };
      }
      return resolve.apply(this, args);
    };
  }
}

export default AuthDirective;
