var HoneyMakerBee = function(color, honeyPot) {
  Bee.call(this, color);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
   return this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
   return this.honeyPot--;
};

var honeyMaker = new HoneyMakerBee();
console.log(honeyMaker.food);

