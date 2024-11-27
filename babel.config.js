module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'react-native-reanimated/plugin',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-export-namespace-from',
    ["@babel/plugin-transform-private-methods", {
      "loose": true
    }],
    'react-native-reanimated/plugin',
  ],
};
