// // createElements
// // Create a div
// var newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello-one";
// // add attribute
// newDiv.setAttribute("title", "Hello Div");

// // create text node
// var newDivText = document.createTextNode("Hello World");

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1")

// newDiv.style.fontSize = '30px';

// console.log(newDiv);
// container.insertBefore(newDiv, h1);

// EVENTS
/*
var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  //   console.log("buttons clicked!!!");
  //   document.getElementById("header-title").textContent = "NEW TEXT";
  //   document.querySelector("#main").style.backgroundColor = "red";
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   console.log(e.target.className);
  //   console.log(e.target.classList);

  //   var output = document.getElementById("output");
  //   output.innerHTML = "<h3>" + e.target.id + "</h3>";

  //   console.log(e.type);
  //   position x from browser window
  //   console.log(e.clientX);

  //   console.log(e.clientY);

  // from actual element
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);

//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
}
*/

var button = document.getElementById("button");
var box = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("Event Type: " + e.type);
  console.log(e.target.value);
  //   document.body.style.display = "none";
  //   console.log(e.target.value);
  //   document.getElementById("output").innerHTML =
  //     "<h3>" + e.target.value + "</h3>";
  //   output.innerHTML =
  //     "<h3> MouseX: " +
  //     e.offsetX +
  //     "</h3>" +
  //     "<h3> MouseY: " +
  //     e.offsetY +
  //     "</h3>";
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + "," + 100 + " )";
}
