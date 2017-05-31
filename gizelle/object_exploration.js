/*jshint esversion: 6*/
// Let's create a CAR
//PROPERTIES: COLOR, MAKE, MODEL, hasAC
const Car = {
  color: 'green', //semi-colons wreck yo' life! (inside of objects)
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, //technically, all of the left side is a string
  paint: function(newColor){ //functions on objects are called METHODS
    // Car.color = newColor;
    this.color = newColor; //inside of the object "this" refers to the object
  },
  fixAC: function(){
    this.hasAC = true;
  }
};

console.log('Car: ', Car);
// I want to fix the AC
Car.hasAC = true; //this is shorthand
console.log('Car: ', Car);
// Alternatively, you can do the following:
Car['hasAC'] = false;
console.log('Car: ', Car);

// I want to check the COLOR
console.log('Color of car: ', Car.color);

// Paint the Car
Car.paint('orange');
console.log('Car: ', Car);

// FIx the AC
Car.fixAC();
console.log('Car after AC fix: ', Car);



// SHIRT OBJECTS
// You need at least three properties
// You need at least three methods from your plan
// One of you rmethods should modify a property such as 'paint' above
// You need to demonstrate the usage of each method
const Shirt = {
  color: "yellow",
  size: "small",
  style: "turtle neck",
  cut: function(){
    this.style = "tank top";
  },
  tieDye: function(multiColor){
    this.color = multiColor
  },
  changeSize: function(XS){
    this.size = XS;
  }
};

console.log("The latest shirt style: ", Shirt);

// TieDye the shirt:
Shirt.tieDye("Purple");
console.log('This shirt is now: ', Shirt);

// CHange the style of the shirt
Shirt.cut();
console.log('New shirt style: ', Shirt);

// I need a smaller shirt
Shirt.cut();
console.log('New shirt: ', Shirt);
