const path = require('path')
const { argv } = require('yargs')
const Dotenv = require('dotenv-webpack')
const { EnvironmentPlugin } = require('webpack')

module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/images',
                outputPath: 'static/images',
              },
            },
          },
        },
      })

      config.resolve.alias['@'] = path.join(__dirname, 'src')

      config.plugins.push(
        argv.mode === 'development'
          ? new Dotenv({ path: path.join(__dirname, '.env.local') })
          : new EnvironmentPlugin(Object.keys(process.env)),
      )

      return config
    },
    reactStrictMode: true,
  }
}
