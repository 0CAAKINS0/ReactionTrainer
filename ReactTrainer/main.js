let isGameStarted = false;
let scores = [];
let previousScores = [];
let timeClicked;
let timeNow;
let roundCounter = 0;
let rotationInterval;
let reactListener;
let rotationCount;
let timer;

function startGame() {
    if(!isGameStarted) {
        isGameStarted = true;
        let reactArea = document.getElementById("react-area");
        if(reactArea.firstElementChild){
            reactArea.removeChild(reactArea.firstElementChild);
        }
        let startingPreview = document.createElement("div");
        startingPreview.innerText = "Welcome!  There will be five rounds of tests.  Click the colored area as fast as you can once you see a dinosaur.\n\nPlease click below to begin your test.";
        startingPreview.classList.add("preview");
        let beginButton = document.createElement("button");
        beginButton.innerText = "Begin";
        beginButton.classList.add('begin-button')
        beginButton.addEventListener('click', () => {
            reactArea.removeChild(reactArea.firstElementChild);
            runTestRound();
        });
        startingPreview.appendChild(beginButton);
        reactArea.appendChild(startingPreview);
    }
    
}

// function runTest() {
//     reactArea.removeChild(reactArea.firstElementChild);
//     roundCounter++;
//     let reactArea = document.getElementById("react-area");
//     if(roundCounter === 4) {
//         const reactListener = reactArea.addEventListener('click', () => {
//             if(reactArea.classList.contains("green")) {
//                 timeClicked = Date.now();
//             }
//             else{
//                 timeClicked = timeNow + 10000;
//             }
//             createResults();
//         });
//     }
//     else {
//         const reactListener = reactArea.addEventListener('click', () => {
        
//             if(reactArea.classList.contains("green")) {
//                 timeClicked = Date.now();
//             }
//             else {
//                 timeClicked = timeNow + 10000;
//             }
//             createResult();
//         });
//     }
//     runTestRound();
// }

function runTestRound() {
    roundCounter++;
    let reactArea = document.getElementById("react-area");
    let rotations = Math.round((Math.random()*6)+2);
    let imageSelector = Math.round(Math.random());
    let previousImage = -1;
    rotationCount = 0;
    timer = 800;
    console.log("Rotations: " + rotations);
    // rotationInterval = setTimeout(rotationTimeoutFunction, timer);
        clearInterval(rotationInterval);
    let rotationFunction = () => {
        if(rotationCount === 0){
            reactArea.addEventListener('click', reactionListener);
        }
        if(rotationCount === rotations){
            image = document.querySelector("img");
            imageSelector = Math.round(Math.random()*4);
            console.log(imageSelector);
            if(imageSelector === 0) {
                image.setAttribute("src", "allosaurus.jpg");
            }
            else if(imageSelector === 1) {
                image.setAttribute("src", "brachiosaurus.jpg");
            }
            else if(imageSelector === 2) {
                image.setAttribute("src", "raptor.jpg");
            }
            else if(imageSelector === 3) {
                image.setAttribute("src", "triceratops.jpg");
            }
            else if(imageSelector === 4) {
                image.setAttribute("src", "pterodactyl.jpg");
            }
            reactArea.setAttribute("style", "background-color: Green");
            reactArea.classList.add("green");
            timeNow = Date.now();
            console.log("Rotation count on last rotation: " + rotationCount);
            clearTimeout(functionInterval);
        }
        else {
            let image;
            if(rotationCount === 0) {
                image = document.createElement("img");
                image.setAttribute("id", "react-image");
                reactArea.appendChild(image);
            }
            else {
                image = document.querySelector("img");
            }
            while(imageSelector === previousImage){
                imageSelector = Math.round(Math.random()*9);
            }
            if(imageSelector === 0) {
                image.setAttribute("src", "lincolnphoto.jpg");
            }       
            else if(imageSelector === 1) {
                image.setAttribute("src", "amelia-earhart.jpg");
            }
            else if (imageSelector === 2) {
                image.setAttribute("src", "neil-tyson.jpg");
            }
            else if (imageSelector === 3) {
                image.setAttribute("src", "drake.jpg");
            }
            else if (imageSelector === 4) {
                image.setAttribute("src", "danny.jpg");
            }
            else if (imageSelector === 5) {
                image.setAttribute("src", "kobe-bryant.jpg");
            }
            else if (imageSelector === 6) {
                image.setAttribute("src", "petty.jpg");
            }
            else if (imageSelector === 7) {
                image.setAttribute("src", "Serena_Williams.jpg");
            }
            else if (imageSelector === 8) {
                image.setAttribute("src", "tom-brady.jpg");
            }
            else if (imageSelector === 9) {
                image.setAttribute("src", "tswift.jpg");
            }
            else if (imageSelector === 10) {
                image.setAttribute("src", "polamalu.jpg");
            }
            previousImage = imageSelector;  
        }
        rotationCount++;
        timer = timer / 1.2;
        console.log(timer);
        let functionInterval = setTimeout(rotationFunction, timer);
    }
        rotationInterval = setTimeout(rotationFunction, timer);
        // rotationInterval = setInterval(() => {
        //     if(rotationCount === 0){
        //         reactArea.addEventListener('click', reactionListener);
        //     }
        //     if(rotationCount === rotations){
        //         image = document.querySelector("img");
        //         imageSelector = Math.round(Math.random()*4);
        //         console.log(imageSelector);
        //         if(imageSelector === 0) {
        //             image.setAttribute("src", "allosaurus.jpg");
        //         }
        //         else if(imageSelector === 1) {
        //             image.setAttribute("src", "brachiosaurus.jpg");
        //         }
        //         else if(imageSelector === 2) {
        //             image.setAttribute("src", "raptor.jpg");
        //         }
        //         else if(imageSelector === 3) {
        //             image.setAttribute("src", "triceratops.jpg");
        //         }
        //         else if(imageSelector === 4) {
        //             image.setAttribute("src", "pterodactyl.jpg");
        //         }
        //         reactArea.setAttribute("style", "background-color: Green");
        //         reactArea.classList.add("green");
        //         timeNow = Date.now();
        //         console.log("Rotation count on last rotation: " + rotationCount);
        //         clearInterval(rotationInterval);
        //     }
        //     else {
        //         let image;
        //         if(rotationCount === 0) {
        //             image = document.createElement("img");
        //             image.setAttribute("id", "react-image");
        //             reactArea.appendChild(image);
        //         }
        //         else {
        //             image = document.querySelector("img");
        //         }
        //         while(imageSelector === previousImage){
        //             imageSelector = Math.round(Math.random()*9);
        //         }
        //         if(imageSelector === 0) {
        //             image.setAttribute("src", "lincolnphoto.jpg");
        //         }       
        //         else if(imageSelector === 1) {
        //             image.setAttribute("src", "amelia-earhart.jpg");
        //         }
        //         else if (imageSelector === 2) {
        //             image.setAttribute("src", "neil-tyson.jpg");
        //         }
        //         else if (imageSelector === 3) {
        //             image.setAttribute("src", "drake.jpg");
        //         }
        //         else if (imageSelector === 4) {
        //             image.setAttribute("src", "danny.jpg");
        //         }
        //         else if (imageSelector === 5) {
        //             image.setAttribute("src", "kobe-bryant.jpg");
        //         }
        //         else if (imageSelector === 6) {
        //             image.setAttribute("src", "petty.jpg");
        //         }
        //         else if (imageSelector === 7) {
        //             image.setAttribute("src", "Serena_Williams.jpg");
        //         }
        //         else if (imageSelector === 8) {
        //             image.setAttribute("src", "tom-brady.jpg");
        //         }
        //         else if (imageSelector === 9) {
        //             image.setAttribute("src", "tswift.jpg");
        //         }
        //         else if (imageSelector === 10) {
        //             image.setAttribute("src", "polamalu.jpg");
        //         }
        //         previousImage = imageSelector;  
        //     }
        //     rotationCount++;
        //     timer = timer / 4;
        //     console.log(timer);
        // }, timer);
}

function rotationTimeoutFunction() {
    if(rotationCount === 0){
        reactArea.addEventListener('click', reactionListener);
    }
    if(rotationCount === rotations){
        image = document.querySelector("img");
        imageSelector = Math.round(Math.random()*4);
        console.log(imageSelector);
        if(imageSelector === 0) {
            image.setAttribute("src", "allosaurus.jpg");
        }
        else if(imageSelector === 1) {
            image.setAttribute("src", "brachiosaurus.jpg");
        }
        else if(imageSelector === 2) {
            image.setAttribute("src", "raptor.jpg");
        }
        else if(imageSelector === 3) {
            image.setAttribute("src", "triceratops.jpg");
        }
        else if(imageSelector === 4) {
            image.setAttribute("src", "pterodactyl.jpg");
        }
        reactArea.setAttribute("style", "background-color: Green");
        reactArea.classList.add("green");
        timeNow = Date.now();
        console.log("Rotation count on last rotation: " + rotationCount);
        clearTimeout(rotationInterval);
    }
    else {
        let image;
        if(rotationCount === 0) {
            image = document.createElement("img");
            image.setAttribute("id", "react-image");
            reactArea.appendChild(image);
        }
        else {
            image = document.querySelector("img");
        }
        while(imageSelector === previousImage){
            imageSelector = Math.round(Math.random()*9);
        }
        if(imageSelector === 0) {
            image.setAttribute("src", "lincolnphoto.jpg");
        }       
        else if(imageSelector === 1) {
            image.setAttribute("src", "amelia-earhart.jpg");
        }
        else if (imageSelector === 2) {
            image.setAttribute("src", "neil-tyson.jpg");
        }
        else if (imageSelector === 3) {
            image.setAttribute("src", "drake.jpg");
        }
        else if (imageSelector === 4) {
            image.setAttribute("src", "danny.jpg");
        }
        else if (imageSelector === 5) {
            image.setAttribute("src", "kobe-bryant.jpg");
        }
        else if (imageSelector === 6) {
            image.setAttribute("src", "petty.jpg");
        }
        else if (imageSelector === 7) {
            image.setAttribute("src", "Serena_Williams.jpg");
        }
        else if (imageSelector === 8) {
            image.setAttribute("src", "tom-brady.jpg");
        }
        else if (imageSelector === 9) {
            image.setAttribute("src", "tswift.jpg");
        }
        else if (imageSelector === 10) {
            image.setAttribute("src", "polamalu.jpg");
        }
        previousImage = imageSelector;  
    }
    rotationCount++;
    timer = timer / 4  ;
    console.log(timer);
    rotationInterval = setTimeout(rotationTimeoutFunction, timer);
}

function reactionListener() {
    let reactArea = document.getElementById("react-area");
    if(roundCounter === 5) {
        if(reactArea.classList.contains("green")) { timeClicked = Date.now(); }
        else {
            timeNow = Date.now();
            timeClicked = timeNow + 10000;
            clearInterval(rotationInterval);
        }
        reactArea.removeEventListener('click', reactionListener);
        reactArea.classList.remove("green");
        scores.push(timeClicked-timeNow);
        console.log(scores);
        
        console.log("Rotation count on last rotation: " + roundCounter);
        createResults();
    }
    else {
        if(reactArea.classList.contains("green")) {
            timeClicked = Date.now();
        }
        else {
            timeNow = Date.now();
            timeClicked = timeNow + 10000;
            clearInterval(rotationInterval);
        }
        scores.push(timeClicked-timeNow);
        reactArea.removeEventListener('click', reactionListener);
        reactArea.classList.remove("green");
        createResult();
    }
}

function createResults() {   
    console.log("im everywhere");
    roundCounter = 0;
    let reactArea = document.getElementById("react-area");
    reactArea.removeChild(reactArea.firstElementChild);
    let startButton = document.getElementById("start-button");
    startButton.innerText = "Start test";
    startButton.classList.remove("started");
    isGameStarted = false;
    let totalTime = 0;
    let finalResults = document.createElement("div");
    let resultsHeader = document.createElement("h2");
    let resultList = document.createElement("ul");
    let averageResult = document.createElement("div");
    resultsHeader.innerText = "Your final results:"
    finalResults.appendChild(resultsHeader);
    for(let i = 1; i <= scores.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = "Round " + i + ": " + scores[i-1] + "ms.";
        resultList.appendChild(listItem);
        totalTime += scores[i-1];
        console.log("Score # " + i + ": " + scores[i-1]);
    }
    averageResult.innerText = "Your average time: " + (totalTime/5) + "ms";
    finalResults.appendChild(resultList);
    finalResults.appendChild(averageResult);
    finalResults.classList.add("results");
    reactArea.appendChild(finalResults);
    scores.unshift(totalTime/5);
    previousScores.push(scores);
    scores = [];

    showPreviousResults();
}

function showPreviousResults() {
    console.log("im here");
    if(previousScores.length === 1) {
        let previousResultsDiv = document.createElement("div");
        previousResultsDiv.classList.add("previous-div");
        let pastResults = document.createElement("ul");
        let pastResult = document.createElement("li");
        let pastResultList = document.createElement("ul");
        pastResults.setAttribute("id", "previous-scores");
        for(let i = 0; i < previousScores[0].length; i++) {
            if(i === 0){
                let listItem = document.createElement("li");
                listItem.innerText = "Attempt # 1 Average: " + previousScores[0][i];
                listItem.classList.add("attempt-header")
                pastResultList.appendChild(listItem);
            }
            else{
                let listItem = document.createElement("li");
                listItem.innerText = "Round " + i + ": " + previousScores[0][i] + "ms.";
                pastResultList.appendChild(listItem);
            }
        }
        pastResult.appendChild(pastResultList);
        pastResults.appendChild(pastResult);
        previousResultsDiv.appendChild(pastResults);
        document.getElementById("main").appendChild(previousResultsDiv);
    }
    else{
        let pastResults = document.getElementById("previous-scores");
        let pastResult = document.createElement("li");
        let pastResultList = document.createElement("ul");
        pastResults.setAttribute("id", "previous-scores");
        for(let i = 0; i < previousScores[previousScores.length-1].length; i++) {
            if(i === 0){
                let listItem = document.createElement("li");
                listItem.innerText = "Attempt # " + previousScores.length + " Average: " + previousScores[previousScores.length-1][i];
                listItem.classList.add("attempt-header")
                pastResultList.appendChild(listItem);
            }
            else{
                let listItem = document.createElement("li");
                listItem.innerText = "Round " + i + ": " + previousScores[previousScores.length-1][i] + "ms.";
                pastResultList.appendChild(listItem);
            }
        }
        pastResult.appendChild(pastResultList);
        pastResults.appendChild(pastResult);
    }
}

function createResult() {
    let reactArea = document.getElementById("react-area");
    let result = document.createElement("div");
    let resultHeader = document.createElement("h2");
    reactArea.removeChild(document.getElementById("react-image"));
    resultHeader.innerText = "Your time:\n" + (timeClicked - timeNow) + "ms";
    result.appendChild(resultHeader);
    let nextButton = document.createElement("button");
    nextButton.innerText = "Start next round";
    nextButton.addEventListener('click', () => { 
        reactArea.removeChild(reactArea.firstElementChild);
        reactArea.setAttribute("style", "background-color: Red");
        runTestRound(); });
    nextButton.classList.add("next-button");
    result.appendChild(nextButton);
    result.classList.add("result");
    reactArea.appendChild(result);
}


document.addEventListener('DOMContentLoaded', () => {
    let startButton = document.getElementById('start-button');
    let reactArea = document.getElementById("react-area");
    startButton.addEventListener('click', () => {;
        if(!isGameStarted){
            startButton.innerText = 'Restart Test';
            startButton.classList.add("started");
            reactArea.setAttribute("style", "background-color: Red");
            startGame();
        }
        else {
            scores = [];
            roundCounter = 0;
            isGameStarted = false;
            clearInterval(rotationInterval);
            reactArea.removeEventListener("click", reactionListener);
            reactArea.setAttribute("style", "background-color: Red");
            startGame();
        }
    })

})