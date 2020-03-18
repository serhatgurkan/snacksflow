module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
      "module:react-native-dotenv"
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@root": "./src",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@store": "./src/store",
            "@services": "./src/services",
            "@sagas": "./src/sagas",
            "@assets": "./assets"
          }
        }
      ]
    ]
  };
};
