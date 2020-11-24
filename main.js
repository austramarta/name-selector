const nameInputField = document.getElementById("name-input");
const nameDiv = document.getElementById("name-wrapper");
const selectButton = document.getElementById("select-name");


function enterNames() {
    //clear names div before adding new names
    nameDiv.innerHTML = "";

    //split all the names by commas
    let names = nameInputField.value.split(",");



    //display all names below the button by creating new "name" divs
    for (name of names) {
        const newNameDiv = document.createElement("div");
        newNameDiv.classList.add("name");
        newNameDiv.innerText = name;
        nameDiv.appendChild(newNameDiv);
        nameInputField.value = "";
    }


    //choose one random winner and add different styling to it
    let randomIndex = Math.floor(Math.random() * names.length);
    document.querySelector(`.name div:nth-child(${randomIndex + 1})`)
        .classList.add("selected")
        ;
}


nameInputField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        selectButton.click();
    }
});


