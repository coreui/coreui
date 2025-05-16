import markdown from '@eslint/markdown'
import xo from 'eslint-config-xo'
import xoBrowser from 'eslint-config-xo/browser'
import html from 'eslint-plugin-html'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default [
  eslintPluginImport.flatConfigs.errors,
  eslintPluginImport.flatConfigs.warnings,
  eslintPluginUnicorn.configs.recommended,
  ...xo,
  ...xoBrowser,
  {
    ignores: [
      '**/*.json',
      '**/*.min.js',
      '**/dist/',
      '**/vendor/',
      '.babelrc.js',
      '_gh_pages/',
      'js/coverage/',
      'docs/static/sw.js',
      'docs/layouts/partials/'
    ]
  },
  {
    rules: {
      '@stylistic/comma-dangle': 'off',
      '@stylistic/curly-newline': 'off',
      '@stylistic/function-paren-newline': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/jsx-quotes': 'off',
      '@stylistic/max-len': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/quotes': 'off',
      '@stylistic/semi': 'off',
      'arrow-body-style': 'off',
      'capitalized-comments': 'off',
      'comma-dangle': ['error', 'never'],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always'
        }
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-cycle': [
        'error',
        {
          ignoreExternal: true
        }
      ],
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': ['error'],
      'import/no-useless-path-segments': 'error',
      'import/order': 'error',
      indent: [
        'error',
        2,
        {
          MemberExpression: 'off',
          SwitchCase: 1
        }
      ],
      'logical-assignment-operators': 'off',
      'max-params': ['warn', 5],
      'multiline-ternary': ['error', 'always-multiline'],
      'new-cap': [
        'error',
        {
          properties: false
        }
      ],
      'no-console': 'error',
      'no-negated-condition': 'off',
      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'prefer-object-has-own': 'off',
      'prefer-template': 'error',
      semi: ['error', 'never'],
      strict: 'error',
      'unicorn/explicit-length-check': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-typeof-undefined': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-array-flat': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-dom-node-dataset': 'off',
      'unicorn/prefer-global-this': 'off', // added to avoid the error: 'Use `globalThis` instead of `window` or `global`'
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-structured-clone': 'off',
      'unicorn/prevent-abbreviations': 'off'
    }
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      sourceType: 'module'
    }
  },
  // {
  //   files: ["**/*.json"],
  //   rules: {
  //     "unicorn/expiring-todo-comments": "off"
  //   }
  // },
  {
    files: ['build/**'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: 'module'
    },
    rules: {
      'no-console': 'off',
      'unicorn/prefer-top-level-await': 'off'
    }
  },
  {
    files: ['js/tests/*.js', 'js/tests/integration/rollup*.js'],
    languageOptions: {
      globals: {
        ...globals.jquery,
        ...globals.node
      },
      sourceType: 'commonjs' // change to 'commonjs' to avoid the error: 'Use the function form of 'use strict''
    }
  },
  {
    files: ['js/tests/unit/**'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
        ...globals.jquery
      }
    },
    rules: {
      'max-lines': 'off', // added to avoid the error: 'File must not contain more than 1500 lines of code'
      'no-console': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-add-event-listener': 'off'
    }
  },
  {
    files: ['js/tests/visual/**'],
    plugins: {
      html
    },
    settings: {
      'html/html-extensions': ['.html']
    },
    rules: {
      'no-console': 'off',
      'no-new': 'off',
      'unicorn/no-array-for-each': 'off'
    }
  },
  {
    files: ['scss/tests/**'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: 'commonjs'
    }
  },
  {
    files: ['docs/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...Object.fromEntries(
          Object.entries(globals.node).map(([key]) => [key, 'off'])
        )
      },
      ecmaVersion: 2019,
      sourceType: 'script'
    },
    rules: {
      'no-new': 'off',
      'unicorn/no-array-for-each': 'off'
    }
  },
  {
    files: ['docs/assets/js/**'],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    processor: 'markdown/markdown'
  },
  ...markdown.configs.processor,
  {
    files: ['**/*.md/*.js', '**/*.md/*.mjs'],
    languageOptions: {
      sourceType: 'module'
    },
    rules: {
      'unicorn/prefer-node-protocol': 'off'
    }
  }
]
