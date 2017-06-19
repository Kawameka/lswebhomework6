//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  num = num * 10;
  return num;
}

function subtractFive(num) {
  //return num after subtracting five
  num = num - 5;
  return num;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  var len1 = str1.length;
  var len2 = str2.length;
  
  if (len1 === len2){
    return true;
  } else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var diff = x - y;
  return diff;
}

function divide(x, y) {
  //divide x by y and return the value
  var quotient = x / y;
  return quotient;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var remain = x % y;
  return remain;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  //return true if num is odd
  //otherwise return false
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  var squared = num * num;
  return squared;
}

function cube(num) {
  //cube num and return the new value
  var cubed = num * num * num;
  return cubed;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var raised = Math.pow(num, exponent);
  return raised;
}

function roundNumber(num) {
  //round num and return it
  var rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  //round num up and return it
  var upper = Math.ceil(num);
  return upper;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var newstr = str + '!';
  return newstr;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var combo = firstName + ' ' + lastName;
  return combo;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var greet = 'Hello ' + name + '!';
  return greet;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var area2 = (base * height) / 2;
  return area2;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var area3 = Math.PI * (radius * radius);
  return Math.round(area3);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  var area4 = length * width * height;
  return area4;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
