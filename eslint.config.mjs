import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        ignores: ['node_modules/**', '**/Public/**']
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                document: 'readonly',
                window: 'readonly'
            }
        }
    },
    prettierRecommended
];
