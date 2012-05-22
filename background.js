function check(tabId, changeInfo, tab) {
    var url = "https://docs.google.com/presentation/";
    if(tab.url.substring(0, url.length) === url) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(check);

var state_active = false;
chrome.pageAction.onClicked.addListener(function(tab) {
    state_active = !state_active;
    var path_dict = {false: "icon_default.png", true: "icon_active.png"};
    var path = path_dict[state_active];
    chrome.pageAction.setIcon({
        "tabId": tab.id,
        "path": path
    });
    if(state_active) {
        chrome.tabs.executeScript(null, {file: "pane_hide.js"});
    } else {
        chrome.tabs.executeScript(null, {file: "pane_show.js"});
    }
});
