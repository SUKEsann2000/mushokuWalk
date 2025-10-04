function getLink(callback) {
    chrome.storage.local.get({ Links: [] }, function(result) {
        callback(result.Links);
    });
}
