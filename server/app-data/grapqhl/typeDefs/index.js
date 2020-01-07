import root from './root';
import vendorTypeDefs from './vendor';
import customerTypeDefs from './customer';
import user from './user';
import forum from './forum';
import marketplace from './marketplace';


export default [
  root,
  user,
  ...vendorTypeDefs,
  ...customerTypeDefs,
  forum,
  ...marketplace,
];
