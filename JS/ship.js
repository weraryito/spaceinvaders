function Ship() {
	this.width = 20;
	this.height = 30;

	this.x = width/2;
	this.y = height-35;

	this.show = function() {
		fill(255);
		noStroke();
		rect(this.x, this.y, this.width, this.height);
	}

	this.move = function(dir) {
		this.x += dir * 30
	}
}