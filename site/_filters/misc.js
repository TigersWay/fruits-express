module.exports = {

  joinUrl: (array) => '/' + array.filter(value => value !== '').join('/') +'/'

};
