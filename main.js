const nameInput = document.getElementById("name-input");
const allNames = document.getElementById("name");
const selectButton = document.getElementById("select-name")


function enterNames() {
    //clear names div before adding new names
    allNames.innerHTML = "";

    //split all the names by commas
    let names = nameInput.value.split(",");

    //display all names below the button by creating new "name" divs
    for (name of names) {
        const newName = document.createElement("div");
        newName.classList.add("name");
        newName.innerText = name;
        allNames.appendChild(newName);
        nameInput.value = "";
    }


}


nameInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        selectButton.click();
    }
});