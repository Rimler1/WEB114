//Tharrin Cooper 7/25/2026

//After user clicks a button ask the user to enter a username from a list if invalid ask again
//Then display the users username and the any info they entered about themselfs
//Add a randomize button to display a random user

"use strict";

//Selecting Buttons
const userNames = document.querySelector(`.user-btn`);

//Creating User Objects
const users = {
    Ozi: {
        name:`Ozi`,

        message:`Enjoys long walks`
    },
    Inza: {
        name:`Inza`,

        message:`Enjoys reading`
    },
    xXTopDogXx: {
        name:`xXTopDogXx`,

        message:`Enjoys video games`
    },
    JohnDoe: {
        name:`JohnDoe`,

        message:`Enjoys movies`
    }
}

//Display user
function displayUser(userNames){
    //Create Local User
    const user = users[userNames];
    //Change Style
    username.textContent = user.name;
    info.textContent = user.message;
}

//Handle Prompt Button
function handlePromptClick(){
    //Create Local User
    let user;
    //Get User Input
    user = prompt(`Enter username from list`,`enter user`)
    //Find Valid User
    for(let key in users){
        if(user === users[key].name){
            displayUser(user);
        }
    }
    //User Canceled
    if(user === null){
        alert(`Canceling...`);
        return;
    }
    //No Valid User Found
    alert(`Invalid User: try again`);
    handlePromptClick();
}
//Handle Random Button
function handleRandomClick(){

}
//Listen for clicks
promptBtn.addEventListener("click", handlePromptClick)
randomBtn.addEventListener("click", handleRandomClick)