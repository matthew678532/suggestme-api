module.exports = {
    "env": {
        "es6": true,
        "node": true,
				"mocha": true
    },
    "parserOptions": {
        "sourceType": "module",
				"ecmaVersion": 6,
				"impliedStrict": true
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["warn", "windows"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
				"no-compare-neg-zero": "error",
				"no-cond-assign": ["error", "always"],
				"no-constant-condition": "error",
				"no-debugger": "error",
				"no-dupe-args": "error",
				"no-dupe-keys": "error",
				"no-dupe-case": "error"
				"no-empty": "error",
				"no-ex-assign": "error",
				"no-extra-boolean-cast": "error",
				"no-extra-semi": "error",
				"no-func-assign": "error",
				"no-inner-declarations": "error",
				"no-invalid-regexp": "error",
				"no-irregular-whitespace": "error",
				"no-obj-calls": "error",
				"no-regex-spaces": "error",
				"no-sparse-arrays": "error",
				"no-template-curly-in-string": "error",
				"no-unexpected-multiline": "error",
				"no-unreachable": "error",
				"no-unsafe-finally": "error",
				"no-unsafe-negation": "error",
				"use-isnan": "error",
				"valid-typeof": "error"
    }
};
