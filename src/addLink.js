function addLink( href ) {
    chrome.storage.local.get( { Links : []}, function( result ) {
        let links = result.Links;
        links.push( href );
        chrome.storage.local.set( { Links : links } );
    } );
}