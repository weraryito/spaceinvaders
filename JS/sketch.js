var ship;
var bullets = [];
var aliens = [];
var aliensOnEdge = false;
var lose = false; 
var lifes = 2;
var aliensDead = 0;
var cont = 0;
var cont2 = 0;
var level = 1;

function setup() {
	createCanvas(600, 400);
	ship = new Ship()

	for (var i = 0; i < 24; i++) {
		aliens[i] = new Alien((i*70)+30, 50)
	}

	startGame();
}

function draw() {	
	background(80);

	if(!lose){
		ship.show();
		textSize(16);
		text('Vidas: '+lifes, 530, 30);
		text('Nivel: '+level, 530, 60);

	
		for (var i = 0; i < bullets.length; i++) {
			bullets[i].show();
			bullets[i].move();

			for (var j = 0; j < aliens.length; j++) {
				if(bullets[i].collisions(aliens[j])) {
					bullets[i].y = -500;
					aliens[j].destroy();
					aliensDead++;

					if(aliensDead == aliens.length) {
						level++;
						startGame();
					}
				}
			}
		}

		for (var i = 0; i < aliens.length; i++) {
			aliens[i].show();
			aliens[i].move();
			
			if(ship.y <= aliens[i].y){
				lifes--;
				lose = true;
			}

			if(lose) {
				break;
			}

			if(aliens[i].x > width-10 || aliens[i].x < 10){
				aliensOnEdge = true;
			}
		}

		if(aliensOnEdge) {
			for (var i = 0; i < aliens.length; i++) {
				aliens[i].moveDown();
			}
			aliensOnEdge = false;
		}
	} else if(lose && lifes > 0) {
		lose = false;
		startGame();
	} else if(lose && lifes == 0){
		level = 1;
		textSize(20);
		fill(0, 12, 153);
		text('Usted ha perdido, si desea continuar, presione ENTER.', 50, 200);
	}
}

function startGame() {
	if(aliensDead == aliens.length) {
		for (var i = 0; i < aliens.length; i++) {
			aliens[i].speed+=.5;
		}
	}
	aliensDead = 0;
	cont = 0;
	cont2 = 0;
	for (var i = 0; i < aliens.length; i++) {
		if(i < 8) {
			aliens[i].x = (i*70)+30;
			aliens[i].y = 50;
		} else if(i < 16) {
			aliens[i].x = (cont++*70)+30;
			aliens[i].y = 90;
		} else {
			aliens[i].x = (cont2++*70)+30;
			aliens[i].y = 130;
		}
	}
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW)
		ship.move(1)

	if (keyCode == LEFT_ARROW)
		ship.move(-1)

	if (keyCode == UP_ARROW) {
		var bullet = new Bullet(ship.x + ship.width/2, ship.y);
		bullets.push(bullet);
	}

	if(keyCode == ENTER && lose){
		lose = false;
		lifes = 2;
		for (var i = 0; i < aliens.length; i++) {
			aliens[i].speed = 1;
		}	
		startGame();
	}

}