require('dotenv').config();


const permalink = (filePathStem, prefix) => {
  filePathStem = filePathStem
    .replace(/^(\/.*?)(\/index)?$/, `$1/`) // Delete last segment with `index`
    .replace(/^\/[^/]*(\/.*)$/, `${prefix}$1`); // replace first segment (folder) with the prefix
  return filePathStem;
};

module.exports = {

  site: {
    url: process.env.SITE_URL || 'https://fruits-express.com'
  },

  eleventyComputed: {
    permalink: data => data.permalink ? data.permalink : permalink(data.page.filePathStem, data?.section?.prefix)
  }

};
