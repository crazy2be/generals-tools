chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-main-prod-v12.1.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-main-prod-v12.1.js"]
}, ["blocking"]);
