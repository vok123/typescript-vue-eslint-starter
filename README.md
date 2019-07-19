## TypeScript-Vue-Eslint-Starter

> webpack4
> typescript
> eslint
> vue

No babel, Only typescript. Faster

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
npm i -D @vue/cli-plugin-eslint @vue/eslint-config-standard @vue/eslint-config-typescript eslint eslint-loader eslint-plugin-node eslint-plugin-vue typescript ts-loader
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
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // eslint rules
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
    // typescript-eslint rules
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
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```
