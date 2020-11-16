const nameInput = document.getElementById("name-input");
const allNames = document.getElementById("name");
const selectButton = document.getElementById("select-name")


function enterNames() {
    //split all the names by commas
    let names = nameInput.value.split(",");
    allNames.innerHTML = "";


    for (name of names) {
        const newName = document.createElement("div");
        newName.classList.add("name");
        newName.innerText = name;
        allNames.appendChild(newName);
    }


}


nameInput.addEventListener("keyup", function (event) {


    if (event.keyCode === 13) {
        event.preventDefault();
        selectButton.click();
    }
});