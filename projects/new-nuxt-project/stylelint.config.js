module.exports = {
  processors: ['@mapbox/stylelint-processor-arbitrary-tags'],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  ignoreFiles: [
    './generic/_generic.normalize.scss',
    './tools/*.scss',
    './settings/*.scss',
    '*.js',
    '*.ts',
    '.*.js',
    '.*.ts',
    './.eslintrc.js',
  ],
  rules: {
    'prettier/prettier': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/partial-no-import': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'block-no-empty': true,
    'color-named': ['never', { ignoreProperties: '/^-apple-pay-button-style/' }],
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'font-family-name-quotes': 'always-where-required',
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 5,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 10,
    'max-line-length': 180,
    'max-nesting-depth': 4,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'never',
    'number-max-precision': 7,
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-empty-lines': 5,
    'selector-max-compound-selectors': 5,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-no-vendor-prefix': true,
  },
};
