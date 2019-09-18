chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "content.js"
  }, function() {
    if (chrome.runtime.lastError) {
      message.innerText = 'ohhhh snap : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;
