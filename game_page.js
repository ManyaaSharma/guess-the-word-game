player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;
function send (){
getword=document.getElementById("word").value;
word=getword.toLowerCase();
console.log (word);
letter1=word.charAt(1);
console.log (letter1); 

middleno=Math.floor(word.length/2);
letter2=word.charAt(middleno);
console.log (letter2);

lastno=word.length-1;
letter3=word.charAt(lastno);
console.log (letter3);

word1=word.replace(letter1,"_");
word2=word1.replace(letter2,"_");
word3=word2.replace(letter3,"_");

question="<h4 id='word_display'>Q: "+word3+"</h4>";
input="<br>answer: <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question + input + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML="";
}

questionTurn="player1";
answerTurn="player2";

function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log (answer);
if (answer==word) {
    if (answerTurn=="player1") {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;

    }
    else {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        
    }
}
if (questionTurn=="player1") {
    questionTurn="player2";
    document.getElementById("player_question").innerHTML="Question turn- "+player2_name;
}
else {
    questionTurn="player1";
    document.getElementById("player_question").innerHTML="Question turn- "+player1_name;
}
if (answerTurn=="player1") {
    answerTurn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;
}
else {
    answerTurn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
}
document.getElementById("output").innerHTML="";
}