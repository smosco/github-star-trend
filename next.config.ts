import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // NOTE(@smosco): turbopack과 vanilla extract가 호환이 안됨
  turbo: false,
};

export default withVanillaExtract(nextConfig);
