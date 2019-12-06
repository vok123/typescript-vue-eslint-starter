## TypeScript-Vue-Eslint-Starter

> webpack4
> typescript
> eslint
> vue

No babel, Only typescript.

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
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/experimental-utils @typescript-eslint/parser @typescript-eslint/typescript-estree eslint eslint-config-standard eslint-plugin-standard eslint-plugin-import eslint-plugin-promise eslint-loader eslint-plugin-node eslint-plugin-vue typescript ts-loader
```

- Install dependencies

```shell
npm i -S vue-class-component vue-property-decorator
```

### 2. Webpack config (add ts-loader/eslint-loader)

```javascript
module: {
  rules: [
    {
      test: /\.ts(x)?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
        happyPackMode: false
      }
    },
    {
      test: /\.(js|vue|ts|tsx|jsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: false,
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
        cache: false,
        emitWarning: true,
        emitError: false
      }
    }
  ];
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
    node: true,
    serviceworker: true
  },
  extends: ['plugin:vue/base', 'plugin:@typescript-eslint/recommended', 'plugin:vue/essential', 'standard'],
  rules: {
    // 设置默认eslint规则
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
    // 设置typescript-eslint规则
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
    "target": "es5",
    "module": "esnext",
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
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "tests/**/*.ts", "tests/**/*.tsx"],
  "exclude": ["node_modules"]
}
```
