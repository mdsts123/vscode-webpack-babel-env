const path = require('path'),
  glob = require('glob'),
  entries = getEntry('src/**/*.js', 'src/'),
  isDev = process.env.NODE_ENV === 'development';
console.log(entries,isDev);

module.exports = {
  mode: process.env.NODE_ENV, // "production" | "development" | "none"
  entry: entries,
  watch: true,
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename:`[name].${isDev?'bundle':'min'}.js`,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  chrome: '58',
                  ie: '10',
                  safari: '9',
                },
              },
            ],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool:isDev?'source-map':'none',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  },
};

function getEntry(globPath, pathDir) {
  var files = glob.sync(globPath);
  var entries = {},
    entry,
    dirname,
    basename,
    pathname,
    extname;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.normalize(path.join(dirname, basename));
    pathDir = path.normalize(pathDir);
    if (pathname.startsWith(pathDir)) {
      pathname = pathname.substring(pathDir.length);
    }
    entries[pathname] = './' + entry;
  }
  return entries;
}
