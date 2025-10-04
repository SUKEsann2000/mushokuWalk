chrome.storage.local.get({ Links: [] }, function(result) {
    let ul = document.createElement("ul");
    ul.id = "mushokuWalkLinksList";
    
    document.getElementById("links").appendChild(ul);

    result.Links.forEach(function(link, index) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = link;
        a.textContent = link;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    });
});