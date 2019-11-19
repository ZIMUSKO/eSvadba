import root from './root';
import vendorTypeDefs from './vendor';
import customerTypeDefs from './customer';
import user from './user';
import forum from './forum';


export default [
  root,
  user,
  ...vendorTypeDefs,
  ...customerTypeDefs,
  forum,
];
