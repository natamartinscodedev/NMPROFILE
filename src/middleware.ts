import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ptbr'],

    // Used when no locale matches
    defaultLocale: 'ptbr'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ptbr|en)/:path*']
};