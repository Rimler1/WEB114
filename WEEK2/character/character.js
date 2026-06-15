//Tharrin Cooper 6/15/2026

alert('Hello I am Tharrin Cooper and welcome to my fantasy character webpage');

//Gathering Character Information From User
const charName = prompt(`What is your character's name?`, `temp`);
const charPet = prompt(`What kind of pet does ${charName} have?`, `temp`);
const charPower = prompt(`What kind of superpower does ${charName} have?`, `temp`);
const charFighter = confirm(`Does ${charName} like fighting? (Ok for Yes Cancel for No)`);

//Displaying Character Information
alert(`Gathering magic for ${charName}... almost ready!`)
alert(`====================================\nYour Adventure Hero\n====================================\n\n
Name: ${charName}\nPet: ${charPet}\nSuperPower: ${charPower}\nMonster fighter? ${charFighter}`);

//Displaying Short Story About Character
alert(`In a faraway land, ${charName} rides a mighty ${charPet},\nwielding the incredible power of ${charPower}!
\n====================================`);