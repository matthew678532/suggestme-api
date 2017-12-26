// off - 0 | warn - 1 | error - 2
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
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, "always"],
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-typeof": 2,

    "block-scoped-var": 2,
    "array-callback-return": 1,
    "complexity": [2, {max: 5}],
    "default-case": [2, {"commentPattern": "^skip\\sdefault"}],
    "dot-notation": 1,
    "eqeqeq": [2, "smart"],
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 1,
    "no-empty-function": 2,
    "no-empty-pattern": 1,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-bind": 1,
    "no-fallthrough": 1,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [2, {"ignoreArrayIndexes": true}],
    "no-multi-spaces": [2, {"ignoreEOLComments": true}],
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": [1, {"builtinGlobals": true}],
    "no-return-assign": [2, "always"],
    "no-return-await": 1,
    "no-script-url": 2,
    "no-self-assign": 1,
    "no-self-compare": 1,
    "no-sequences": 2,
    "no-restricted-syntax": [2, "SequenceExpression"],
    "no-throw-literal": 1,
    "no-unmodified-loop-condition": 1,
    "no-useless-call": 1,
    "no-useless-concat": 1,
    "no-useless-escape": 1,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    "radix": [2, "as-needed"],
    "require-await": 1,
    "vars-on-top": 2,
    "wrap-iife": [2, "inside", {"functionPrototypeMethods": true}],
    "yoda": [2, "never", {"exceptRange": true}],

    "init-declarations": [2, "always"],
    "no-catch-shadow": 2,
    "no-delete-var": 1,
    "no-shadow": [1, {"hoist": "functions"}],
    "no-shadow-restricted-names": 2,
    "no-undef": [1, {"typeof": true}],
    "no-undef-init": 1,
    "no-unused-vars": 1,
    "no-use-before-define": 1,

    "indent": [2, 4],
    "linebreak-style": [1, "windows"],
    "quotes": [2, "single"],
    "semi": [2, "never"],
    "callback-return": [1, ["callback", "cb", "next"]],
    "handle-callback-err": [2, "^.*(e|E)rr"],
    "no-buffer-constructor": 2,
    "no-new-require": 1,
    "no-path-concat": 2,
    "camelcase": [1, {"properties": "always"}],
    "comma-dangle": [2, "never"],
    "comma-spacing": [1, {"before": false, "after": true}],
    "computed-property-spacing": [1, "never"],
    "func-call-spacing": [1, "never"],
    "func-name-matching": [2, {"includeCommonJSModuleExports": false}],
    "function-paren-newline": [1, "never"],
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": [1, {"afterColon": true}],
    "line-comment-position": [1, {"position": "above"}],
    "linebreak-style": [1, "unix"],
    "lines-between-class-members": [1, "always"],
    "max-depth": [1, {"max": 4}],
    "max-len": [1, {
      "code": 70,
      "tabWidth": 2
    }],
    "max-nested-callbacks": [1, {"max": 3}],
    "max-params": [1, {"max": 4}],
    "max-statements-per-line": [1, {"max": 1}],
    "multiline-comment-style": [1, "starred-block"],
    "multiline-ternary": [1, "never"],
    "new-cap": [2, {"capIsNew": false}],
    "new-parens": 1,
    "newline-per-chained-call": [1, {"ignoreChainWithDepth": 3}],
    "no-array-constructor": 1,
    "no-continue": 1,
    "no-inline-comments": 1,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": 2,
    "no-multiple-empty-lines": 1,
    "no-negated-condition": 1,
    "no-new-object": 2,
    "no-trailing-spaces": 1,
    "no-unneeded-ternary": 1,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": [1, "beside"],
    "object-curly-spacing": [1, "never"],
    "one-var": [1, {"const": "never"}],
    "one-var-declaration-per-line": [1, "always"],
    "operator-linebreak": [1, "before"],
    "padded-blocks": [1, "never"],
    "quote-props": [1, "as-needed"],
    "quotes": [1, "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "semi-style": [1, "last"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [1, "never"],
    "space-infix-ops": [2, {"int32Hint": false}],
    "space-unary-ops": [1, {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": [1, "always"],
    "switch-colon-spacing": [1, {"after": true, "before": false}],
    "template-tag-spacing": [2, "never"],
    "wrap-regex": 1,

    "arrow-body-style": [1, "as-needed", {
       "requireReturnForObjectLiteral": true
    }],
    "arrow-parens": [1, "as-needed", {"requireForBlockBody": true}],
    "arrow-spacing": [1, {"before": true, "after": true}],
    "constructor-super": 2,
    "generator-star-spacing": [1, {
      "before": false,
      "after": true,
      "anonymous": "neither"
    }],
    "no-class-assign": 2,
    "no-confusing-arrow": [1, {"allowParens": true}],
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": [2, {"includeExports": true}],
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "no-var": 1,
    "object-shorthand": [1, "properties"],
    "prefer-arrow-callback": [1, {
      "allowNamedFunctions": false,
      "allowUnboundThis": true
    }],
    "prefer-const": [1, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    "prefer-template": 1,
    "require-yield": 2,
    "rest-spread-spacing": [1, "never"],
    "sort-imports": [1, {
      "ignoreCase": true,
      "ignoreMemberSort": true,
      "memberSyntaxSortOrder": [
        "none",
        "single",
        "multiple",
        "all"
      ]
    }],
    "template-curly-spacing": [1, "never"],
    "yield-star-spacing": [1, "after"]
  }
};
