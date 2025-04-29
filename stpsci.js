alert("Player 1 is You and Player 2 is Computer\n Press OK to start the Game");
let userScore =0;
let compScore =0;

let options = document.querySelectorAll(".options");
let userScore1 = document.querySelector(".userScore");
let compScore1 = document.querySelector(".compScore");
let msg = document.querySelector(".msg");

let option =["rock" , "paper" , "scissor"]; 
const computerOptions=()=>{
   
let value = Math.floor(Math.random()*3);
// console.log(value);
return( option[value]);



};

// computerOptions();

const showWinner=(useroptionID ,compOption)=>{
if(useroptionID === compOption){
    console.log("a tie");
    msg.innerHTML=`Your choice ${useroptionID} and  Computer choice ${compOption} is Tie `;
    msg.style.backgroundColor =  "#FD9B63";
    
}else{
    // 
    if(compOption=="rock" && useroptionID === "scissor"){
                // console.log("comp won the game");
                compScore++;
                compScore1.innerHTML =` Computer Score: ${compScore}`;
                // compScore1.style.backgroundColor="red";
                msg.innerHTML="You Lost , Computer Won game !";
                msg.style.backgroundColor =  "red";
             
    } else if (compOption==="paper" && useroptionID=="rock"){
        compScore++;
                // compScore1.innerHTML =compScore;
                compScore1.innerHTML =` Computer Score: ${compScore}`;
                // compScore1.style.backgroundColor="red";
            msg.innerHTML="You Lost , Computer Won game !";
            msg.style.backgroundColor =  "red";
        }
    else if (compOption=="scissor" && useroptionID=="paper"){
        compScore++;
                // compScore1.innerHTML =compScore;
                compScore1.innerHTML =` Computer Score: ${compScore}`;
                // compScore1.style.backgroundColor="red";
                
                msg.innerHTML="You Lost , Computer Won game ! ";
                msg.style.backgroundColor =  "red";
            }
    else {userScore++; 
        userScore1.innerHTML=`Your Score: ${userScore}`;
        // userScore1.style.backgroundColor="#06D001";
                    msg.innerHTML = "You won, Computer lost !";
                    msg.style.backgroundColor =  "#6EC207";
                }    
}
};

const playGame =(useroptionID)=>{
console.log("user option = " , useroptionID);
// computer ka chance 
const compOption = computerOptions();
console.log("comp option = " , compOption);

showWinner(useroptionID,compOption);

};


options.forEach((option) => {
    // console.log(option);
option.addEventListener("click" , () => { 
const useroptionID = option.getAttribute("id") ; 
console.log("option is clicked" , useroptionID); 
playGame(useroptionID);
});

});





