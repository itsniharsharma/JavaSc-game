// 1) declaring majorChice, if in HTML, identifyed by class, and here accessed by .getElementByClass("majorChoice"), nothing is shown in developer console?
//    insted if declared as id="majorChoice", and accessed as .getElementById("majorChoice"), its onkeydown. Logic?



//2) I gave borders to msg box, when at win it grrens its color it only change backgnd color, what about border?








let userScore=0;
let compScore=0;

//now access all the divs we want

const majorChoice=document.getElementById("majorChoice")        //parentDiv     
const minorChoice=majorChoice.querySelectorAll(".minorChoice");  //assessing all childrenDiv
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

// above id and classes are to be changed while event happens.





//---------------------------------------------------------------  1.0

minorChoice.forEach((element)=>{
    //adding event listener
    element.addEventListener("click",()=>{
        let userChoice=element.getAttribute("id");
        // console.log(userChoice); //toggle to see in devConsole

        playGame(userChoice);  //developing this function
    });
});

//---------------------------------------------------------------






//----------------------------------------------------------- 1.1

let genCompChoice=()=>{
     let optionArray=["rock","paper","scissors"];
     //generating a random numb between 0->2
     const rndIdx=Math.floor(Math.random()*3);
     return optionArray[rndIdx];
}

//-----------------------------------------------------------




//------------------------------------------------------------- 2

let drawGame=()=>{
        console.log("Game is Drawn");
        msg.style.backgroundColor="rgb(244, 242, 110)";
        msg.innerText="Game is Drawn";
}

//------------------------------------------------------------




//------------------------------------------------------------- 3

let playGame=(userChoice)=>{   //takes userChoice as a parameter
    console.log("user selected", userChoice);
    
    let compChoice=genCompChoice();
    console.log("comp selected",compChoice);

    let userWin=true;

    //comparison:

    if(compChoice==userChoice){
        drawGame();

    } else{ 

        let userWin=true;
        
        if(userChoice=="rock"){
          //comp-> paper/scissors
          userWin= compChoice=="paper"? false : true;

    } else if(userChoice=="paper"){
          //comp-> rock/scissors
          userWin= compChoice=="rock"? true : false;

    } else {
        //comp-> rock/paper
        userWin= compChoice=="paper"? true : false;
    }

     showWinner(userWin);  // constructing this function

   } 
}

//-------------------------------------------------------------




//---------------------------------------------------------- 4

let showWinner=(userWin)=>{     //take userWin as parameter

    if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
       console.log("You Win!");
       msg.innerText="You Win!";
       msg.style.backgroundColor="rgb(114, 227, 145)";
    

    } else{
       compScore++;
       compScorePara.innerText=compScore;
       console.log("You Loose!");
       msg.innerText="You Loose! please try again";
       msg.style.backgroundColor="rgb(255, 138, 138)";
    }
}

//----------------------------------------------------------





