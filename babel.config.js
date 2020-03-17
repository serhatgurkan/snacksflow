module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./assets"
          }
        }
      ]
    ]
  };
};
