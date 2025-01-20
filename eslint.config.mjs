// @ts-check

// import stylistic from "@stylistic/eslint-plugin"

// import stylisticTs from "@stylistic/eslint-plugin-ts"

import tseslint from "typescript-eslint"

import vue from "eslint-plugin-vue"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  // Your custom configs here
  // vue
  ...vue.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // "@typescript-eslint/no-var-requires": 0,
      // "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-this-alias": 0,
      //  "@typescript-eslint/no-empty-function": 0,
      // "@typescript-eslint/no-unused-vars": 0,

      /**
       * PROP 需要定義類型 ，先移除之後再加回來的項目列
       */
      "vue/require-prop-types": "off",
      "vue/prop-name-casing": "off",
      "vue/multi-word-component-names": "off",

      "no-use-before-define": "off",
      "space-before-function-paren": "off",
      /**
       * 新rule
       */
      "vue/v-on-event-hyphenation": "off",

      /**
       *
       */
      // "vue/multi-word-component-names": 0,

      "vue/no-v-html": "off",
      "vue/script-setup-uses-vars": "off",
      "vue/custom-event-name-casing": "off",

      "vue/attributes-order": "off",
      "vue/one-component-per-file": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/max-attributes-per-line": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/attribute-hyphenation": "off",
      "vue/require-default-prop": "off",
      "vue/require-explicit-emits": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/no-unused-components": [
        "error",
        {
          ignoreWhenBindingPresent: true,
        },
      ],
      "vue/no-unused-vars": [
        "error",
        {
          ignorePattern: "^_",
        },
      ],
    },
  },
)
