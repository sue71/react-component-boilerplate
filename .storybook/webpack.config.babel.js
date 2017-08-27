import path from "path";
import genDefaultConfig from "@storybook/react/dist/server/config/defaults/webpack.config.js";

module.exports = function(baseConfig, env) {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [/stories/, /src/],
    loader: require.resolve("ts-loader")
  });

  return config;
};
