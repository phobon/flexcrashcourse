module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: ['babel-loader', '@mdx-js/loader']
    });
    return config;
  }
}