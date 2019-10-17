import redirect from '../redirect';
import { setCookie, getCookie, removeCookie } from './session';

export const signIn = (res) => {
  setCookie('firstName', res.firstName);
  setCookie('lastName', res.lastName);
  setCookie('jwt', res.jwt);
  redirect('/admin');

  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie('jwt');
    redirect('/auth/login', ctx);
  }
};

export const getJwt = ctx => getCookie('jwt', ctx.req);
export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = (ctx) => {
  if (isAuthenticated(ctx)) {
    redirect('/admin', ctx);
    return true;
  }

  return false;
};

export const redirectIfNotAuthenticated = (ctx) => {
  if (!isAuthenticated(ctx)) {
    redirect('/auth/login', ctx);
    return true;
  }

  return false;
};
