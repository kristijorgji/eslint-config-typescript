const globals = require('globals');
const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.jest,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin,
            prettier: prettierPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    // always try to resolve types under `<root>@types` directory even it doesn't contain source code,
                    // this can help resolve things like `@types/node` correctly
                    alwaysTryTypes: true,
                    // optionally, you can specify project root if your tsconfig.json is not in the root
                    // project: './path/to/tsconfig.json',
                },
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'off',
            ...importPlugin.configs.recommended.rules,
            ...importPlugin.configs.typescript.rules,
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
            'no-unmodified-loop-condition': 'error',
            'import/no-unresolved': 'error',
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: ['{tests,__tests__,mocks,__mocks__}/**/*.ts'],
                    bundledDependencies: true,
                    optionalDependencies: false,
                    peerDependencies: false,
                },
            ],
            // typescript-eslint rules
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            // stylistic rules
            quotes: ['error', 'single'],
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
                    endOfLine: 'lf',
                },
            ],
        },
    },
];
