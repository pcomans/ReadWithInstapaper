// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    if (!tab.url.match(/https?:\/\/(www\.)?instapaper\.com\/text\?/i)) {
        chrome.tabs.update(tab.id, {url: 'http://www.instapaper.com/text?u='+encodeURIComponent(tab.url)});
    }
});
