// 1. Generate random race numbers between 0(inclusive) and 1000(exclusive)
let raceNumber = Math.floor(Math.random() * 1000);

// 2. declare a variable to indicate whether a runner is registered early or not
let isRegisteredEarly = true;

// 3. A variable for runner's age;
let runnerAge = 100;

// 4. Control flow to add 1000 to racenumber if runner is an adult and registered early.
// if (runnerAge > 18 && isRegisteredEarly === true) {
// raceNumber += 1000;
// }

// 5. log race time of early registered adults as 9:30am
if (isRegisteredEarly && runnerAge > 18) {
  raceNumber += 1000;
  console.log(`Your race number is ${raceNumber} and race time is 9:30am`);
}
// 6.log race time of later registered adults as 11:00am.
else if (runnerAge > 18 && isRegisteredEarly === false) {
  console.log(`Your race number is ${raceNumber} and race time is 11:00am`);
}

// 7. log youth registrants run time as 12:30pm.
else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and race time is 12:30pm`);
} else {
  console.log(`Check your race number and race time at the Registration Desk.`);
}
