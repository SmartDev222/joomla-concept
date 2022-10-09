module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4]
    },
    globals: {
        bootstrap: 'readonly',
        enterView: 'readonly',
        simpleParallax: 'readonly',
        Splide: 'readonly'
    }
}
