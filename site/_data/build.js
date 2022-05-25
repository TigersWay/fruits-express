module.exports = (/* configData */) => {

  return {
    forProduction: process.env.NODE_ENV == 'production',

    time: new Date()
  };

};
