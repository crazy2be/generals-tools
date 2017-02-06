chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-main-prod-v14.0.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-main-prod-v14.0.js"]
}, ["blocking"]);
