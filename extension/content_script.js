/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    alert("sent from tab.id=", sender.tab.id);
});*/

chrome.runtime.sendMessage({action: "tab_change"}, function(response) {
  console.log(response.message);
});