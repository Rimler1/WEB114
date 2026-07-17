//Tharrin Cooper 7/17/2026

"use strict";

//Selecting buttons
const moodName = document.querySelector('.mood-btn');

//Creating Mood Objects
const moods = {
    happy:  {

        name:"Happy",

        bg: '#FFD700',

        text: '#bd26b0',

        message: 'Warm smiles and the suns kisses!'

    },
    calm:  {

        name:"Calm",

        bg: '#adedb0',

        text: '#5e64c1',

        message: 'Calm...'

    },
        angry:  {

        name:"Angry",

        bg: '#ff4c4c',

        text: '#ffffff',

        message: 'ANGRY!'

    },
    sleepy:  {

        name:"Sleepy",

        bg: '#007bff',

        text: '#000000',

        message: 'Tired...'

    }
}
//Change html style based on mood
function changeMood(moodName){
    //Declare Local Mood
    const mood = moods[moodName];
    //Change Style
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    quote.textContent = mood.message;
    moodTitle.textContent = mood.name;
    //Logging Console
    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}
//Handle happy mood
function handleHappyClick() {
  changeMood("happy");
}
//Handle calm mood
function handleCalmClick() {
  changeMood("calm");
}
//Handle angry mood
function handleAngryClick() {
  changeMood("angry");
}
//Handle sleepy mood
function handleSleepyClick() {
  changeMood("sleepy");
}
//Listen for clicks of buttons
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);