function Alien(x, y) {
	this.x = x;
	this.y = y;
	this.r = 15;

	this.dir = 1;
	this.speed = 1;

	this.show = function() {
		fill('RED');
		noStroke();
		ellipse(this.x, this.y, this.r, this.r);
	}

	this.moveDown = function() {
		this.y += this.r * 2;
		this.dir *= -1;
	}

	this.move = function() {
		this.x += this.dir * this.speed;
	}

	this.destroy = function() {
		this.y = -100000;
	}
}