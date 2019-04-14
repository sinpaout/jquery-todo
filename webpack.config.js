const qs = require('querystring')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectPath = path.resolve(__dirname, './')

const dir = {
  project: projectPath,
  src: path.join(projectPath, 'src'),
  js: path.join(projectPath, 'js'),
  css: path.join(projectPath, 'src/css'),
  assets: path.join(projectPath, 'src/assets'),
  config: path.join(projectPath, 'config'),
  build: path.join(projectPath, 'build'),
  dist: path.join(projectPath, 'dist'),
  mocks: path.join(projectPath, '__mocks__'),
}

module.exports = {
  context: dir.project,
  entry: {
    index: `${dir.js}/index.js`,
  },
  output: {
    filename: 'bundle.js',
    path: `${dir.build}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index',
      template: `${dir.mocks}/index.ejs`,
      // alwaysWriteToDisk: true,
      chunks: ['index'],
      bootstrap: true,
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [dir.project, dir.js, 'node_modules', dir.assets],
  },
  devServer: {
    contentBase: dir.build,
    port: 8000,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    // https: {
    //   key: fs.readFileSync(path.join(dir.config, './server.key')),
    //   cert: fs.readFileSync(path.join(dir.config, './server.crt')),
    //   ca: fs.readFileSync(path.join(dir.config, './ca.crt')),
    // },
    // open: true,
    inline: true,
  },
}
