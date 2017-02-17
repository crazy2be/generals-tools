chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-main-prod-v15.1.5.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-main-prod-v15.1.5.js"]
}, ["blocking"]);
