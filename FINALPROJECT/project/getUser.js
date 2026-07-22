//Tharrin Cooper 7/25/2026

//After user clicks a button ask the user to enter a username from a list if invalid ask again
//Then display the users username and the any info they entered about themselfs
//Add a customize button to change a selected users info

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

//Handle Display Button
function handleDisplayClick(){
    //Create Local User
    let user;
    //Get User Input
    user = prompt(`Enter username from list`,`enter username`)
    //Find Valid User
    for(let key in users){
        if(user === users[key].name){
            //Display user
            displayUser(user);
            return;
        }
    }
    //User Canceled
    if(user === null){
        alert(`Canceling...`);
        return;
    }
    //No Valid User Found
    alert(`Invalid User: try again`);
    handleDisplayClick();
}
//Handle Random Button
function handleCustomizeClick(){
    //Create Local User
    let user;
    let newMessage;
    //Get User Input
    user = prompt(`Enter username from list`,`enter username`)
    //Find Valid User
    for(let key in users){
        if(user === users[key].name){
            //Get User Input
            newMessage = prompt(`Enter new message for ${user}`,`enter message`)
            //User Canceled
            if(newMessage === null){
            alert(`Canceling...`);
            return;
            }
            //Change selected user message
            users[key].message = newMessage;
            //Display user
            displayUser(user);
            return;
        }
    }
    //User Canceled
    if(user === null){
        alert(`Canceling...`);
        return;
    }
    //No Valid User Found
    alert(`Invalid User: try again`);
    handleCustomizeClick();
}
//Listen for clicks
displayBtn.addEventListener("click", handleDisplayClick)
customizeBtn.addEventListener("click", handleCustomizeClick)