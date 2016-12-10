function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

var url_to_reminder = {
	"https://www.facebook.com/" : ["publish your github to coworkers"]
}

// waiting for a 'tab_change' message from the content script, which is activated on every tab URL change, including openning a new tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "tab_change") {
		sendResponse({message: request.action+" received."});
		getCurrentTabUrl(function(url) {
			if(url_to_reminder[url]) {
				alert(url_to_reminder[url]);
			}
		});
	} else {
		consolge.log("request.action error");
	}
});