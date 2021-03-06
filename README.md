# vuepress-plugin-mathjax

[![Build Status](https://travis-ci.org/Shigma/vuepress-plugin-mathjax.svg?branch=master)](https://travis-ci.org/Shigma/vuepress-plugin-mathjax)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-mathjax.svg)](https://www.npmjs.com/package/vuepress-plugin-mathjax)

A [VuePress](https://vuepress.vuejs.org/) plugin which supports TeX syntax in markdown files.

- [Home Page](https://shigma.github.io/vuepress-plugin-mathjax/)
- [Change Log](https://shigma.github.io/vuepress-plugin-mathjax/guide/changelog.html)

## Usage

```bash
npm i vuepress-plugin-mathjax
# OR
yarn add vuepress-plugin-mathjax
```

## Configurations

### target

- **type**: `'svg' | 'chtml'`
- **default**: `'chtml'`

The output of MathJax.

### packages

- **type**: `string | string[]`
- **default**: all the MathJax packages available

The MathJax packages to use.

### macros

- **type**: `{ [key: string]: string | null }`
- **default**: `{}`

Macros will be automatically mixed with built-in macros. To disable a built-in macro, simply set the value to `null` accordingly. Here is a list of all built-in macros:

### presets

- **type**: `string | string[]`
- **default**: `[]`

The preset content to be added. The preset content will automatically be inserted before the TeX code.

### showError

- **type**: `boolean`
- **default**: `false`

Whether to output an error message in the console when a compilation error is encountered.

### cache

- **type**: `false | object`
- **default**: `{}`

[LRU Cache](https://github.com/isaacs/node-lru-cache) Options. If set to `false`, no cache will be used.

## Contribution

Contribution Welcome!
