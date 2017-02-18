function Obstacle() {

	this.width = 23;
	this.height = 46;

	this.x = width;
	this.y = 93;
}


Obstacle.prototype.update = function(speed) {

	this.x -= speed;
};


Obstacle.prototype.show = function() {
	
	rect(this.x, this.y, this.width, this.height);
};


Obstacle.prototype.hits = function(tRex) {
	
	if (tRex.x < this.x + this.width && tRex.x + tRex.width > this.x &&
		tRex.y < this.y + this.height && tRex.height + tRex.y > this.y) {
	    return true;
	}
	
	return false;
};


Obstacle.type = {
	CACTUS: 'CACTUS',
	PTERODACTYL: 'PTERODACTYL'
};