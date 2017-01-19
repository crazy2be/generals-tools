chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl: chrome.extension.getURL("generals-bundle-prod-v11.0.unmin.js")};
}, {
	urls: ["http://generals.io/generals-bundle-prod-v11.0.js"]
}, ["blocking"]);
