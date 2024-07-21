# javaSc-game

Explaining framework:  <br>
- Aim to enrish the basic concepts of JS <br>

Above code depicts basic construction of a Rock-Paper-Scissor game. <br>
Dividing framework in 4 parts:
 - The structure: HTML
 - It's Styling : style.css
 - Logical operations: logic.js
 - newimg/All the images used

<br>

-----------------------------------------------------------------------------
HTML: for the ease of construction, we divide entire stuff in 4 zones

 - #Heading
 - div#majorChoice
      -div.minorChoice*3-------> # rock,paper,scissor
         -img
 - div.score-board
   
      -div.score---------> # user-score, comp-score

 - div.msg-container
     - mgs
--------------------------------------------------------------------------------

<br>


---------------------------------------------------------------------------------
Logics.js:

- initialized userScore, compScore=0
- to work in JS, accessed divs through document.getElementById() for #
                                       className.querySelector() for any #/.its flexible

- Changing elemets are:
   1) majorChoice
   2) minorChoice
   3) msg
   4) user-score
   5) comp-score

- minorChoice.forEach() will traverse over all children dives in this class with a 
  parameter "element"
- Element is attached with an eventListener, subjecting each div, which when once 
  clicked performs a function ()=>{  <br>
      - so, user clicked a div either rock, paper or scissor <br>
      - storing users responce once div is clicked <br>
      - let userChoice = element(parameter which is subjecting that div).getAttribute("id"); <br>
      - Id/class are the attributes. <br>
      - putting userChoice in a function <br>
      - playGame(userChoice); <br>
   }
      













