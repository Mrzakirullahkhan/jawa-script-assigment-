// // ...........Assigmnet ..............
// // ...........chapter 17 to 20 .........
// // Q No = 01 
// // empty array 
// let studnt = [];

// //  Q No = 02 
let num1 = [0, 1, 2, 3];
let num2 = [1, 0, 1, 2];
let num3 = [2, 1, 0, 1];
console.log(num1);
console.log(num2);
console.log(num3);

// Q No =03 
write a program to print numeric cpounting from 1 to 10 
for (let a = 1; a <= 10; a++) {
    console.log(a)

}

// // Q No =04
// // write a program to print multiplication table of any number using for loop. table number and length shuould be taken as an input from user

let user = +prompt("enter a number");
for( let a = 1; a<=10; a++){
    console.log(`${user} * ${a} = ${user * a}`)

}
// Q No =05
//  write a program to print items of the array using loop;

let fruits = ["apple", "banana", "mango", "orange"]
console.log(fruits)


// Q No =06 
// generate  the folloing series in your browser .see example out put 

let number= [1,2,3,4,5,6,7,8,9,10]
number.reverse();
console.log(number)


// Q No =07
// write a program to enable search by the user input weather the given item is found in the list or not ?


let user = prompt("enter your favorite item name")
let value;
let boxNumber;

let listItem = ["cake", "apple", "mango", "banana", ]

for(let i= 0; i<listItem.length; i++){
    if(listItem[i]===user){
        boxNumber = i
        value = true

     
    }
 
}
if(value){
    console.log(`your item ${user} is available in box number ${boxNumber}`)

}
else{
    console.log("no its not available ")
}
// Q No = write a program to identify the larger number in the given array ?

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largeNum= 0;

for (i=0; i<=largest;i++){
    if (array>largeNum) {
        var largNum=array[i];
    }
}

console.log(largNum);

// // Q No = write a program to print multiple of 5 ranging 1 to 100?

let a = 0;
for( let i=0; i<=100; i+=5){
    console.log(`${a + i}`)

}


//  ...........Assigment chapter 13-15
// Q No-1 declare an array to inialize to store the available uducation qualification in pakistan 

let education =["matric", "intermediate", "bachlour", "master", "Phd"];
console.log(education)

//  Q No- 8 
// write a program to store 3 students names in and array .takes another array to store the score 
// these students the toptal marks are 500 for each students like 


let studentsName = ["kamran","mujahid", "abdullah"];
let obtainMarks = [444, 388, 480];
let persenatgeKamran  = 444/500*100;
let persenatagemujahid  = 388/500*100;
let persenatgeabdullah  = 480/500*100; 
 
console.log(`score of ${studentsName[0]} is ${obtainMarks[0]} and his % is ${persenatgeKamran}%`)
console.log(`score of ${studentsName[1]} is ${obtainMarks[1]} and his % is ${persenatagemujahid}%`)
console.log(`score of ${studentsName[2]} is ${obtainMarks[2]} and his % is ${persenatgeabdullah}%`)


// Q No = 09
//  Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser



// (a) add color in the bigninng

let colorName = ["red", "blue","green", "pink","yellow"]
let user = prompt("which color you want to add in the list ")
colorName.unshift(user);
console.log(colorName)



// (b) add color in the last 

let colorName = ["red", "blue","green", "pink","yellow"]
let user = prompt("which color you want to add in the list ")
colorName.push(user);
console.log(colorName)

// (c) add  two color in the bigning

let colorName = ["red", "blue","green", "pink","yellow"]
let user1 = prompt("fist color in the bigninng ")
let user2 = prompt("second color in the bigninng ")
colorName.unshift(user1, user2);
console.log(colorName)


// (d) delete the fist color in the array 

let colorName = ["red", "blue","green", "pink","yellow"]
colorName.shift(user);
console.log(colorName);

// (e) delete the last color in the array 

let colorName = ["red", "blue","green", "pink","yellow"]
colorName.pop(user);
console.log(colorName);

// (f) from wich index user want to add color 

let colorName = ["red", "blue","green", "pink","yellow"]
let userIndex = +prompt("from wich index number you want to add color name ?")
let deleteOfColors = +prompt("how many colors you want to delete  ?")
let addOfColors = prompt("write color name you want to add")
colorName.splice(userIndex,deleteOfColors,addOfColors);
console.log(colorName)


// Q No = 10 
// write a program to store students score in an array and sort the array in assending order using array sort method.

let studentsScore = [ 20, 30, 56, 44, 70]
studentsScore.sort();
console.log(studentsScore)


// Q N0 = 11
// write a program to initialized  an array with city name and copy 3 array elemnt from the array 

let cityName = ["islamabd", "lahore", "karachi","multan","kpk",]
let a = cityName.slice(0,2);
let newArray = [a]
console.log(newArray)

// Q No = 12
//  write a program to convert the array into the string form 


let value = ["this ", "is", "a", "ball"]
let a = value.toString();
console.log(a)


//  Chapter No 12-13 

// Q No-2
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


let user1 = +prompt("input your first integer");
let user2 = +prompt("input your second integer")
if(user1>user2){
 console.log(`your fist integer ${user1} is greater then your second value`)
}
else if(user1<user2){
    console.log(`your second integer ${user2} is greater then your fisrt value`)
}
else if(user1===user2){
    console.log("your both number are equal")

}


// Q No -3
// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.


let user = +prompt("Input number");
if( user===0){
    console.log("the number is zero")

}
else if( user>0){
    console.log("the number is postive")

}
else if(user<0){
    console.log("the number is negative")
}


// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise
    

let user = prompt("input string");
if( user ==="a" || (user=="e") || (user ==="i") || (user==="o") (user ==="u")){
    console.log("you input vowel character")

}
else("you input other character")



// Q No - 5
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.



let password = "ubit2023"
let userPasward = prompt("enter your pasward")
if(password===userPasward){
    console.log("you enter correct pasward")

}
else if(password!==userPasward){
    console.log("you input wrong paswrd")
}


// Q No - 6
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 12;
if (hour < 18) {
greeting = true

}
if(greeting){
    console.log("good morning")

}
else{
    console.log("good night")
}



// Q No = 7
// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


let userTime = +prompt("input uour time number in for digits");
if((userTime>=0000) && (userTime<1200)){
    console.log("good morning")

}
else if ((userTime>=1200) && (userTime<1700)){
    console.log("good after noon ")
}
else if ((userTime>=1700) && (userTime<2100)){
    console.log("good evening")
}
else if((userTime>=2100) && (userTime<2359)){
    console.log("good night")
}






