const permalink = (filePathStem, prefix) => {
  let segments = filePathStem.replace(/^\/|\/$/g, '').split('/');

  if (segments[segments.length-1] == 'index') segments.pop(); // Get rid of last 'index' segment

  if (/^[a-z]{2}(?:-[a-zA-Z]{2})?$/.test(segments[0])) segments[0]=prefix; // Change folder prefix to url prefix

  return '/' + segments.join('/') + '/';
};

module.exports = {

  eleventyComputed: {
    permalink: data => data.permalink ? data.permalink : permalink(data.page.filePathStem, data.section.languagePrefix)
  }

};
