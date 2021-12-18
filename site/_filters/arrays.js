module.exports = {

  shuffle: (array) => { // Fisher-Yates (aka Knuth) Shuffle
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) { // While there remain elements to shuffle...
      randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element...
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; // And swap it with the current element.
    }

    return array;
  }

};
