chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-bundle-prod-v12.0.2.unmin.patched.js")};
}, {
	urls: ["http://generals.io/generals-bundle-prod-v12.0.2.js"]
}, ["blocking"]);
