const money = new Intl.NumberFormat('th', {style: 'currency', currency: 'THB'});

module.exports = {

  i18n: function (str, dict = this.ctx?.dict) {
    return (dict && dict[str]) ? dict[str] : str;
  },

  price: (price) => money.format(price)

};
