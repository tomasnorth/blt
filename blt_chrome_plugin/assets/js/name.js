 const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const message = urlParams.get('name')
function appendHtml(targetC, htmldata) {
    var theDiv = document.getElementById(targetC);
    theDiv.innerHTML = htmldata;
}
if(message.match(/^[0-9a-zA-Z?&]{1,16}$/)){
    appendHtml('message', "Howdy, " + message + ".");
}