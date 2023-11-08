

let pizzaX;
let pizzaY;
let seasoningMix = [];

function setup() {
  createCanvas(400, 400);
  pizzaX = width / 2;
  pizzaY = height / 2;
}

function draw() {
  background(220);
  
  // Draw the pizza crust
  fill(210, 180, 140);
  stroke(0);
  strokeWeight(2);
  ellipse(pizzaX, pizzaY, 250, 250);
  
   textSize(20);
  // fill(colors[2]);
  text('Click on the pizza', width / 2, (height * 5.5) / 6);
  
  // Draw the pizza toppings
  fill(255, 0, 0); // Tomato sauce
  ellipse(pizzaX, pizzaY, 220, 220);
  fill(255, 255, 0); // Cheese
  ellipse(pizzaX, pizzaY, 210, 210);
  
  // Draw the seasoning mix
  fill(139, 69, 19); // Brown color for seasoning
  for (let i = 0; i < seasoningMix.length; i++) {
    let x = seasoningMix[i].x;
    let y = seasoningMix[i].y;
    ellipse(x, y, 10, 10);
  }
  
  // Draw a pizza slice instead of an ellipse
  fill(255, 204, 0);
  stroke(0);
  strokeWeight(2);
  arc(pizzaX, pizzaY, 250, 250, 0, PI + QUARTER_PI, PIE);
}

function mouseClicked() {
  if (mouseY < pizzaY) {
    // Add seasoning mix at the clicked position
    let newSeasoning = {
      x: mouseX,
      y: mouseY
    };
    seasoningMix.push(newSeasoning);
  }
}