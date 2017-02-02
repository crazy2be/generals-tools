chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-main-prod-v13.0.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-main-prod-v13.0.js"]
}, ["blocking"]);
