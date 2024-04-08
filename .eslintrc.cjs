module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "standard",
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "error",
        curly: "error",
        "no-undef": "off",
        "prettier/prettier": "error",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
