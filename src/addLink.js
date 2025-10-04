function addLink( href ) {
    chrome.storage.local.get( { Links : []}, function( result ) {
        let links = result.Links;
        if ( links.includes(href) ) return;
        links.push( href );
        chrome.storage.local.set( { Links : links } );
    } );
}