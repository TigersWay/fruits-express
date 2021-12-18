module.exports = {

  debug: (o, depth = 2, minimal = true, blackList = ['templateContent', '_templateContent']) => {
    if (process.env.NODE_ENV !== 'production') {
      return '<pre class="Eleventy">' +
        require('string-kit').inspect({
          style: 'html', tab: '&nbsp;&nbsp;',
          depth: depth,
          // maxLength: 250,
          outputMaxLength: 20*1024,
          minimal: minimal,
          propertyBlackList: new Set(blackList)
        }, o) +
        '</pre>';
    } else return '';
  },

};
