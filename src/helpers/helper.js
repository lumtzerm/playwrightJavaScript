class Helpers {
  getRandomPositiveInt(max) {
    return Math.floor(Math.random() * (max - 1)) + 1;
  }
}
module.exports = { Helpers };
