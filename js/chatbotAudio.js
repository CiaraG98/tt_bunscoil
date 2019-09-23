var request = new XMLHttpRequest();
var audio_reply = "";
var audioPlayer;
var audioCheckbox;
var male;
var female;
var connemara;
var kerry;
var donegal;
var bubbleObjArr = [];
var thisId = 0;
var duration;
var isPlaying = false;
var thisDialect = "";
var thisGender = "";
var isPlaying = false;

//sets up for messages to be edited and urls to be called
function audio(newReply, id, isUser){
  audio_reply = newReply;
  var bubbleText = "";
  editMessageForAudio();
  if(inp != ""){
    for(i = 0; i < inp.length; i++){
      if(inp[i].indexOf("img") == -1) bubbleText = bubbleText.concat(inp[i], ".");
    }
    if(bubbleText != ""){
      testCallAudio(bubbleText);
    }
  }
}

//edits messages to be played & adds them to array
function editMessageForAudio(){
  inp = [];
  var inputString = audio_reply;
  var index = inputString.indexOf("Ceist:");
  var j = 0;
  var length;
  if(inputString.indexOf("<p") != -1){
    var i = inputString.indexOf("<");
    var j = inputString.indexOf(">");
    inputString = inputString.replace("<p style=\"display:none\">", "");
    inputString = inputString.replace("</p>", "");
    inp.push(inputString);
    return;
  }
  else{
    for(i = 0; i < inputString.length; i++){
      if(inputString[i] == "." || inputString[i] == ":" || inputString[i] == "?" || inputString[i] == "!"){
        length = i - j;
        var newString = inputString.substr(j, length);
        //console.log(newString);
        j = i + 1;
        if(newString != "ERR" || newString != " ")
          inp.push(newString);
      }
    }
    var currentSentence;
    for(i = 0; i < inp.length; i++){
      currentSentence = inp[i];
      //console.log(currentSentence);
      for(j = 0; j < currentSentence.length; j++){
        indexOf1 = currentSentence.indexOf("<b>");
        indexOf2 = currentSentence.indexOf("<i>");
        indexOf3 = currentSentence.indexOf("</b>");
        indexOf4 = currentSentence.indexOf("</i>");
        indexOf5 = currentSentence.indexOf("<br>");
        indexOf6 = currentSentence.indexOf("-");
        if(indexOf1 != -1){
          inp[i] = inp[i].replace("<b>", "");
        }
        if(indexOf2 != -1){
          inp[i] = inp[i].replace("<i>", "");
        }
        if(indexOf3 != -1){
          inp[i] = inp[i].replace("</b>", "");
        }
        if(indexOf4 != -1){
          inp[i] = inp[i].replace("</i>", "");
        }
        if(indexOf5 != -1){
          inp[i] = inp[i].replace("<br>", "");
        }
        if(indexOf6 != -1){
          inp[i] = inp[i].replace("-", "");
        }
      }
    }
  }
}

function testCallAudio(testString){
  console.log(testString);
  var messageBubble = {text: testString, dialect: ""};
  if(thisDialect == "connemara") messageBubble.dialect = "CM";
  else if(thisDialect == "donegal") messageBubble.dialect = "GD";
  else if(thisDialect == "kerry") messageBubble.dialect = "MU";

  request.open('POST', 'http://localhost:4001/getAudio', true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(messageBubble));
  request.onload = function(){
    //console.log(JSON.parse(this.response).html[0][0]);
    var bubbleUrl =JSON.parse(this.response).audio[0];
    playAudio(bubbleUrl);
  }
}

//plays audio
function playAudio(url){
  if(url){
    audioPlayer.src = url;
    var playPromise = audioPlayer.play();
    if(playPromise !== undefined){
      playPromise.then(_ => {
      }).catch(error => {
        console.log(error);
      });
    }
  }
}

function dialectSelect(checkbox){
  if(checkbox) thisDialect = checkbox;
  if(checkbox == "connemara"){
    kerry.checked = false;
    donegal.checked = false;
  }
  else if(checkbox == "kerry"){
    connemara.checked = false;
    donegal.checked = false;
  }
  else if(checkbox == "donegal"){
    connemara.checked = false;
    kerry.checked = false;
  }
  if(connemara.checked == false && kerry.checked == false && donegal.checked == false) thisDialect = "";
}
