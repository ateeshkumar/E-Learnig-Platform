import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import CodeSnippit from "../../components/CodeSnippit";
import './css/javascriptinterviewquestion.css';
import js from '../../assets/JavaScript.jpg'
import Ads from "../../components/GoogleAds/Ads";

const JavaScriptInterviewQuestion = () => {
  return (
    <div>
      <Layout title="Java Script Interview Question Basic to Advance">
        <div className="jsi-container">
          <div className="jsi-left">
            <Link to=""></Link>
          </div>
          <div className="jsi-right">
            <h1>Java Script Interview Prepration Basic to Advance</h1>
            <br />
            <img src={js} alt="JavaScript" className="jsi-img" />
            <div className="jsi-card">
              <h3>Q1: Introduction Of JavaScript</h3>
              <p>
                JavaScript is a versatile and powerful programming language
                primarily used for web development. Created by Brendan Eich in
                1995, it quickly became an essential tool for building dynamic
                and interactive websites. Initially developed to add
                interactivity to static web pages, JavaScript has evolved into a
                multi-paradigm language capable of both front-end and back-end
                development.
              </p>
              <br />
              <p>
                * As a client-side scripting language, JavaScript runs in web
                browsers, enabling developers to manipulate web page content,
                handle events, create animations, validate forms, and
                communicate asynchronously with servers, among many other
                functionalities. It's renowned for its flexibility, allowing
                developers to create diverse applications and work seamlessly
                with HTML and CSS, forming the core technologies of the web.
              </p>
              <p>
                JavaScript continues to evolve, with regular updates to the
                language and the introduction of new features, libraries, and
                frameworks like React, Angular, and Vue.js, which streamline and
                enhance the development process, making it an exciting and
                continually evolving language in the world of programming.
              </p>
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q2: Variable, Data type and Time</h3>
              <h4>Data Type</h4>
              <p>
                <b>Primitive Data Types:</b>
              </p>
              <ul className="jsi-card-list">
                <li>
                  <b>Number:</b> Represents both integers and floating-point
                  numbers.
                </li>
                <li>
                  <b>String:</b> Represents sequences of characters, enclosed in
                  single or double quotes.
                </li>
                <li>
                  <b>Boolean:</b> Represents true or false values.
                </li>
                <li>
                  <b>Undefined:</b> Represents a variable that has been declared
                  but hasn't been assigned a value.
                </li>
                <li>
                  <b>Null:</b> Represents an intentional absence of any object
                  value.
                </li>
                <li>
                  <b>Symbol (added in ES6):</b> Represents unique identifiers.
                </li>
              </ul>
              <p>
                <b>Non-primitive Data Types:</b>
              </p>
              <ul className="jsi-card-list">
                <li>
                  <b>Object:</b> Represents a collection of key-value pairs and
                  is used for more complex data structures.
                </li>
                <li>
                  <b>Array:</b> A special type of object used to store multiple
                  values in a single variable.
                </li>
              </ul>
              <h3>Variable Declaration:</h3>
              <p>
                In JavaScript, variables can be declared using the var, let, or
                const keywords.
              </p>
              <ul className="jsi-card-list">
                <li>
                  <b>var:</b> Older way to declare variables, has function
                  scope.
                </li>
                <li>
                  <b>let:</b> Introduced in ES6, has block scope and allows
                  reassigning values.
                </li>
                <li>
                  <b> const:</b> Also introduced in ES6, has block scope but
                  cannot be reassigned once declared (though the contents of a
                  const object or array can still be modified).
                </li>
              </ul>
              <h3>Handling Date and Time:</h3>
              <p>
                JavaScript has a built-in Date object for working with dates and
                times. Here's a simple example of creating and manipulating
                dates: javascript
              </p>
              <CodeSnippit
                type="Javascript"
                code={`// Creating a new Date object
const now = new Date();

// Getting current date and time
console.log(now); // Output: Current date and time

// Getting specific components of the date
const year = now.getFullYear();
const month = now.getMonth(); // Months are zero-based (0-11)
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
`}
              />
              <Ads/>
              <p>
                The Date object provides methods to get and set various
                components of the date and time, including year, month, day,
                hours, minutes, seconds, and milliseconds. Additionally,
                libraries like Moment.js or built-in methods like those provided
                by the Intl.DateTimeFormat object can help with more advanced
                date and time manipulations and formatting in JavaScript.
              </p>
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q3: Array and Object in Java Script</h3>
              <h3>Arrays:</h3>
              <p>
                Arrays are ordered collections of values indexed by integers,
                starting from zero. They can contain elements of different data
                types and have dynamic sizes (elements can be added or removed
                at any time).
              </p>
              <p>Creating an Array:</p>
              <CodeSnippit
                type="javascript"
                code={`// Creating an empty array
const emptyArray = [];

// Array with elements of different data types
const mixedArray = [1, 'two', true, { key: 'value' }];

// Accessing elements in an array
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray.length); // Output: 4 (number of elements in the array)
`}
              />
              <p>
                Arrays in JavaScript have various built-in methods{" "}
                <b>(push, pop, shift, unshift, slice, etc.)</b> to manipulate
                their contents or perform operations like iteration, mapping,
                filtering, and reducing.
              </p>
              <h3>Objects:</h3>
              <p>
                {" "}
                Objects are collections of key-value pairs, where keys are
                strings (or symbols in some cases) and values can be of any data
                type. They are unordered and are used to store data as
                properties.
              </p>
              <p> Creating an Object:</p>
              <CodeSnippit
                type="javascript"
                code={`// Creating an empty object
const emptyObject = {};

// Object with properties
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.address.city); // Output: Anytown
`}
              />
              <Ads/>
              <p>
                Objects allow for the storage of complex data structures and are
                commonly used to represent entities, models, or configurations
                in JavaScript. They are versatile and can be dynamically
                modified by adding, updating, or deleting properties.
              </p>
              <h3>Differences:</h3>
              <p>
                * Arrays use numeric indices to access elements in an ordered
                sequence, while objects use keys (strings or symbols) to access
                values in an unordered collection of properties.
              </p>
              <p>
                * Arrays maintain the order of elements, whereas objects do not
                guarantee any specific order for their properties.
              </p>
              <p>
                * Arrays provide methods for manipulation and iteration specific
                to their ordered structure, while objects offer methods to work
                with their properties.
              </p>
              <p>
                Both arrays and objects are crucial for organizing and managing
                data in JavaScript, and understanding their differences helps in
                choosing the appropriate structure for different programming
                needs.{" "}
              </p>
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q4: Function, Scope and Execution Context</h3>
              <h3>Function Scope:</h3>
              <p>
                In JavaScript, variables defined within a function have local
                scope, meaning they are only accessible within that function.
                This concept is called function scope. Variables declared inside
                a function using <b>'var', 'let', or 'const'</b> are not visible
                outside that function.
              </p>
              <p>Example of Function Scope:</p>
              <CodeSnippit
                type="javascript"
                code={`function myFunction() {
  var localVar = 'I am a local variable';
  console.log(localVar); // Output: I am a local variable
}

myFunction();
console.log(localVar); // Throws an error: localVar is not defined
`}
              />
              <h3>Execution Context:</h3>
              <p>
                Execution context refers to the environment in which JavaScript
                code is executed. There are three types of execution contexts in
                JavaScript:
              </p>
              <p>
                1. <b>Global Execution Context:</b> The default context where
                code that's not inside any function resides. Variables declared
                here are global and can be accessed from anywhere in the code.
              </p>
              <p>
                2. <b>Function Execution Context:</b> Created whenever a
                function is invoked. It includes the function's local variables,
                parameters, and the reference to its outer environment (lexical
                environment).
              </p>
              <p>
                3. <b>Eval Execution Context (Not Commonly Used):</b> Created
                when code is executed using eval. It has its own variable
                environment.
              </p>
              <p>
                When a function is called, a new execution context is created,
                and it's pushed onto the call stack. Once the function completes
                execution, its execution context is popped off the stack.
              </p>
              <h3>Scope Chain:</h3>
              <p>
                JavaScript has a mechanism called the "scope chain" that
                determines variable access. Each function has access to its own
                variables, as well as variables in its parent functions' scope,
                forming a chain of nested scopes. This is known as lexical
                scoping or static scoping.
              </p>
              <p>Example of Scope Chain:</p>
              <CodeSnippit
                type="javascript"
                code={`var globalVar = 'I am global'; // Global variable

function outerFunction() {
  var outerVar = 'I am outer';
  
  function innerFunction() {
    var innerVar = 'I am inner';
    console.log(innerVar); // Output: I am inner
    console.log(outerVar); // Output: I am outer
    console.log(globalVar); // Output: I am global
  }

  innerFunction();
}

outerFunction();
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q5: Logic and Control Flow in Java Script</h3>
              <h3>Control Flow Statements:</h3>
              <p>
                1. Conditional Statements <b>('if', 'else' 'if', 'else')</b>:
              </p>
              <CodeSnippit
                type="javascript"
                code={`let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is negative");
}
`}
              />
              <br />
              <p>
                <b>2. Switch Statement:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  // More cases...
  default:
    dayName = 'Unknown';
}
console.log(dayName); // Output depends on the value of 'day'
`}
              />
              <br />
              <p>
                <b>3. Loops (for, while, do-while):</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
`}
              />
              <CodeSnippit
                type="javascript"
                code={`let count = 0;

while (count < 5) {
  console.log(count); // Output: 0, 1, 2, 3, 4
  count++;
}
`}
              />
              <CodeSnippit
                type="javascript"
                code={`let x = 0;

do {
  console.log(x); // Output: 0 (executed at least once)
  x++;
} while (x < 0);
`}
              />
              <br />
              <p>
                <b>4. Break and Continue:</b>
              </p>
              <br />
              <p>
                <b>break:</b> Exits the loop it's contained in.
              </p>
              <p>
                <b>continue:</b> Skips the current iteration of the loop and
                continues with the next iteration.
              </p>
              <h3>Logical Operators:</h3>
              <p>
                JavaScript also uses logical operators{" "}
                <b>(&& for AND, || for OR, ! for NOT)</b> to combine conditions
                in if statements or while loops, allowing for more complex
                decision-making.
              </p>
              <p> Example of Logical Operators:</p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q6: Loop Iteration and Array Method.</h3>
              <br />
              <h3>Loop Iteration:</h3>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Output: 1, 2, 3, 4, 5
}
`}
              />
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element); // Output: 1, 2, 3, 4, 5
}

`}
              />
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element); // Output: 1, 2, 3, 4, 5
});
`}
              />
              <br />
              <h3>Array Methods:</h3>
              <b>Map Method:</b>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

const mappedArray = array.map((element) => element * 2);
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]
`}
              />
              <b>Filter Method:</b>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

const filteredArray = array.filter((element) => element % 2 === 0);
console.log(filteredArray); // Output: [2, 4]
`}
              />
              <b>Reduce Method:</b>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (sum of all elements)
`}
              />
              <b>Some Method:</b>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

const hasGreaterThanThree = array.some((element) => element > 3);
console.log(hasGreaterThanThree); // Output: true (at least one element is > 3)
`}
              />
              <b>Every Method:</b>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const array = [1, 2, 3, 4, 5];

const allGreaterThanZero = array.every((element) => element > 0);
console.log(allGreaterThanZero); // Output: true (all elements are > 0)
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q7: Document Object Model in javascript.</h3>
              <br />
              <h3>Structure of the DOM:</h3>
              <p>
                * <b>Document:</b> Represents the entire web page and serves as
                the entry point to the DOM hierarchy.
              </p>
              <p>
                * <b>Elements:</b> HTML tags like <b>'div'</b> , <b>'p'</b> ,
                <b>'h1'</b> , etc., are represented as element nodes.
              </p>
              <p>
                * <b>Attributes:</b> Attributes of HTML elements, such as id,
                class, etc., are accessible through the DOM.
              </p>
              <p>
                * <b>Text:</b> Text within HTML elements is represented as text
                nodes in the DOM.
              </p>
              <p>
                * <b>Comments:</b> HTML comments are also part of the DOM as
                comment nodes.
              </p>
              <h3>Accessing Elements in the DOM:</h3>
              <p>
                JavaScript allows manipulation of the DOM through methods
                provided by the document object. Common methods to access
                elements include:
              </p>
              <p>
                <b>getElementById:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const elementById = document.getElementById('elementId');
`}
              />
              <Ads/>
              <p>
                <b>getElementsByClassName:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const elementsByClass = document.getElementsByClassName('className');
`}
              />
              <p>
                <b>getElementsByTagName:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const elementsByTag = document.getElementsByTagName('tagname');
`}
              />
              <p>
                <b>querySelector:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const element = document.querySelector('selector');
`}
              />
              <p>
                <b>querySelectorAll:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const elements = document.querySelectorAll('selector');
`}
              />
              <br />
              <h3>Modifying the DOM:</h3>
              <p>
                <b>Changing Content:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const element = document.getElementById('myElement');
element.textContent = 'New text content';
element.innerHTML = '<p>New HTML content</p>';
`}
              />
              <p>
                <b>Manipulating Styles:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const element = document.getElementById('myElement');
element.style.color = 'red';
element.classList.add('className');
`}
              />
              <p>
                <b>Adding and Removing Elements:</b>
              </p>
              <br />
              <CodeSnippit
                type="javascript"
                code={`const parent = document.getElementById('parentElement');
const newElement = document.createElement('div');
parent.appendChild(newElement);

parent.removeChild(childElement);
`}
              />
              <Ads/>
              <br />
              <h3>Responding to Events:</h3>
              <CodeSnippit
                type="javascript"
                code={`const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  // Do something when the button is clicked
});
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q8: Events in Java Script.</h3>
              <p>
                <b>Mouse Events:</b>
              </p>
              <p>
                * <b>click:</b> Triggered when a mouse click occurs.
              </p>
              <p>
                * <b>mouseover/mouseout:</b> Fired when the mouse moves over/out
                of an element.
              </p>
              <p>
                * <b>mousedown/mouseup:</b> Occur when a mouse button is
                pressed/released over an element.
              </p>
              <br />
              <p>
                <b>Keyboard Events:</b>
              </p>
              <p>
                * <b>keydown/keyup:</b> Fired when a key is pressed/released.
              </p>
              <p>
                * <b>keypress:</b> Fired when a key is pressed and released.
              </p>
              <br />
              <p>
                <b>Form Events:</b>
              </p>
              <p>
                * <b>submit:</b> Fired when a form is submitted.
              </p>
              <p>
                * <b>change:</b> Triggered when the value of an input element
                changes.
              </p>
              <p>
                <b>Window Events:</b>
              </p>
              <p>
                * <b>load:</b> Fired when the entire page and its resources
                finish loading.
              </p>
              <p>
                * <b>resize:</b> Occurs when the browser window is resized.
              </p>
              <p>
                * <b>scroll:</b> Triggered when the document is scrolled.
              </p>
              <h3>Event Handling in JavaScript:</h3>
              <p>
                <b>Using Event Handlers (Inline):</b>
              </p>
              <CodeSnippit
                type="html"
                code={`<button onclick="myFunction()">Click me</button>

<script>
  function myFunction() {
    // Do something when the button is clicked
  }
</script>
`}
              />
              <Ads/>
              <br />
              <p>
                <b>Using addEventListener:</b>
              </p>
              <CodeSnippit
                type="javascript"
                code={`const element = document.getElementById('myElement');

element.addEventListener('click', function() {
  // Do something when the element is clicked
});
`}
              />
              <p>
                <b>Removing Event Listeners:</b>
              </p>
              <CodeSnippit
                type="javascript"
                code={`function myFunction() {
  // Do something
  element.removeEventListener('click', myFunction);
}
`}
              />
              <p>
                <b>Event Object:</b>
              </p>
              <p>
                Event handlers typically receive an event object, containing
                information about the event that occurred, such as the type of
                event, the target element, and additional properties specific to
                that event.
              </p>
              <CodeSnippit
                type="javascript"
                code={`element.addEventListener('click', function(event) {
  console.log(event.type); // Outputs the type of event
  console.log(event.target); // Outputs the element that triggered the event
});
`}
              />
              <h3>Event Propagation (Bubbling and Capturing):</h3>
              <p>
                Events in the DOM propagate through the hierarchy of elements:
                they can bubble up from the target element to its ancestors
                (bubbling phase) or go from the top-most element down to the
                target element (capturing phase). You can control this behavior
                using the addEventListener method's optional third parameter
                (true for capturing, false or omitted for bubbling).
              </p>
              <CodeSnippit
                type="javascript"
                code={`element.addEventListener('click', myFunction, true); // Capturing phase
element.addEventListener('click', myFunction); // Bubbling phase (default)
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q9: Asynchronous JavaScript.</h3>
              <br />
              <p>
                Asynchronous JavaScript is a fundamental concept that allows
                code execution to continue without waiting for long-running
                tasks to complete. This approach is crucial for handling
                operations such as fetching data from servers, performing
                animations, or executing code that might take some time without
                blocking the main thread of execution.
              </p>
              <h3>Asynchronous Patterns:</h3>
              <p>
                <b>Callbacks:</b>
              </p>
              <p>
                Callbacks were one of the earliest methods used for handling
                asynchronous operations in JavaScript. Functions are passed as
                arguments and executed once the asynchronous task completes.
              </p>
              <CodeSnippit
                type="javascript"
                code={`function fetchData(callback) {
  setTimeout(() => {
    const data = 'Some fetched data';
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processing data:', data);
}

fetchData(processData);
`}
              />
              <Ads/>
              <p>
                <b>Promises:</b>
              </p>
              <p>
                Promises provide a cleaner way to work with asynchronous code,
                offering better error handling and allowing chaining of multiple
                asynchronous operations.
              </p>
              <CodeSnippit
                type="javascript"
                code={`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some fetched data';
      if (data) {
        resolve(data);
      } else {
        reject('Error fetching data');
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
`}
              />
              <br />
              <p>
                <b>Async/Await:</b>
              </p>
              <p>
                Introduced in modern JavaScript (ES6+), async and await keywords
                provide a more synchronous way to write asynchronous code,
                making it easier to read and maintain.
              </p>
              <CodeSnippit
                type="javascript"
                code={`async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Some fetched data';
      resolve(data);
    }, 1000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();
`}
              />
              <br />
              <h3>Asynchronous Operations:</h3>
              <ul className="jsi-card-list">
                <li>
                  <b>Fetching Data:</b> Retrieving data from APIs or databases.
                </li>
                <li>
                  <b>Timers:</b> Delaying execution using setTimeout or
                  intervals with setInterval.
                </li>
                <li>
                  <b>File Operations:</b> Reading or writing files.
                </li>
                <li>
                  <b>User Input:</b> Handling events that occur after user
                  interactions.
                </li>
                <li>
                  <b>Network Operations:</b> Making HTTP requests.
                </li>
              </ul>
              <Ads/>
              <br />
              <h3>Benefits of Asynchronous JavaScript:</h3>
              <ul className="jsi-card-list">
                <li>
                  <b>Improved Performance:</b> Non-blocking operations prevent
                  the main thread from getting stuck, allowing the user
                  interface to remain responsive.
                </li>
                <li>
                  <b>Better User Experience:</b> Allows for smoother
                  interactions by preventing delays caused by long-running tasks
                </li>
                <li>
                  <b>Efficient Resource Usage:</b> Utilizes resources
                  effectively by executing tasks concurrently.
                </li>
              </ul>
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q10: Promises in Java Script.</h3>
              <p>
                Promises in JavaScript are a powerful way to handle asynchronous
                operations. They represent a value that may not be available yet
                but will be resolved in the future, either successfully or
                unsuccessfully. Promises provide a cleaner and more organized
                way to write asynchronous code compared to using callbacks.
              </p>
              <h3>Creating a Promise:</h3>
              <CodeSnippit
                type="javascript"
                code={`const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation or task
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Promise resolved successfully');
    } else {
      reject('Promise rejected');
    }
  }, 2000);
});
`}
              />
              <p>
                * The Promise constructor takes a function with two arguments,
                resolve and reject, which are functions to handle the promise's
                state.
              </p>
              <p>
                * Within the function, asynchronous tasks are performed, and
                once completed, the resolve function is called if the operation
                is successful, and the reject function is called if there's an
                error.
              </p>
              <h3>Consuming a Promise:</h3>
              <p>
                <b>Using .then() and .catch():</b>
              </p>
              <CodeSnippit
                type="javascript"
                code={`myPromise
  .then((result) => {
    console.log(result); // Output: Promise resolved successfully
  })
  .catch((error) => {
    console.error(error); // Output if rejected: Promise rejected
  });
`}
              />
              <p>
                * The .then() method is used to handle the resolved value of the
                promise.
              </p>
              <p>
                * The . catch() method is used to handle any errors that occur
                during the promise execution.
              </p>
              <h3>Chaining Promises:</h3>
              <CodeSnippit
                type="javascript"
                code={`function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('First step completed');
    }, 1000);
  });
}

asyncTask()
  .then((result) => {
    console.log(result); // Output: First step completed
    return 'Second step completed';
  })
  .then((result) => {
    console.log(result); // Output: Second step completed
    throw new Error('Error in the third step');
  })
  .catch((error) => {
    console.error(error); // Output: Error in the third step
  });
`}
              />
              <p>
                * Promises can be chained by returning another promise within
                the then() block, allowing for sequential execution of
                asynchronous tasks.
              </p>
              <p>
                * The next then() in the chain will receive the resolved value
                from the previous then().
              </p>
              <h3>Promise.all() and Promise.race():</h3>
              <p>
                <b>Promise.all():</b> Resolves when all the promises in an array
                are resolved or rejects immediately if any of the promises in
                the array rejects.
              </p>
              <p>
                <b>Promise.race():</b> Resolves or rejects as soon as one of the
                promises in an array resolves or rejects.
              </p>
              <CodeSnippit
                type="javascript"
                code={`const promise1 = fetchData();
const promise2 = fetchAnotherData();

Promise.all([promise1, promise2])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error);
  });
`}
              />
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>Q11: Fetch api and async await.</h3>
              <p>
                The Fetch API in JavaScript is used to make network requests,
                typically to retrieve resources (like JSON data, images,
                documents) from a server or API endpoint. It's a modern
                alternative to older methods like XMLHttpRequest (XHR) and
                provides a more powerful and flexible feature set for making
                HTTP requests.
              </p>
              <h3>Basic Fetch Syntax:</h3>
              <CodeSnippit
                type="javascript"
                code={`fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Fetch error:', error);
  });
`}
              />
              <p>
                <b>fetch()</b> returns a Promise that resolves to the Response
                object representing the response to the request.
              </p>
              <p>
                <b>.then() </b>is used to handle the response by chaining
                promises. It processes the response and extracts data.
                operation.
              </p>
              <p>
                <b>.catch()</b> is used to catch any errors that occur during
                the fetch
              </p>
              <h3>Using Async/Await with Fetch:</h3>
              <p>
                Async/await is a modern approach to handle asynchronous code,
                making it appear synchronous and easier to read and maintain.
              </p>
              <CodeSnippit
                type="javascript"
                code={`async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Using the fetchData function
async function getData() {
  try {
    const data = await fetchData('https://api.example.com/data');
    console.log(data);
  } catch (error) {
    // Handle errors
  }
}

getData();
`}
              />
              <p>
                <b>async</b> functions return a Promise implicitly and allow the
                use of await inside them to pause execution until a Promise is
                settled.
              </p>
              <p>
                <b>await</b> is used to wait for the completion of asynchronous
                operations (like fetch()), making the code appear synchronous
                while actually being non-blocking.
              </p>
              <br />
            </div>
            <Ads/>
            <div className="jsi-card">
              <h3>
                Q12: Ajax (Asynchronous JavaScript and XML) and XHR
                (XMLHttpRequest).
              </h3>
              <p>
                AJAX (Asynchronous JavaScript and XML) and XHR (XMLHttpRequest)
                are technologies used for making asynchronous requests to a
                server from a web page without needing to reload the entire
                page. They are fundamental for building dynamic and interactive
                web applications.
              </p>
              <h3>XMLHttpRequest (XHR):</h3>
              <p>
                XMLHttpRequest is the core technology behind AJAX. It's an API
                in web browsers that allows JavaScript to make HTTP requests to
                a server and handle server responses.
              </p>
              <p>
                <b>Basic XHR Example:</b>
              </p>
              <CodeSnippit
                type="javascript"
                code={`const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText); // Response from the server
    } else {
      console.error('Request failed:', xhr.status);
    }
  }
};

xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();
`}
              />
              <p>
                <b>xhr.onreadystatechange:</b> Event handler that is called
                whenever the readyState property changes.
              </p>
              <p>
                <b>xhr.readyState === XMLHttpRequest.DONE:</b> Indicates that
                the request is completed.
              </p>
              <p>
                <b>xhr.status:</b> HTTP status code returned by the server
                (e.g., 200 for success, 404 for not found).
              </p>
              <br />
              <h3>AJAX:</h3>
              <p>
                AJAX is a technique that uses XHR (or modern alternatives like
                the Fetch API) to send and receive data asynchronously from a
                server without reloading the entire web page.
              </p>
              <p>
                <b>AJAX with XHR Example:</b>
              </p>
              <CodeSnippit
                type="javascript"
                code={`function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText); // Assuming response is JSON
        console.log(data);
      } else {
        console.error('Request failed:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'https://api.example.com/data', true);
  xhr.send();
}

fetchData();
`}
              />
              <br />
              <h3>Differences:</h3>
              <p>
                <b>XHR:</b> Older technology that allows making asynchronous
                HTTP requests and handling responses.
              </p>
              <p>
                <b>AJAX:</b> More of a concept or technique that uses XHR (or
                newer APIs like Fetch) to create asynchronous web applications.
              </p>
              <br />
              <h3>Fetch API (Modern Alternative):</h3>
              <p>
                The Fetch API is a modern replacement for XHR, providing a more
                flexible and powerful interface for making network requests.
              </p>
              <CodeSnippit
                type="javascript"
                code={`fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
`}
              />
              <p>
                The Fetch API uses Promises and provides a cleaner syntax for
                making HTTP requests and handling responses compared to XHR.
              </p>
              <br />
            </div>
            <Ads/>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default JavaScriptInterviewQuestion;
