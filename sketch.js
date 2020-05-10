/// <reference path="../p5jstemp/TSDef/p5.global-mode.d.ts"/>


let lemons = [];

function setup() {
    createCanvas(1200,600);
    frameRate(60);
    for(let i = 0; i < 6; i++){
        lemons.push(new Lemon());
    }
}
function draw() {
    background(100);
    for(let i = 0; i < lemons.length; i++){
        lemons[i].createLemon();
        lemons[i].allowMovement();
        lemons[i].allowWallCollision();
        lemons[i].addGravity();
    }
}
