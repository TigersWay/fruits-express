require('dotenv').config();

const
  { EleventyRenderPlugin } = require('@11ty/eleventy');


module.exports = (eleventyConfig) => {

  // Plugins
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addGlobalData('fragments', './site/_theme/layouts/fragments');


  // Custom Data file formats: yaml
  eleventyConfig.addDataExtension("yaml", contents => require("js-yaml").load(contents));


  // Filters
  require('fast-glob').sync(['./site/_filters/*.js']).forEach(file => {
    let filters = require('./' + file);
    Object.keys(filters).forEach(name => eleventyConfig.addFilter(name, filters[name]));
  });


  // Engine & Filter: Markdown
  const Markdown = require('markdown-it')({
    html: true,         // Enable HTML tags in source
    breaks: true,       // Convert '\n' in paragraphs into <br>
    linkify: true,      // Autoconvert URL-like text to links
    typographer: true,  // Enable some language-neutral replacement + quotes beautification
  })
  .use(require('markdown-it-link-attributes'), {
    pattern: /^(https?:)?\/\//,
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  });
  eleventyConfig.setLibrary('md', Markdown);
  eleventyConfig.addFilter('markdown', content => Markdown.render(String(content)));


  // Engine: Nunjucks
  eleventyConfig.setNunjucksEnvironmentOptions({trimBlocks: true, lstripBlocks: true});


  // Browser-Sync, Dev mode or "Passthrough File Copy"
  if (process.env.NODE_ENV === 'production') {

    eleventyConfig.addPassthroughCopy({ 'site/static': '.' });
    eleventyConfig.addPassthroughCopy({ 'site/_data/images': 'images' });

    eleventyConfig.ignores.add('site/admin.njk');

    // Transform : html-minifier
    eleventyConfig.addTransform('html-minify', async (content, outputPath) => {
      if ( outputPath && /(\.html|\.xml)$/.test(outputPath) ) {
        return require('html-minifier').minify(content, {
          useShortDoctype: true,
          minifyJS: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        });
      }
      return content;
    });

  } else {

    const serveStatic = require('serve-static');

    eleventyConfig.setServerOptions({
      middleware: [
        serveStatic('./site/_data'),
        serveStatic('./site/static')
      ],
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
