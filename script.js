const enter = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul")
const reset = document.getElementById("reset")

function inputLength() {
	return input.value.length;
}

function createElement() {
	let li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(createDelBtn())
}

// function createDelBtn() {
// 	var delBtn = document.createElement("button")
// 	delBtn.className = "delBtn"
// 	delBtn.innerHTML = "x"
// 	return delBtn
// }

function cleanField() {
	if (ul.childElementCount > 0) {
		while (ul.hasChildNodes()) {
			ul.removeChild(ul.firstChild);
		}
	}
}

function crossItem(item) {
	if ((item.target).className != "delBtn") {
	console.log(item.target);
	(item.target).classList.toggle("done");
	}
}

function addOnClick() {
		if (inputLength() > 0) {
			createElement();
		}
}

function addOnKeyPress(event) {
		if (inputLength() > 0 && event.key === "Enter") {
			createElement();
		}
}


enter.addEventListener("click", addOnClick);

input.addEventListener("keypress", addOnKeyPress);

reset.addEventListener("click", cleanField)

ul.addEventListener("click", crossItem)

ul.addEventListener("click", deleteItem)
