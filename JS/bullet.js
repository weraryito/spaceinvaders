function Bullet(x, y) {
	this.x = x;
	this.y = y;
	this.r = 5;

	this.show = function() {
		fill('YELLOW');
		noStroke();
		ellipse(this.x, this.y, this.r, this.r);
	}

	this.move = function() {
		this.y -= 5;
	}

	this.collisions = function(alien) {
		var d = dist(this.x, this.y, alien.x, alien.y);
		if (d < this.r + alien.r) {
			return true;
		} else {
			return false;
		}
	}
}