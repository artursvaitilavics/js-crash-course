var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

const items = {
  items: ["Item 01", "Second item", "From const object"],
};

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById("item").value;

  //   create new li element
  var li = document.createElement("li");
  // add class name
  li.className = "list-group-item";
  //   console.log(li);
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   Create delete button element
  var deleteBtn = document.createElement("button");
  //   Add class to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  //   append delete button to list element
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // Convert text to lowercase

  var text = e.target.value.toLowerCase();

  // Get list
  var items = itemList.getElementsByTagName("li");
  // convert collection to array

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
