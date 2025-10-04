function goNext( nowHref ) {
    fetch(chrome.runtime.getURL('assets/links.txt'))
        .then(response => response.text())
        .then(text => {
            chrome.storage.local.get("nowLinkNum", (data) => {
                if (data.nowLinkNum === undefined) {
                    chrome.storage.local.set( {"nowLinkNum" : 0} )
                    data.nowLinkNum = 0
                }
                window.location.href = text.split("\n")[data.nowLinkNum]
                chrome.storage.local.set( {"nowLinkNum" : data.nowLinkNum +1} )
            })
        })
        .catch(err => console.error(err));
}