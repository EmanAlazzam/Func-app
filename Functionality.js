confirm("WELCOME TO MY MIND GAME!");


function wordGussingB(gameM){
    for (var e=0; e<1;e++){
    alert("Heres a HINT it is type of sport");
    var gameAA= prompt("ENTER THE WORD");
    if(gameAA==="baseball"){
    alert("YOUR GUSS is RIGHT! :)");
    
} 
    else {
        alert("YOU ENTERED A WRONG WORD!!");
        e--;
    }
}}

function wordGussingApple(gameM)
{
    for (var j=0; j<1;j++){
alert("Here is a HINT it is type of fruit");
var gameA= prompt("ENTER THE WORD");
var gameAA=gameA.toLowerCase();
if(gameAA=="apple"){
    alert("YOU GUSS RIGHT! :)");} 
else {
    alert("YOU ENTERED A WRONG WORD!!");
    j--;
}
}
}



for (var i=0; i<1;i++){
    var gameM= prompt("Guss What Word we wrote, it starts with these characters [a b]! :)");
if (gameM=='a') {
    wordGussingApple(gameM);
    

}else if (gameM=='b'){
    wordGussingB(gameM); }
    else {
    alert("YOU ENTERED A WRONG CHARACTER!!");
i-=1;
}

}




