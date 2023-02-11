module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'transform-inline-environment-variables',
  ],
  presets: [
    '@babel/preset-typescript',
    [
      'module:metro-react-native-babel-preset',
      {disableImportExportTransform: true},
    ],
  ],
};
