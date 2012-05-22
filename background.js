function check(tabId, changeInfo, tab) {
    var url = "https://docs.google.com/presentation/";
    if(tab.url.substring(0, url.length) === url) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(check);