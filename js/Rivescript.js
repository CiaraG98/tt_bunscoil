var files = [
  {id: 'dathanna', file: "rive/dathanna.rive"},
  {id: 'spelling', file: "rive/spelling.rive"},
];

var userName;
var botName = "Taidhgín";
var progress = 0;
var currentQuestion;
var prevQuestion = -1;
var wrongCount = 0;
var answer2;
var answeringQuestions = false;
var isLevelComplete = false;
var isQuizComplete = false;
var quiz = false;
var quizScore = 0;
var quizProgress = 0;

var ainmneacha = [];
var feirm = [];
var gairdin = [];
var bailemor = [];
var saBhaile = [];
var fiaine = [];
var beileDeas = [];
var bia = [];
var ceoil = [];
var eadai = [];
var siopa = [];
var anPhairc = [];
var outAbout = [];
var aimsir = [];
var corp = [];
var ealain = [];
var cruthanna = [];
var seasuir = [];

var request = new XMLHttpRequest();


function searchNames(name){
  var slenderName;
  for(i = 0; i < ainmneacha.length; i++){
    if(name == ainmneacha[i].ainm){
      slenderName = ainmneacha[i].slender;
      localStorage.setItem("name", slenderName);
    }
  }
  return slenderName;
}

function getName(){
  return userName;
}

function getBotName(){
  if(botName) return botName;
}

function clearName(){
  localStorage.removeItem("name");
  userName = "";
}

function isNameStored(){
  if(localStorage.getItem("name")) return true;
  else return false;
}

function askName(){
  var greeting = "Dia Dhuit! Is mise " + getBotName() + ". ";
  var askNames = ["Cén t-ainm atá ort?", "Cad is ainm duit?", "Cé thú féin?", "Cad a thabharfaidh mé ort?"];
  var ran = getRandomIntInclusive(0, askNames.length - 1);
  return greeting + askNames[ran];
}

function getProgress(){
  //if(isLevelComplete == true && quiz == false) return "";
  if(isQuizComplete == true) return "";
  else return "<br>Scór: " + progress + ".<br>";
}

function resetProgress(){
  progress = 0;
  return "";
}

function getCurrentAnswer(){
  console.log(currentQuestion.answer);
  return currentQuestion.answer;
}

function triailAris(){
  var rep = ["Féach ar an gceann seo arís, a ", "Beagnach ceart ach féach arís air, a "];
  var ran = getRandomIntInclusive(0, rep.length - 1);
  return rep[ran] + getName() + "."
}

function getCrioch(){
  var crioch = ["Maith thú, a " + getName() + ", sin deireadh leis an gcleachtadh anois!", "Fágfaidh mé slán anseo agat! Bhí sé go deas bheith ag caint leat, a " +
  getName(), "Slán go fóill, a " + getName() + ". Beimid ag caint arís tá súil agam.", "Bhí sé go deas bheith ag caint leat. Más maith leat cleachtadh eile a dhéanamh téigh go dtí an leathanach baile."];
  var ran = getRandomIntInclusive(0, crioch.length - 1);
  return crioch[ran];
}

function getRandomReply(){
  //if(isLevelComplete == true && quiz == false) return "";
  if(isQuizComplete == true) return "";
  var reply = "Maith thú, a " + getName() + ". ";
  var reply2 = "An ceart ar fad agat, a " + getName() + ". ";
  var reply3 = "Sin agat é, a " + getName() + ". ";
  var reply4 = "An mhaith ar fad!"
  var replies = [reply, reply2, reply3, reply4];
  var i = getRandomIntInclusive(0, replies.length-1);
  return replies[i];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function changeProgress(sign){
  if(sign == "+"){
    progress++;
    if(progress == 5){
      isLevelComplete = true;
      //console.log("level complete");
    }
    if(quiz) quizScore++;
  }
  if(quiz) {
    if(quizProgress == abairQuiz.length - 1){
      isQuizComplete = true;
      chatSetup("quizcomplete");
    }
    console.log("quiz: " + quizScore);
  }
  return "";
}

var colours = [
  {question: "<img src=\"./img/yellow.jpg\" class=\"rive-colourimg\">", answer: "buí"},
  {question: "<img src=\"./img/green.jpg\" class=\"rive-colourimg\">", answer: "glas"},
  {question: "<img src=\"./img/orange.png\" class=\"rive-colourimg\">", answer: "oráiste"},
  {question: "<img src=\"./img/purple.jpg\" class=\"rive-colourimg\">", answer: "corcra"},
  {question: "<img src=\"./img/blue.png\" class=\"rive-colourimg\">", answer: "gorm"},
  {question: "<img src=\"./img/red-square-md.png\" class=\"rive-colourimg\">", answer: "dearg"},
];
var prevColor = -1;

var spellingWordsUsed = [];
var currentWord = "";

function getRandom(array){
  var ran;
  if(isLevelComplete == false){
    if(array != spellingWords){
      ran = getRandomIntInclusive(0, array.length - 1);
      if(prevColor == ran){
        ran = getRandomIntInclusive(0, array.length - 1);
      }
      prevColor = ran;
      currentQuestion = array[ran];
      array.splice(ran, 1);
      if(array.length == 0) isLevelComplete = true;
      return currentQuestion.question;
    }
    else if(array == spellingWords){
      ran = getRandomIntInclusive(0, array.length - 1);
      spellingWordsUsed.push(spellingWords[ran]);
      currentWord = spellingWords[ran];
      console.log(currentWord);
      var wordToReturn = "<p style=\"display:none\">" + spellingWords[ran] + "</p>";
      spellingWords.splice(ran, 1);
      if(spellingWords.length == 0){
        isLevelComplete = true;
      }
      return wordToReturn;
    }
  }
  return "";
}

function getWords(){
  request.open('GET', 'http://localhost:4001/getWords/', true);
  request.send();
  request.onload = function(){
    spellingWords = JSON.parse(this.response);
  }
  return "";
}
