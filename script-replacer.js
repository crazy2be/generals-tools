chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-main-prod-v13.1.1.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-main-prod-v13.1.1.js"]
}, ["blocking"]);
