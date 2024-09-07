//1. Choose a Menu between 1 to 10 randomly to get a surprise Dish using Switches
//2. Air Ticket price of different listed Countries
//3. Day Routine and Message based on day
//4. message on different commands
//5. Handling Error Codes
//6. Grading System
//7. vowel finder


// Restaurant Lottery
function selectMenu(options) {

    switch (options) {
        case 1: console.log("HamBurger");
            break;

        case 2: console.log("Chicken Curry");
            break;

        case 3: console.log("Haydrabadi Biriyani");
            break;

        case 4: console.log("Beef stake");
            break;

        default: console.log("Please choose between 1 to 4")

    }
}
// Immigrations
function country(options) {

    const dataInput = options !== null && options !== undefined ? options.toString().toLowerCase() : "";

    switch (dataInput) {
        case "india": console.log("RS 45000 only");
            break;

        case "chandpur": console.log("$400 only");
            break;

        case "bangladesh": console.log("$2000 only")
            break;

        case "": console.log("Faka Entry Ken maren?");
            break;

        default: console.log("choose between Bangladesh, India, Chandpur")
    }
}



function dailyRoutine(day) {

    switch (day) {
        case 1: console.log("Saturday, Class Test")
            break;
        case 2: console.log("Sunday, It's Weekend- go for a chillllll")
            break;
        case 3: console.log("Monday, Thesis day")
            break;
        case 4: console.log("Tuesday, Physics class test")
            break;
        case 5: console.log("Wednesday, Debate club at 9:00PM")
            break;
        case 6: console.log("Thursday, Friendly Cricket Match")
            break;
        case 7: console.log("Friday, Party day!!")
            break;

        default: console.log("7 days in a Week, Idiot!!")
    }
}

// Routine checker
function dailyRoutine(click) {

    switch (click) {
        case 1: console.log("Saturday, Class Test")
            break;
        case 2: console.log("Sunday, It's Weekend- go for a chillllll")
            break;
        case 3: console.log("Monday, Thesis day")
            break;
        case 4: console.log("Tuesday, Physics class test")
            break;
        case 5: console.log("Wednesday, Debate club at 9:00PM")
            break;
        case 6: console.log("Thursday, Friendly Cricket Match")
            break;
        case 7: console.log("Friday, Party day!!")
            break;

        default: console.log("7 days in a Week, Idiot!!")
    }
}



// Changing Colors
let count = 0;

function countUp() {
    if (count > 7) {
        count = 0
    }
    else {
        dailyRoutine(count)
        count++
    }
    console.log(count)
}


document.querySelector("h1").addEventListener('click', countUp)


function dailyRoutine(count) {

    switch (count) {
        case 1: document.querySelector('body').style.backgroundColor = "Green";
            break;
        case 2: document.querySelector('body').style.backgroundColor = "cadetBlue";
            break;
        case 3: document.querySelector('body').style.backgroundColor = "seagreen";
            break;
        case 4: document.querySelector('body').style.backgroundColor = "red";
            break;
        case 5: document.querySelector('body').style.backgroundColor = "blue";
            break;
        case 6: document.querySelector('body').style.backgroundColor = "salmon";
            break;
        case 7: document.querySelector('body').style.backgroundColor = "orange";
            break;

        default: console.log("7 days in a Week, Idiot!!")
    }
}

let smallOne = "A curious orange fox swiftly jumps over the lazy dog while an excited eagle flies above, observing everything in the meadow below. The wind carries a gentle tune, and as the animals wander freely, an owl hoots softly from the oak tree. Underneath, the unique sound of raindrops creates a peaceful rhythm. Inside the cozy barn, a cat purrs contentedly beside a small, warm fire, enjoying the quiet evening. Outside, the twilight sky turns violet, and every creature finds a place to rest, as nature’s symphony plays on with endless harmony and grace"


function vowelCounter(arr) {

    let myReduce = arr.reduce((reduceObj, elem) => {
        for (let i = 0; i < elem.length; i++) {
            let char = elem[i].toLowerCase();
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

                reduceObj.vowel++;

                if (reduceObj.list[elem[i]]) {
                    reduceObj.list[elem[i]]++
                } else {
                    reduceObj.list[elem[i]] = 1
                }
            }
            else {
                reduceObj.consonant++
            }
        }
        return reduceObj;
    }, { vowel: 0, consonant: 0, list: {} })

    return myReduce;
}


// !! Another way using multiple cases and switch and if inside reduce method!!

function switchInReduce(arr) {
    let result = arr.reduce((obj, element) => {
        for (let i = 0; i < element.length; i++) {
            let char = element[i].toLowerCase();




            switch (char) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    obj.vowel++;
                    if (obj.vowelChart[char]) {
                        obj.vowelChart[char]++
                    }
                    else {
                        obj.vowelChart[char] = 1
                    }

                    break;

                default: obj.consonant++
            }

        }
        return obj;
    },
        { vowel: 0, consonant: 0, vowelChart: {} })

    return result;
}



let arrayConv = smallOne.toLowerCase().split(" ");
console.log(switchInReduce(arrayConv));

// vowel Checker
! let vowel =0;
! let cons =0;
! let ami = ["nayan", "biswas"];
for(let word of ami){
    for(let i = 0; i < word.length; i++){
        let char = word[i].toLowerCase();

        switch(char){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowel++
                console.log(vowel);
                break;


                default: cons++
                console.log(cons);
        }
    }
}

let myObj = new Object();
console.log(myObj)
let name = "Nayan";

for (let i = 0; i < name.length; i++) {
    let char = name[i].toLowerCase();

    if (myObj[char]) {
        myObj[char]++
    }
    else {
        myObj[char] = 1;
        console.table(`Just Input a new key: ${myObj[char]} value: 1 pair`)
    }

}

function handleErr(err) {
    switch (err) {
        case 400:
            console.log("Bad Request");
            break;
        case 401:
            console.log("Unauthorized Access");
            break;
        case 404:
            console.log("Not Found");
            break;
        case 500:
            console.log("Internal Server Error");
            break;
        default:
            console.log("Unknown Error");
    }
}

console.clear()

// Checking its array and its elements are integers or not? 
let myArr = [1, 1]
function arrayChecker(arr) {
    switch (true) {
        case !Array.isArray(arr): 
            console.log('Hey This is not an Array');
            break;

        case arr.length === 0: 
            console.log("Can't pass an Empty Array");
            break;

        case !arr.every(elem => Number.isInteger(elem)): 
            console.log("Array has Decimal Numbers as well");
            break;

        default:
            console.log("Congratulations you are Good to go")
    }
}




// Error Handling when fetching Data....
async function handleError() {
   try{

    let response = await fetch('https://jsonplaceholder.typicode.com/users')

    if(response.ok){
        let data = await response.json();
        console.log("My Data",data)
    }else{
        errorSwitch(response.status)
    }
   }
   catch(error){
        console.error("error");
        errorSwitch(0)
   }
}

function errorSwitch(error){
    switch(error){

        case 400:
            console.log("Bad Request 400")
            break;
        case 401:
            console.log("Unauthorized Access 401")
            break;
        case 404:
            console.log("Not Found 404")
            break;
        case 500:
            console.log("Internal Server Error 500")
            break;


        default: console.log("Unknown Error")
    }
}

handleError();

