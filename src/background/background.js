(function() {
    "use strict";

    /* globals chrome, unescape, keyvalDB, match, matchReplace */
    var logOnTab = function(tabId, message, important) {
		important = !!important;
		chrome.tabs.sendMessage(tabId, {
			action: "log",
			message: message,
			important: important
		});
    };

    chrome.webRequest.onBeforeRequest.addListener(function(details) {
		return {redirectUrl: chrome.extension.getURL("generals-bundle-prod-v11.0.unmin.js")};
    }, {
        urls: ["http://generals.io/generals-bundle-prod-v11.0.js"]
    }, ["blocking"]);

})(); // end script-wide closure
