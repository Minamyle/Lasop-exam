// question 1.
// let randomNumber = Math.floor(Math.random() * 256);

// question 2

// 1
// const today = new Date();
// const year = today.getFullYear();
// console.log(year);

// 2
// const today = new Date();
// const month = today.getMonth() + 1;
// console.log(month);

// 3
// const today = new Date();
// const date = today.getDate();
// console.log(date);


// 4
// const today = new Date();
// const day = today.getDay();
// console.log(day);

// 5
// const today = new Date();
// const hour = today.getHours();
// console.log(hour)

// 6
// const today = new Date();
// const minutes = today.getMinutes();
// console.log(minutes)

// 7
// const now = new Date();
// const secondsSinceEpoch = now.getTime() / 1000; 
// console.log(secondsSinceEpoch)


// question 3
// const currentYear = new Date().getFullYear(); 
// const birthYear = prompt("what is your birth date?"); 
// const age = currentYear - birthYear; 

// if (age >= 18) {
//   alert(`You are  ${age}   years old. You can drive`); 
// } else {
//   const waitYears = 18 - age; 
//   alert(`You are ${age} years old. You need to wait ${waitYears} more year(s) to drive.`); 
// }

// question 4

// 1.
// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// let formattedTime = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + ' ' + (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
// console.log(formattedTime);

// 2.
// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// let formattedTime = (day < 10 ? '0' : '') + day + '-' + (month < 10 ? '0' : '') + month + '-' + year + ' ' + (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
// console.log(formattedTime);


// 3.
// let now = new Date();
// let year = today.getFullYear();
// let month = today.getMonth() + 1;
// let day = today.getDate();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// let formattedTime = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year + ' ' + (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
// console.log(formattedTime);

// question 5
// let age = prompt("Enter your age");

// if (age >= 18) {
//   alert("You are old enough to drive.");
// } else {
//   let yearsToWait = 18 - age;
//   alert(`You are not old enough to drive. Please wait ${yearsToWait} more years.`);
// }

// question 6

// let myAge = 50
// let yourAge = prompt("Enter your age");

// if (yourAge >= myAge) {
//   console.log("You are older than me");
// } else {
//   console.log("I am older than you");
// }

// question 7

// I USING TERNARY OPERATOR
// let amina = 10;
// let ismaila = 5;
// let results = amina > ismaila ? 'a is greater than b' : 'a is less than b';
// console.log(results); 

// II USING IF ELSE
// let amina1 = 10;
// let  queen = 5;
// if (amina1 > queen) {
//   console.log('a is greater than b'); 
// } else {
//   console.log('a is less than b');
// }



// QUESTION 8
// let num = prompt('what is your number')

// if (num % 2 === 0) {
//   console.log(num + " is even");
// } else {
//   console.log(num + " is odd");
// }


// PART B

// QUESTION 1
// let score = prompt("Enter score");

// if (score >= 80 && score <= 100) {
//   console.log("Your score is A");
// } else if (score >= 70 && score <= 89) {
//   console.log("Your score is B");
// } else if (score >= 60 && score <= 69) {
//   console.log("Your score is C");
// } else if (score >= 50 && score <= 59) {
//   console.log("Your score is D");
// } else if (score >= 0 && score <= 49) {
//   console.log("Your score is F");
// } else {
//   console.log("Invalid score enter correct score!");
// }


// question 2
// const month = prompt("please enter a month").toLowerCase();

// if (month === "september" || month === "october" || month === "november") {
//   console.log("season is Autumn");
// } else if (month === "december" || month === "january" || month === "february") {
//   console.log(" season is Winter");
// } else if (month === "march" || month === "april" || month === "may") {
//   console.log(" season is Spring");
// } else if (month === "june" || month === "july" || month === "august") {
//   console.log(" season is Summer");
// } else {
//   console.log("input correct answer");
// }


// question 3
// for (var i = 0; i <= 10; i++) {
//     if (i < 10) {
//       console.log(i + ' x ' + i + ' = ' + i*i);
//     } else {
//       console.log(i + ' x ' + i + ' = ' + i*i);
//     }
//   }


// question 4
//   let sum = 0;
// for(let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log("The sum of all numbers from 0 to 100 is=" + sum);



// question 5
// let sumEvens = 0;
// let sumOdds = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEvens += i;
//   } else {
//     sumOdds += i;
//   }
// }


// console.log(sumEvens + sumOdds)

// question 6
// let sumEvens = 0;
// let sumOdds = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEvens += i;
//   } else {
//     sumOdds += i;
//   }
// }

// const sumArray = [sumEvens, sumOdds];
// console.log(sumArray)


// question 6b

// const array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }



// question 7
// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const reversedFruit = [];

// for(let i = fruits.length - 1; i >= 0; i--) {
//   reversedFruit.push(fruits[i]);
// }

// console.log(reversedFruit)


// PART C

// QUESTION 1

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ];
  
//   const landArray = countries.filter(country => country.includes('land'));
  
//   console.log(landArray); 

//   QUESTION 2

  

// let countryWithHighChars = '';
// let maxChars = 0;

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > maxChars) {
//     maxChars = countries[i].length;
//     countryWithHighChars = countries[i];
//   }
// }

// console.log(countryWithHighChars);

// question 3

// const countriesWithLand = countries.filter(country => country.includes('land'));
// console.log(countriesWithLand); 

// question 4
// const WithFourChars = countries.filter(country => country.length === 4);
// console.log(WithFourChars);
  
// question 5
// const WithMultipleWords = countries.filter(country => country.includes(' '));
// console.log(WithMultipleWords);

// question 6
// const revAndCapCountries = countries.map(country => country.toUpperCase()).reverse();
// console.log(revAndCapCountries);


// PART D

// QUESTION 8


// <div class="row">
//   <div class="col-md-4 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Peter Paul</h5>
//         <h6 class="card-subtitle mb-2 text-muted">21 years old</h6>
//         <p class="card-text">Born and raised in Nigeria, Peter is an Igbo by tribe and aspiring to become a telecommunication engineer in the future.</p>
//         <p class="card-text"><strong>Career:</strong> Engineer</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-4 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Jesse Jagz</h5>
//         <h6 class="card-subtitle mb-2 text-muted">26 years old</h6>
//         <p class="card-text">A dynamic graduate of medicine and surgery from the University of Benin with the main objective of solving health issues globally.</p>
//         <p class="card-text"><strong>Career:</strong> Medical Doctor</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-4 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Queen Solomon</h5>
//         <h6 class="card-subtitle mb-2 text-muted">16 years old</h6>
//         <p class="card-text">Recently concluded senior secondary certificate with the aim of furthering her education and would like to be a programmer to solve problems with her skills.</p>
//         <p class="card-text"><strong>Career:</strong> Student</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-12 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Ayo Bola</h5>
//         <h6 class="card-subtitle mb-2 text-muted">36 years old</h6>
//         <p class="card-text">A dynamic MERN stack developer highly skilled in both ends and looking forward to working in a bigger organization. He has what it takes.</p>
//         <p class="card-text"><strong>Career:</strong> Web Developer</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-4 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Sola Brown</h5>
//         <h6 class="card-subtitle mb-2 text-muted">36 years old</h6>
//         <p class="card-text">Utilizing and making meaningful information from raw data is part of Sola's life, and that has helped with his analytical thinking. He only sees himself learning more every day as it gives him joy.</p>
//         <p class="card-text"><strong>Career:</strong> Data Scientist</p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-4 mb-4">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Prince Mich</h5>
//         <h6 class="card-subtitle mb-2 text-muted">20 years old</h6>
//         <p class="card-text">Without a prototype, what is a program?></p>






