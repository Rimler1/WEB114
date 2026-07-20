//Tharrin Cooper 7/25/2026

//After user clicks a button ask the user to enter a username from a list if invalid ask again
//Then display the users username and the any info they entered about themselfs
//Add a randomize button to display a random user

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

//Handle button clicks
function handlePromptClick(){
    let user;
    user = prompt(`Enter username from list`,`enter user`)
    for(let key in users){
        if(user === users[key]){
            displayUser(user);
        }
    }
    alert(`Invalid User: try again`)
    handlePromptClick();
}
function handleRandomClick(){

}
//Listen for clicks
promptBtn.addEventListener("click", handlePromptClick)
randomBtn.addEventListener("click", handleRandomClick)