var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = ul.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", toggleDone);
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.addEventListener("click", removeItem);
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function removeItem(event) {
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(item){
	item.addEventListener("click", toggleDone);
	item.querySelector("button").addEventListener("click", removeItem);
});

