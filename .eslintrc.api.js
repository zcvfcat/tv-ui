// 의존성 모듈
// "@typescript-eslint/eslint-plugin": "^5.0.0",
// "@typescript-eslint/parser": "^5.0.0",
// "eslint": "^8.0.1",
// "eslint-config-airbnb-typescript": "^17.0.0",
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-import": "^2.27.5",
// "eslint-plugin-prettier": "^4.0.0",

/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        "prettier",
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "import/prefer-default-export": 'off',
        "import/no-extraneous-dependencies": ["error", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            },
        ],
        "@typescript-eslint/no-useless-constructor": "off",
        "max-classes-per-file": 'off',
        "class-methods-use-this": 'off',
        'no-underscore-dangle': 'off', // prisma _count

        'prettier/prettier': ['error', { semi: false, printWidth: 120 }],
    },
}
