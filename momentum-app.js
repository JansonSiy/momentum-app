// greeting
function greeting() {
    // getting the url dynamically
    let urlString = window.location.search;
    console.log(urlString);

    // use this new variable to get the key and value from the string
    let url = new URLSearchParams(urlString);
    
    // you are getting the "names" value in html
    let getFirstName = url.get('firstName');
    console.log(getFirstName);

    let getLastName = url.get('lastName');
    console.log(getLastName);

    let greet = "Hi " + getFirstName + " " + getLastName + "!";
    console.log(greet);
    return greet;
};

document.getElementById("greetUser").innerHTML = greeting();

// clock
window.onload = clock();

function clock() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let peroid = (hours > 12) ? 'AM' : 'PM';

    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    // "-" = removing & "2" = index

    let clockDisplay = document.getElementById('clockDisplay');

    clockDisplay.innerHTML = 
    hours + ": " + 
    minutes + ": " + 
    seconds + " " +
    peroid;

    setTimeout(clock, 500);
    // 1000 = 1 sec;
};

// main focus
function getFocusValue() {
    // get the value of focusInput and display it in focusDisplay
    let focusInput = document.getElementById('focusInput').value;
    let focusDisplay = document.getElementById('focusDisplay');
    
    focusDisplay.innerHTML = focusInput;

    document.getElementById('focusInput').value = '';
};

function resetFocusValue() {
    let focusDisplay = document.getElementById('focusDisplay');

    focusDisplay.innerHTML = "Great work! You're Done!";

    document.getElementById('focusInput').value = '';
};

// to do list
let inputToDo = document.getElementById('inputToDo');
let displayToDo = document.getElementById('displayToDo');
let addToDo = document.getElementById('addToDo');
let clearToDo = document.getElementById('clearToDo');

addToDo.addEventListener('click', function() {    
    // create a newToDo p elemet with inputToDo.value
    let newToDo = document.createElement('p');

    newToDo.innerText = inputToDo.value;

    // append newToDo to displayToDo
    displayToDo.appendChild(newToDo);

    // clear input value
    document.getElementById('inputToDo').value = "";

    // must be able to delete all newToDos with clearToDo
    clearToDo.addEventListener('click', function() {
        displayToDo.removeChild(newToDo);
    });

    // do a line-through upon click
    newToDo.addEventListener('click', function() {
        newToDo.style.textDecoration = "line-through";
    });
    
    // removing the newToDo upon doubleclicking
    newToDo.addEventListener('dblclick', function() {
        displayToDo.removeChild(newToDo);
    });
});

// quotes
let quoteList = [
    'HAPPINESS IS ...finally finishing an assignment. - Anonymous',
    'If you spend too much time thinking about it, you`ll never get it done. - Bruce Lee',
    'You don`t have to see the whole staircase. Just take the first step. - MLK, Jr.',
    'Just do it - Shia LeBeouf',
    'If you can`t stop thinking about it, don`t stop working on it. - Anonymous'];
console.log(quoteList);

function randomQuotes() {
    let randomQuote = Math.floor(Math.random()*(quoteList.length));
    // using math.floor(will be rouding the number up) math.random(producing a random number from 0-1) and multiplying it by 5 (number of your items)
    // you will be producing an index number randomlly from 0-4
    document.getElementById('displayQuote').innerHTML = quoteList[randomQuote];
    // put the random quotes from quotelist with the math solution of randomQuotes and display it in displayQuote
};

// changing quotes manually
function addQuote() {
    let inputQuote = document.getElementById('inputQuote').value;
    let displayQuote = document.getElementById('displayQuote');

    displayQuote.innerHTML = inputQuote;
};