// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   // plugins: [
//   //   'react-native-reanimated/plugin',
//   // ],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
<<<<<<< HEAD
  // plugins: ['react-native-reanimated/plugin'],
  plugins: [
    'react-native-reanimated/plugin',
],
  };
=======
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        version: '7.0.0-beta.0',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
>>>>>>> 30b9345d93263c883b54d91c7c20114a0ffff6f5
