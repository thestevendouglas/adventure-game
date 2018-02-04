// Define the size of the game play area
var maxX = 5
var maxY = 5

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Dragon located here will kill you!
var dragonX = 4
var dragonY = 2

// Flag that controls loop 
var treasureFound = false 
// Start Button click sound
var sound = document.getElementById("audio")

function playSound (){
  sound.play(); 
}

function myFunction(){
  var name = prompt("Welcome adventurous explorer! What is your name?");
  alert("Ok"+ " "+ name + "!" +" "+"Let's go get some gold coins!");
  
  

while(!treasureFound){
  var direction = prompt("Which direction would you like to go in? (north, south, east, west)");
  
  console.log(direction)
  
  // tmp vars, only used for checking validity of new user location after move
  var newX 
  var newY
  
  // When new direction entered:
  // see what new user location would be
  // check if new user location is valid
  // check if new user location is treasure
  
  if(direction == "north"){
    newX = userX 
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
      
    }else {
     console.log("There is nothing but debt and regrets here. Let's go a different way!")
     alert("Choose a different direction")  
     
    }
 
  }else if(direction == "east"){
    newX = userX + 1
    newY = userY 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is nothing but debt and regrets here. Let's go a different way!") 
     alert("Choose a different direction")  
  
    }
    
  }else if(direction == "south"){
    newX = userX 
    newY = userY - 1 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is nothing but debt and regrets here. Let's go a different way!")
     alert("Choose a different direction")   
    }
    
  }else if(direction == "west"){
    newX = userX - 1
    newY = userY
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is nothing but debt and regrets here. Let's go a different way!")
     alert("Choose a different direction")   
    }
    
  }else {
   console.log("Please enter a real direction") 
  }
  
  console.log("The user's x is: " + userX)
  console.log("The user's y is: " + userY)
  
  // see if user location matches treasure
  if(userX == treasureX && userY == treasureY){
    console.log("Hooray! You found the treasure!")
   treasureFound = true 
  }
  // if you land here, the dragon will kill you
  if(userX == dragonX && userY == dragonY){
    userX = 0
    userY = 0
    console.log("You fell into a pit of despair! You can't get out! Click START to begin again")
    alert("You fell into a pit of despair! You can't get out! Click START to begin again")
    break;
    
    }
  }
}
