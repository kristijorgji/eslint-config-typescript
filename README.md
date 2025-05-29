# @kristijorgji/eslint-config-typescript

A general-purpose ESLint and Prettier configuration for TypeScript projects (non-browser environments).  
If you need rules specific to React, Next.js, or other frameworks, you can extend or override these rules after including this config.

# Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
    - [Configuration](#configuration)
- [Development](#development)
- [License](#license)

## Requirements

- ESLint version **>= 8.21.0** with support for Flat Config.

## Installation

Install the package and peer dependencies using:

```bash
yarn add --dev @kristijorgji/eslint-config-typescript@latest
```

> **Note:**  
> When migrating from an older ESLint setup, please remove conflicting or duplicate dependencies first, for example:  
> `yarn remove eslint prettier @typescript-eslint/eslint-plugin`

## Usage

### Configuration

For ESLint **>= 9.x**, use `FlatCompat.extends` for compatibility.

Example `eslint.config.js`:

```js
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const { defineConfig } = require('eslint/config');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([
    {
        files: ['src/**/*.ts', '__tests__/**/*.ts'],
        extends: compat.extends('@kristijorgji/eslint-config-typescript'),
    },
]);
```

## Development

Learn more about creating custom ESLint configs here:  
[ESLint Shareable Configs Guide](https://eslint.org/docs/developer-guide/shareable-configs)

To develop locally, you can link your local package using:

```bash
yarn add --dev /path/to/local/eslint-config-typescript
```

> You need to run this command after every change to your local plugin.

## License

[MIT](LICENSE)
