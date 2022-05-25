module.exports = {

  relativeUrl: function (path, prefix = this.ctx?.section?.prefix) {
    path = path
    .replace(/^(?:\/[a-z]{2}(?:-[a-zA-Z]{2,3})?)?(\/.*)/,'$1') // Get rid of folder prefix
    .replace('/index', ''); // Get rid of last 'index' segment

    return (prefix || '') + path + '/';
  },

  absoluteUrl: function (url, baseUrl = this.ctx.site.url) {
    return new URL(url, baseUrl).href;
  }

};
