import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'eslint:recommended', // 기본 ESLint 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
    'plugin:react/recommended', // React 추천 규칙
    'next/core-web-vitals', // Next.js 추천 규칙
    'prettier' // Prettier 규칙과 충돌 방지
  ),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js에서는 불필요
      '@typescript-eslint/no-unused-vars': ['warn'], // 미사용 변수 경고
      'prettier/prettier': ['error'], // Prettier 규칙 적용
      'no-console': 'warn', // console.log 경고
      'no-debugger': 'error', // debugger 금지
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입 강제하지 않음
    },
  },
];

export default eslintConfig;
