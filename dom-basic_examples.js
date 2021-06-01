// Examine the document object//
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="new title";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Get element by Id//
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// console.log(headerTitle);
// headerTitle.innerText = 'New Hello';
// console.log(headerTitle);
// headerTitle.innerHTML = '<h2>Helloooo</h2>';
// console.log(headerTitle);
// header.style.borderBottom = 'solid 3px #000';

// Get elements by classname //
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives error:
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// Get elements by tag name:
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // Gives error:
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// Query Selector:
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

// Query Selector All:
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "HellloooFF";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Traversing the DOM:
var itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello ONE';
// LastChild
// console.log(itemList.lastChild);
// // LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello ONE';

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';

