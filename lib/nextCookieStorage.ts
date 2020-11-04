import { ScoringStorage } from '@uniformdev/optimize-tracker-common';
import { NextPageContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { cookieScoringStorage } from '@uniformdev/optimize-tracker-storage-cookie';

export const createNextCookieStorage = (ctx?: NextPageContext): ScoringStorage => {
  const cookieStorage = cookieScoringStorage({
    getCookie: (name) => {
      const cookies = parseCookies(ctx) || {};
      return cookies[name];
    },

    setCookie: (name, value) => {
      setCookie(ctx, name, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    },
  });

  return cookieStorage;
};
