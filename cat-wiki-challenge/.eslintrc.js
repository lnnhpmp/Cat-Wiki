module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': [
        'plugin:vue/essential',
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'parser': '@typescript-eslint/parser',
    },
    'plugins': [
        'html',
        'vue',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'never',
        ],
        'max-len': ['error', {'code': 120}],
    },
}
