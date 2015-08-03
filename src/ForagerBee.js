var ForagerBee = function(color) {
  Bee.call(this,color);
  this.age = 10;
  this.job = 'find pollen';
  this.honeyPot = 0;
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  return this.treasureChest.push(treasure);
};
