function goNext( nowHref ) {
    fetch(chrome.runtime.getURL('data/sample.txt'))
        .then(response => response.text())
        .then(text => {
            chrome.storage.local.get("nowLinkNum", (data) => {
                window.location.href = text.split("\n")[data.nowLinkNum]
                chrome.storage.local.set( {"nowLinkNum" : data.nowLinkNum +1} )
            })
        })
        .catch(err => console.error(err));
}