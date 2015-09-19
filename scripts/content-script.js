'use strict';

require(
    {
        baseUrl: chrome.extension.getURL("/"),
        paths: {
            text: "scripts/text"
        }
    },
    [],
    function () {
        console.log('SoundCloud foreground');
    }
);