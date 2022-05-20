require('dotenv').config();

const {relativeUrl} = require('./_filters/urls');

module.exports = {

  site: {
    url: process.env.SITE_URL || 'https://fruits-express.com'
  },

  eleventyComputed: {
    permalink: data => data.permalink ? data.permalink : relativeUrl(data.page.filePathStem, data?.section?.prefix)
  }

};
