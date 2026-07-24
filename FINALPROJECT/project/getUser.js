//Tharrin Cooper 7/24/2026

//After user clicks the display button ask the user to enter a username from a list if invalid ask again
//Then display the users username and the any message associated with that user
//When user clicks the customize button ask the user to enter a username than allow them to change the message assicuated with the user
//Ask for a password befor allowing you to change that users message then display that user with their new message

"use strict";

//Selecting Buttons
const userNames = document.querySelector(`.user-btn`);

//Creating User Objects
const users = {
    Ozi: {
        name:`Ozi`,
        password:`Password1`,
        msg:`Enjoys long walks`
    },
    Inza: {
        name:`Inza`,
        password:`Password2`,
        msg:`Enjoys reading`
    },
    xXTopDogXx: {
        name:`xXTopDogXx`,
        password:`Password3`,
        msg:`Enjoys video games`
    },
    JohnDoe: {
        name:`JohnDoe`,
        password:`Password4`,
        msg:`Enjoys movies`
    }
}

//Display user
function displayUser(userNames){
    //Create Local User
    const user = users[userNames];
    //Change Style
    username.textContent = user.name;
    message.textContent = user.msg;
}

//Handle Display Button
function handleDisplayClick(){
    //Create Local User
    let user;
    //Get User Input
    user = prompt(`Enter username from list`,`enter username`);
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
//Handle Customize Button
function handleCustomizeClick(){
    //Create Local Variables
    let user;
    let lock;
    let newMsg;
    //Get User Input
    user = prompt(`Enter username from list`,`enter username`);
    //Find Valid User
    for(let key in users){
        if(user === users[key].name){
            //Get User Input
            lock = prompt(`Enter password for ${user}`,`enter password`);
            //User Canceled
            if(lock === null){
                alert(`Canceling...`);
                return;
            }
            //Correct Password?
            while(lock !== users[key].password){
                alert(`Incorrect Password: try again`);
                lock = prompt(`Enter password for ${user}`,`enter password`);
                //User Canceled
                if(lock === null){
                    alert(`Canceling...`);
                    return;
                }
            }
            //Get User Input
            newMsg = prompt(`Enter new message for ${user}`,`enter message`);
            //User Canceled
            if(newMsg === null){
                alert(`Canceling...`);
                return;
            }
            //Message Blank?
            while(newMsg.trim() === ``){
                alert(`msg Blank: try again`);
                newMsg = prompt(`Enter new message for ${user}`,`enter message`);
                //User Canceled
                if(newMsg === null){
                    alert(`Canceling...`);
                    return;
                }
            }
            //Change selected User Message
            users[key].msg = newMsg;
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
displayBtn.addEventListener("click", handleDisplayClick);
customizeBtn.addEventListener("click", handleCustomizeClick);