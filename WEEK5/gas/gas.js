//Tharrin Cooper 7/10/2026

"use strict";

//Declaring variables
let username;
let enteryCount = 0;
let gasTotal;
let average;
let enteryMessage;

//Calculation gas average with function
function calcGasAvg(){
    //Declaring Local Variable
    let weeklyGas;
    //Get weeklyGas
    weeklyGas = prompt(`Enter your first week's gas total. Enter -1 when done.`);
    //Is null?
    if(weeklyGas === null){
        return null;
    }
    //Convert weeklyGas to number
    weeklyGas.toFixed(2);
    //Get data with loop
    while(weeklyGas !== -1){
        //Is number?
        if(isFinite(weeklyGas) === false){
            alert(`Please enter a valid number.`);
            weeklyGas = prompt(`Enter your week's gas total. Enter -1 when done.`);
            //Is null?
            if(weeklyGas === null){
                return null;
            }
        }
        //Add data to global variables
        else{
            totalGas += weeklyGas;
            entryCount += 1;
            //Get weeklyGas
            weeklyGas = prompt(`Enter your next week's gas total. Enter -1 when done.`);
            //Is null?
            if(weeklyGas === null){
                return null;
            }
        }
    }
    //Return average
    if(entryCount > 0){
        average = totalGas/entryCount;
    }
    else{
        average = 0;
    }
    return average;
}

//Get username
username = prompt(`Enter your name`);
//Validate username
if(username === null){
    alert(`You cancelled the name prompt.`);
    return;
}
else if(username.trim() === ``){
    alert(`You must type a name.`);
    return;
}
//Get average by calling function
calcGasAvg();
//Is null?
if(average === null){
    alert(`You cancelled entering gas totals.`);
    return;
}
//Were any gas totals entered?
if(entryCount === 0){
    alert(`No gas totals were entered.`);
}
//Get entryMessage and show it
else{
    if(entryCount === 1){
        entryMessage = `${username} entered ${gasTotal.toFixed(2)} gas totals.`;
        alert(entryMessage);
    }
    else{
        entryMessage = `${username} average weekly gas bill is $${average.toFixed(2)}.`;
        alert(entryMessage);
    }
}
//Show entryCount
if(entryCount == 0){
    alert(`No gas totals were entered.`);
}
else{
     alert(`you entered ${gasTotal.toFixed(2)} gas totals.`);
}
