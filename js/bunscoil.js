var bot;
var downSmall = false;
var downNav = false;
var audioPlayer;
var connemara;
var donegal;
var kerry;
var nameInput;
var bot;
var inputNameAndDialect;
var thisFile;
var request = new XMLHttpRequest();

var vocabInput;
var vocabOuter;
var spellingWords = [];

function nextPage(file){
  request.open('POST', 'http://localhost:4001/storeFile/' + file, true);
  request.send();
  window.location = "taidghin_bot.html";
}

function showWordsInput(){
  vocabInput = document.querySelector(".inputVocab");
  vocabOuter = document.querySelector(".vocabOuter");
  vocabInput.style.display = "flex";
  vocabOuter.style.display = "flex";
  setTimeout(function(){
    vocabInput.style.opacity = "1";
    vocabOuter.style.opacity = "0.5";
  }, 100);
  request.open('POST', 'http://localhost:4001/storeFile/' + "spelling", true);
  request.send();
}

function enterWords(){
  if(document.querySelector(".word10").value == ""){
    var warning = document.querySelector(".warning");
    warning.style.display = "flex";
  }
  else{
    var newWords = [];
    for(i = 1; i < 11; i++){
      var word = document.querySelector(".word" + i).value;
      newWords.push(word);
    }
    request.open('POST', 'http://localhost:4001/storeWords/', true);
    request.setRequestHeader( "Content-Type", "application/json" );
    request.send(JSON.stringify(newWords));
    window.location = "taidghin_bot.html";
  }
}

function closeWords(){
  var warning = document.querySelector(".warning");
  warning.style.display = "none";
  vocabInput.style.opacity = "0";
  vocabOuter.style.opacity = "0";
  setTimeout(function(){
    vocabInput.style.display = "none";
    vocabOuter.style.display = "none";
  }, 1000);
}

function setup(){
  //window.location.href = "taighin_bot.html";
  //load("dathanna");
  var vid = document.getElementById("monkey-vid");
  var input = document.querySelector(".user_input");
  var userMessage = document.getElementById("user-message");
  var button = document.querySelector(".message-button");
  audioPlayer = document.querySelector(".player");
  var dropdown = document.getElementById("dropicon");
  bot = document.querySelector(".bot-body");
  inputNameAndDialect = document.querySelector(".inputNameAndDialect");

  $("form").on("submit", (event) => {
    event.preventDefault();
  });


  connemara = document.querySelector("#dialectCheckConnemara");
  donegal = document.querySelector("#dialectCheckDonegal");
  kerry = document.querySelector("#dialectCheckKerry");
  nameInput = document.querySelector(".nameInput");


  if(dropdown){
    dropdown.addEventListener("click", function(){
      var dropmenu = document.querySelector(".dropdown");
      if(downSmall == false){
        dropmenu.style.top = "45px";
        downSmall = true;
        return;
      }
      if(downSmall == true){
        dropmenu.style.top = "-500px";
        downSmall = false;
        return;
      }
    });
  }
}

function storeName(){
  $("form").on("submit", (event) => {
    event.preventDefault();
  });
  userName = nameInput.value;
  var slName = searchNames(userName);
  if(slName) userName = slName;
  console.log(userName);
  loadBot();
  return "";
}

function loadBot(){
  if(thisDialect && userName){
    inputNameAndDialect.style.opacity = "0";
    setTimeout(function(){
      inputNameAndDialect.style.display = "none";
      bot.style.display = "block";
      request.open('GET', 'http://localhost:4001/getFile/', true);
      request.send();
      request.onload = function(){
        load(this.response);
      }
    }, 500);
  }
}

//loads file chosen by the user
function load(fileId, start){
  console.log("To Load: " + fileId);
  for(i = 0; i < files.length; i++){
    if(fileId == files[i].id){
      console.log(files[i].id + " " + files[i].file);
      bot = new RiveScript({utf8: true});
      bot.loadFile(files[i].file).then( () => {
        bot.sortReplies();
        console.log(fileId + " loaded");
        if(start != null) chatSetup(start);
        else chatSetup("start");
      });
    }
  }
  keepMessages = false;
}

function loadFromChat(fileId, start){
  console.log(fileId);
  load(fileId, start);
}

function chatSetup(input, holdMessage){
  var output = document.getElementById("output");
  if(holdMessage == "true" || holdMessage == true){
    audioPlayer.addEventListener("ended", function(){
      bot.reply("local-user", input).then((reply) => {
        //console.log(reply);
        $("#output").delay(200).fadeOut("fast", function(){
          output.innerHTML = reply;
          audio(reply);
          $("#output").delay(500).fadeIn("fast");
        });
      });
    });
  }
  else{
    var output = document.getElementById("output");
    bot.reply("local-user", input).then((reply) => {
      //console.log(reply);
      $("#output").delay(200).fadeOut("fast", function(){
        output.innerHTML = reply;
        audio(reply);
        $("#output").delay(500).fadeIn("fast");
      });
    });
  }
  return "";
}

function chat(){
  $("form").on("submit", (event) => {
    event.preventDefault();
  });
  var input = document.querySelector(".user_input");
  var userMessage = document.getElementById("user-message");
  var userInput = "";
  var newOutput = "";
  var output = document.getElementById("output");
  if(input.value != ""){
    userMessage.innerHTML = input.value;
    userInput = input.value;
    input.value = "";
    bot.reply("local-user", userInput).then((reply) => {
      //console.log(reply);
      $("#output").delay(200).fadeOut("fast", function(){
        output.innerHTML = reply;
        audio(reply);
        $("#output").delay(500).fadeIn("fast");
        $("#bot-message").animate({ scrollTop: $("#bot-message")[0].scrollHeight }, 200);
      });
    });
  }
  return "";
}
