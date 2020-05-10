class Lemon {
    constructor() {
        this.position = createVector(random(0,1200), random(10,150));
        this.velocity = createVector(0, random(0.5,5));
        this.acceleration = createVector();
        this.addGrav = 0;
        this.colour = '#111111';
    }

    createLemon() {
        fill(this.colour);
        circle(this.position.x, this.position.y, 50);
    }

    addGravity() {
        let g = 0.6;
        this.addGrav = 1;
        if(abs(this.position.y) > height){
            this.velocity.y = 0;
            this.position.y = height+25;
        } else {
            this.velocity.y = this.velocity.y + (g);
        }
    }
    allowMovement() {
        this.position.y += this.velocity.y;
    }
    allowWallCollision() {
        if(this.position.y > height-25 && this.velocity.y > 1.5){
            console.log('vel: ' + this.velocity.y.toString());
            this.velocity.y *= -1;
            this.velocity.y += 1;
            this.colour = '#'+Math.floor(Math.random()*16777215).toString(16);;
            fill(this.colour);
            console.log('vel: ' + this.velocity.y.toString());
        }
    }
}