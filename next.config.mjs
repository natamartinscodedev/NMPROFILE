/** @type {import('next').NextConfig} */

import withVideos from 'next-videos';
import nextI18NextConfig from './next-i18next.config.js';
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin();

const { i18n } = nextI18NextConfig;

const nextConfig = {
    ...withVideos({}),
    ...withNextIntl({})
    // i18n,
};

export default nextConfig;