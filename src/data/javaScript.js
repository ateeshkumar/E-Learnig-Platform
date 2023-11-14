const javaScript = [
    {
        id:1,
        title:'data type let, const and var',
        course:[
            {
                heading:'var in javascript',
                paragraph:'var are function scoped, which means they are still accessible outside the block scope even though we have declared them inside it.',
                code:`//for loop is block scoped
for (var i = 0; i < 10; i++) {
  var iAmInside = "I am available outside of the loop";
}

console.log(iAmInside);
// I am available outside of the loop

//block scope
if(true){
  var inside = "Inside";
}
console.log(inside);
// Inside

//Function scoped
function myFunc(){
  var functionScoped = "I am available inside this function";
  console.log(functionScoped);
}
myFunc();
// I am available inside this function
console.log(functionScoped);
// ReferenceError: functionScoped is not defined`
},
            {
                heading:'Explanation',
                paragraph:'In the first and second example, the value of the var leaked out of the block-scope and could be accessed from outside of it, whereas in the third example var was confined inside a function-scope and we could not access it from outside.',
                
            },
            {
                heading:'This happens because of Hoisting.',
                paragraph:'var are treated as if they are at the top of the function (or global scope) regardless of where the actual declaration occurs, this is called hoisting. For a demonstration see the following example.',
                code:`var inside;  // hoisted on the top of the function. As there is no function so it is present in the global scope.
//block scope
if(true){
  var inside = "Inside";
}
console.log(inside);
//Inside

//Function scoped In this case value is hoisted inside the function
function getValue(condition) {
  if (condition) {
      var value = "blue";
      return value;
  } else {
      // value exists here with a value of undefined
      return value;
  }

  // value exists here with a value of undefined
}

console.log(getValue(true));   // blue
console.log(getValue(false));  // undefined


//While execution it is hoisted like this internally
function getValue(condition) {
  var value;  //value is hoisted as there is no value attached, so it is undefined.
  if (condition) {
      var value = "blue";
      return value;
  } else {
      // value exists here with a value of undefined
      return value;
  }

  // value exists here with a value of undefined
}
console.log(getValue(true));   // blue
console.log(getValue(false));  // undefined`
            },
            {
                heading:'Block-Level Declarations in javascript',
                paragraph:'Block or lexical scopes are the boundaries in which declared variables are not accessible outside it. This means the variables declared inside it are available inside given block and its sub-blocks. <br/> Many c-based languages work with block scoping and with its introduction in ES6 will bring the same flexibility to the Javascript. <br/> Block are indicated by { and } characters.',
                
            },
            {
                heading:'let in javascript',
                paragraph:'let are declared same as var but it limits the variable scope to the given block. That is why we should declare let at the top of the block so that is accessible throughout the block and its sub-blocks.',
                code:`function getValue(condition) {
  if (condition) {
      let value = "blue";   // accessible inside the given scope only
      return value;
  } else {
      // value doesnot exits here
      return value;
  }

  // value doesnot exits here
}
console.log(getValue(true));   // blue
console.log(getValue(false));  // ReferenceError: value is not defined

let x = 10;
if(x == 10){
  let x = 11;
  console.log(x);   //11  value of x inside if block
}
console.log(x); //10 value of x`
            },
            {
                heading:'let in javascript',
                paragraph:'let are declared same as var but it limits the variable scope to the given block. That is why we should declare let at the top of the block so that is accessible throughout the block and its sub-blocks.',
                code:`function getValue(condition) {
  if (condition) {
      let value = "blue";   // accessible inside the given scope only
      return value;
  } else {
      // value doesnot exits here
      return value;
  }

  // value doesnot exits here
}
console.log(getValue(true));   // blue
console.log(getValue(false));  // ReferenceError: value is not defined

let x = 10;
if(x == 10){
  let x = 11;
  console.log(x);   //11  value of x inside if block
}
console.log(x); //10 value of x`
            },
            {
                heading:'let in javascript',
                paragraph:'let are declared same as var but it limits the variable scope to the given block. That is why we should declare let at the top of the block so that is accessible throughout the block and its sub-blocks.',
                code:`function getValue(condition) {
  if (condition) {
      let value = "blue";   // accessible inside the given scope only
      return value;
  } else {
      // value doesnot exits here
      return value;
  }

  // value doesnot exits here
}
console.log(getValue(true));   // blue
console.log(getValue(false));  // ReferenceError: value is not defined

let x = 10;
if(x == 10){
  let x = 11;
  console.log(x);   //11  value of x inside if block
}
console.log(x); //10 value of x`
            },
]
    },

]