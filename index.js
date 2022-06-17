module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: ['standard', 'eslint:recommended', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'eslint-plugin-import'],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
        'import/no-unresolved': [
            'error',
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['{tests,__tests__,mocks,__mocks__}/**/*.ts'],
                bundledDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        quotes: ['error', 'single'],
        '@typescript-eslint/no-unused-vars': 'error',
        'object-shorthand': 'off',
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSpacing: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
                endOfLine: "lf"
            },
          ],
    },
};
