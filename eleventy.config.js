const
  glob = require('fast-glob'),
  { EleventyRenderPlugin } = require('@11ty/eleventy');



module.exports = (eleventyConfig) => {

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addGlobalData('fragments', './site/_theme/layouts/fragments');


  // Custom Data file formats: yaml
  eleventyConfig.addDataExtension("yaml", contents => require("js-yaml").load(contents));


  // Filters
  glob.sync(['./site/_filters/*.js']).forEach(file => {
    let filters = require('./' + file);
    Object.keys(filters).forEach(name => eleventyConfig.addFilter(name, filters[name]));
  });


  // Browser-Sync, Dev mode or "Passthrough File Copy"
  if (process.env.NODE_ENV === 'production') {

    eleventyConfig.addPassthroughCopy({ 'site/static': '.' });
    eleventyConfig.addPassthroughCopy({ 'site/_data/assets': '.' });

  } else {

    require('dotenv').config();

    eleventyConfig.setBrowserSyncConfig({
      browser: process.env.BROWSER || 'default',
      port: process.env.PORT || 3000,
      open: true,
      serveStatic: [
        { dir: 'site/static' },
        { dir: 'site/_data/assets' }
      ],
      snippetOptions: {rule: {match: /<\/body>\n/i}}
    });

  }


  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',

    dir: {
      input: './site',
      includes: '_theme/layouts',
      output: './public'
    }
  };
};
