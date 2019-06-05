module.exports = {
  'rules': {
    'arrow-return-shorthand': true,
    'ban-comma-operator': true,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    'curly': true,
    'eofline': true,
    'indent': [
      true,
      'spaces'
    ],
    'only-arrow-functions': true,
    'no-default-export': true,
    'no-duplicate-variable': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-internal-module': true,
    'no-misused-new': true,
    'no-return-await': true,
    'no-string-throw': true,
    'no-trailing-whitespace': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'always',
        'singleline': 'never'
      }
    ],
    'no-unnecessary-type-assertion': true,
    'no-unsafe-finally': true,
    'no-var-keyword': true,
    'no-reference': true,
    'import-spacing': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-shorthand': true,
    'one-line': [
      true,
      'check-open-brace',
      'check-whitespace'
    ],
    'prefer-const': true,
    'prefer-readonly': true,
    'quotemark': [
      true,
      'single',
      'jsx-double'
    ],
    'semicolon': [
      true,
      'always',
      'ignore-bound-class-methods'
    ],
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      }
    ],
    'variable-name': [
      true,
      'ban-keywords'
    ],
    'whitespace': [
      true,
      'check-module',
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type'
    ]
  }
}
