const money = new Intl.NumberFormat('th', {style: 'currency', currency: 'THB'});

module.exports = {

  price: (price) => money.format(price)

};
