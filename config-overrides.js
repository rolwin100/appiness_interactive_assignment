const { override, addBabelPlugin } = require('customize-cra');

module.exports = (config, env) => {
  const plugins = [];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
    plugins.push('@babel/plugin-syntax-dynamic-import');
  }

  return override(...plugins.map((plugin) => addBabelPlugin(plugin)))(
    config,
    env,
  );
};
