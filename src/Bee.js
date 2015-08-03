var Bee = function(job, food) {
	Grub.call(this, food);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


var bee = new Bee();
console.log(bee.food);
