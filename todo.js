let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let compList = document.querySelector('#comp-list');

inputBx.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputText) => {
    let listItem = document.createElement("li");

    let checkBx = document.createElement("input");
    checkBx.setAttribute("type", "checkbox");
    checkBx.className = "checkbox";

    // Add event listener to move items between lists
    checkBx.addEventListener("change", function() {
        if (this.checked) {
            moveToCompleted(listItem);
        } else {
            moveToPending(listItem);
        }
    });

    listItem.appendChild(checkBx);
    listItem.appendChild(document.createTextNode(inputText));
    list.appendChild(listItem);
}

let moveToCompleted = (item) => {
    // Remove from the pending list
    list.removeChild(item);

    // Add to the completed list
    compList.appendChild(item);
    item.classList.add("completed");
}

let moveToPending = (item) => {
    // Remove from the completed list
    compList.removeChild(item);

    // Add back to the pending list
    list.appendChild(item);
    item.classList.remove("completed");
}
