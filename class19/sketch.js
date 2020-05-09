var ball,ball_img,paddle_img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}
function setup() {
  createCanvas(600, 600);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,20,20);
  paddle = createSprite(500,390,20,40);
  /* assign the images to the sprites */
  ball.addImage("ball",ball_img);
  paddle.addImage("paddle",paddle_img);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
 // ball.velocityY = -2;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  
  paddle.collide(edges[3]);
  paddle.collide(edges[2]);

  
  /* Allow the ball to bounceoff from the paddle */
  //randomVelocity();
  //ball.bounceOff(paddle);
  if(ball.bounceOff(paddle)){
    randomVelocity();}
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
 
  /* Prevent the paddle from going out of the edges */ 
   //paddle.y = mouseY
  

  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */paddle.velocityY = paddle.velocityY-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */paddle.velocityY = paddle.velocityY+5;
  }
  if(ball.x > 600){
    ball.x = random(0,500);
    ball.y = random(0,500);}
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
     ball.velocityY = random(-2,6);
  
 
}

