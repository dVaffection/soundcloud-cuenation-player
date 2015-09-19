'use strict';

require(
    {
        baseUrl: chrome.extension.getURL("/"),
        paths:   {
            "soundcloud-sdk": [
                'https://connect.soundcloud.com/sdk-2.0.0',
                'https://connect.soundcloud.com/audiomanager/audiomanager.js'
            ]
        }
    },
    [
        'soundcloud-sdk'
    ],
    function (_) {
        console.log('SoundCloud background', SC);

        SC.initialize({
            client_id: '9f2422341aeee41f4ab18bd9dc9d0234'
        });

        SC._baseUrl = 'https:' + SC._baseUrl;

        console.log(SC._baseUrl);

        //SC.get('https://api.soundcloud.com/users/user486627426/tracks', {limit: 1}, function(tracks){
        //    var track = tracks[0];
        //    console.log(tracks);
        //});
        //

        // https://api.soundcloud.com/users/pauloakenfold/tracks
        SC.stream('https://api.soundcloud.com/users/pauloakenfold/tracks', function(sound){
            console.log(sound);
            sound.play();
        });

        //SC.whenStreamingReady(function() {
        //    console.log('whenStreamingReady');
        //    var sound = SC.stream(52933447);
        //    sound.setPosition(2000); // position, measured in milliseconds
        //    sound.play();
        //});

        //chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        //    if ("trackPageview" === request.ga) {
        //        ga.trackPageview();
        //    }
        //});

    });