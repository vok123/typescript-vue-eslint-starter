## TypeScript-Babel-Vue-Eslint-Starter

```

Webpack 4.0+
Typescript 3.7+
Eslint 7.0+
Vue 2.0+
Babel 7.0+

```

``` babel + typescript ``` faster than ``` only typescript ```, support tsx

### Start

```shell
npm install
npm run dev
npm run build
```

## Usage
### 1. Install

- Install devDependencies

```shell
npm i -D
  @typescript-eslint/eslint-plugin
  @typescript-eslint/parser
  eslint
  eslint-config-standard
  eslint-plugin-standard
  eslint-plugin-import
  eslint-plugin-promise
  eslint-webpack-plugin
  eslint-plugin-node
  eslint-plugin-vue
  typescript
  @babel/cli
  @babel/core
  @babel/plugin-proposal-class-properties
  @babel/plugin-proposal-decorators
  @babel/plugin-proposal-numeric-separator
  @babel/plugin-proposal-object-rest-spread
  @babel/preset-env
  @babel/preset-typescript
  babel-eslint
  babel-loader
```

- Install dependencies

```shell
npm i -S vue-class-component vue-property-decorator
```

### 2. Webpack config (add babel-loader)

```javascript
const ESLintPlugin = require('eslint-webpack-plugin');

{
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ];
  },
  plugins: [
    new ESLintPlugin({
      fix: false,
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
      cache: false,
      emitWarning: true,
      emitError: true
    })
  ]
}
```

### 3. Add .eslintrc.js

```javascript
module.exports = {
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    env: { es6: true },
    sourceType: 'module'
  },
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/base', 'plugin:@typescript-eslint/recommended', 'plugin:vue/essential', 'standard'],
  rules: {
    // default eslint rules
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'no-console': 0,
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': 0,
    eqeqeq: 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    camelcase: 0,
    'no-new': 0,
    indent: 'off',
    semi: 'off',
    // typescript-eslint rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0
  }
};
```

### 4. Add tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "allowJs": true,
    "baseUrl": ".",
    "types": ["webpack-env", "node"],
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["ESNext", "dom", "dom.iterable", "scripthost"]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 5. Add .babelrc

```json
{
  "presets": ["@babel/env", "@babel/typescript", "@vue/babel-preset-jsx"],
  "plugins": [
    "@babel/proposal-numeric-separator",
    [
      "@babel/proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["@babel/proposal-class-properties", { "loose": false }],
    "@babel/proposal-object-rest-spread"
  ]
}

```
