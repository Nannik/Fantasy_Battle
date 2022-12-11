module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        "react/function-component-definition": [2, {
            "namedComponents": "arrow-function"
        }]
    },
    root: true,
};