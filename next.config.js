const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withReacSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");


module.exports = withPlugins([
  withCss({}),
  withImages({}),
  withReacSvg({
    include: path.resolve(__dirname, './public/images'),
    webpack(config, options) {
      return config
    }
  })
])
