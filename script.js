'use strict';

//-- generovat náhodné číslo a uložit ho 1-20:
let number = Math.trunc(Math.random()*20)+1;
console.log(number);

//-- tlačítko check musí porovnat zadané číslo s vygenerovaným
//-- když číslo nesedí tak vpravo změnit text: less nebo high
//-- s neuhodnutým číslem se skóre snižuje
//-- uhodnuté číslo se vypíše místo otazníku a pozadí zezelená
//-- skóre se uloží do "Highscore", pokud je vyšší jak dosavadní highscore
let check = document.querySelector(".check");
let guessOkno = document.querySelector(".guess");
let text = document.querySelector(".message");
let score = 20;
let scoreText = document.querySelector(".score");
let otaznik = document.querySelector(".number");
let highScore = 0;
let highScoreText = document.querySelector(".highscore");
let again = document.querySelector(".again");

check.addEventListener("click", function(){
    console.log("klik");
    console.log(guessOkno.value);
    if(Number(guessOkno.value) > 0 && Number(guessOkno.value) <= 20){
    if(Number(guessOkno.value) === number){
        text.textContent = "Yeah! That's it!";
        otaznik.textContent = number;
        document.body.style.backgroundColor = "#60b347"; //-- uhodnuté číslo se vypíše místo otazníku a pozadí zezelená
        //-- skóre se uloží do "Highscore", pokud je vyšší jak dosavadní highscore
        if(score > highScoreText.textContent){
            highScore = score;
            highScoreText.textContent = highScore;
        }
    }
    else if(Number(guessOkno.value) > number){
        text.textContent = "Too high!";
        score = score - 1;              //-- s neuhodnutým číslem se skóre snižuje
        scoreText.textContent = score;
    }
    else if(Number(guessOkno.value) < number){
        text.textContent = "Too low!";
        score = score - 1;              //-- s neuhodnutým číslem se skóre snižuje
        scoreText.textContent = score;
    };
}
    else{
        alert("Neplatné číslo!");
    }
});

//-- tlačítko Again! začíná novou hru, highscore zůstává
again.addEventListener("click", function(){
    number = Math.trunc(Math.random()*20)+1;
    score = 20;
    scoreText.textContent = score;
    text.textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    otaznik.textContent = "?";
    guessOkno.value = " ";
})


