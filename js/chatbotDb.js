var request = new XMLHttpRequest();
var date = null;
var topic = "";
var messages = [];
var logToAdd = {date: null, topic: "", conversation: []};

//build conversation with array of message objects, then add to logs in db when a new topic is started
function makeMessageObj(isUser, text){
  if(currentTopic) logToAdd.topic = currentTopic;
  date = new Date().toISOString();
  var newMessage = {date: date, isUser: isUser, text: text};
  if(newMessage.text != "") messages.push(newMessage);
}

function sendLogToDb(){
  console.log(messages);
  logToAdd.date = new Date().toISOString();
  logToAdd.conversation = messages;
  postLogToDb(logToAdd);
  messages = [];
  return "";
}

//add log to db
function postLogToDb(logObj){
  if(logObj){
    console.log(logObj);
    request.open('POST', 'http://localhost:4001/addLog', true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(logObj));
    request.onload = function(){
      console.log(this.response);
    }
  }
}
