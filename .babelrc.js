module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          ie: 11,
          ie: 10,
          'browsers': [
            "> 1%",
            "IE 10"
          ]
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        loose: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins: [
    process.env.PLUGINS && 'transform-es2015-modules-strip',
    ['@babel/proposal-object-rest-spread', {
      loose: true,
      useBuiltIns: true
    }],
    '@babel/plugin-proposal-throw-expressions'
  ].filter(Boolean),
  env: {
    test: {
      plugins: [ 'istanbul' ]
    }
  }
};
