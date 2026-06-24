//Tharrin Cooper 6/24/2026

"use strict";

/* PLANNING / PSEUDOCODE
Initialize score = 0

Question 1: What is my first name?
    -Variable name personalized to question: myName
    -Correct answer: Tharrin
    -How I'll validate and check the answer : I will use an if statement

Question 2: What are one of my hobbies?
    -Variable name personalized to question: myHobby
    -Correct answer: reading or video games.
    -How I'll validate and check the answer : I will use an if statement

Question 3: What is my favorite food?
    -Variable name personalized to question: favFood
    -Correct answer: pizza
    -How I'll validate and check the answer : I will use an if statement

Question 4: What is my favorite color?
    -Variable name personalized to question: favColor
    -Correct answer: purple
    -How I'll validate and check the answer : I will use an if statement

Math: How will I calculate the percentage?
    -Calculation: I will calculate the percentage using (score) / (total questions) * 100

    Final feedback logic (if / else if / else):
if score >= 3 then say you did good else if score >= 1 then say you did okay else if score <= 0 say you did terrible

Logical operators I will use:
    - || for my hobbies allowing for multiple valid answers
    - && to check for blanks 
*/

// Creating Variables
let totalScore = 0;
let myName;
let myHobby;
let favFood;
let favColor;

// Question 1
myName = prompt(`What is my name?`, `enter name`)
if(myName.toLowerCase() === `tharrin`) {
alert(`Correct`);
totalScore += 1;    
} else if(myName && myName.trim() === ``){
alert(`Answer Blank`);
} else {
alert(`Wrong`);
}

// Question 2
myHobby = prompt(`What is one of the hobbies I enjoy out of the following video games, jogging, or reading`, `enter hobby`)
if(myHobby.toLowerCase() === `reading` || myName.toLowerCase() === `video games`) {
alert(`Correct`);
totalScore += 1;
} else if(myHobby && myHobby.trim() === ``){
alert(`Answer Blank`);
} else {
alert(`Wrong`);
}
// Question 3
favFood = prompt(`What is my favorite food?`, `enter food`)
if(favFood.toLowerCase() === `pizza`) {
alert(`Correct`);
totalScore += 1;
} else if(favFood && favFood.trim() === ``){
alert(`Answer Blank`);
} else {
alert(`Wrong`);
}

// Question 4
favColor = prompt(`What is my favorite color?`, `enter color`)
if(favColor.toLowerCase() === `purple`) {
alert(`Correct`);
totalScore += 1;
} else if(favColor && favColor.trim() === ``){
alert(`Answer Blank`);
} else {
alert(`Wrong`);
}

// Calculate percentage using math
alert(`You got ${(totalScore/4)*100}% of the questions correct`);

// Final feedback using if / else if / else
if(totalScore >= 3){
alert(`you did good you got ${totalScore}/4 of the questions correct`);
} else if (totalScore >= 1){
alert(`you did okay you got ${totalScore}/4 of the questions correct`);
} else {
alert(`you got ${totalScore}/4 of the questions correct`);
}

// Final summary alert
alert(`====================================\nFINAL SUMMARY\n====================================\n
your answer to the first question was: ${myName}\nyour answer to the second question was: ${myHobby}\n
your answer to the third question was: ${favFood}\nyour answer to the final question was: ${favColor}\n
you got ${(totalScore/4)*100}% of the questions correct`);