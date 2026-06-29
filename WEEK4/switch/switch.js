//Tharrin Cooper 06/29/2026

"use strict";

//Use switch with variable (month) with cases for spring, summer, fall, winter, and default for any other input

//Creating Variables
let favMonth;

//Get Data From User
favMonth = prompt(`Enter your favorite month example: January`, `enter month`);

//Using Switch To Display Output Based On Entered Month
switch(favMonth.toLowerCase()){
    //Spring
    case `march`:
    case `april`:
    case `may`:
        alert(`Spring is nice with everything blooming.`);
    break;
    //Summer
    case `june`:
    case `july`:
    case `august`:
        alert(`You enjoy the summer months!`);
    break;
    //Fall
    case `september`:
    case `october`:
    case `november`:
        alert(`Fall is fun with all of the pretty colors.`);
    break;
    //Winter
    case `december`:
    case `january`:
    case `february`:
        alert(`You love the winter months!`);
    break;
    //Other Inputs
    default:
        alert(`Other months are interesting too!`);
}
