var html;

function getHtml(url, onLoad, onError) {
	var x = new XMLHttpRequest();
	x.open('GET', url);
	//x.open('GET', "https://localhost:5000/user/nbtk123");
	// The Google image search API responds with JSON, so let Chrome parse it.
	x.responseType = 'text';
	x.onload = function() {
		onLoad(x.response);
	};
	x.onerror = function() {
		onError();
	};
	x.send();
}

document.addEventListener('DOMContentLoaded', function() {
	if (html === undefined) {
		var url = chrome.runtime.getURL("react/my-app/build/index.html");
		getHtml(url,
			function(res) {
				alert(document.getElementById("content").innerHTML);
				document.getElementById("content").innerHTML=res;
			},
			function() {
			}
		);
	} else {
		
	}
});