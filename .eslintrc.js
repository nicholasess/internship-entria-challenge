module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module"
    },
    parser: "babel-eslint",
    rules: {
        indent: ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"]
    }
};
