; (function ($, window, document, undefined) {

        'use strict';

    // Common objects
    var $window = $(window),
        $document = $(document),
        $body = $(document.body),
        trackNumber = "",
        JumpandJam = JumpandJam || {};



    /** 
    * Initialisation (DOM ready)
    * When the page is ready to be acted upon, initialise our global methods 
    */
    $document.ready(function () {

        JumpandJam.initialise();

    });

    JumpandJam.initialise = function () {

        this.trackPlayer();

        if ($body.hasClass('game')){
            this.preloadGame();
        }
        else{
            console.log('failed');
        }

    };

    JumpandJam.trackPlayer = function () {


        // what track has been selected
        $('.track-listing li').on('click', function(){

            console.log($(this).attr('data-track'));

            //save track in variable
            trackNumber = $(this).attr('data-track');
            console.log(trackNumber);

            window.location = 'game-screen.html?track=' + trackNumber;
        });


        //$('audio-mp3').attr('src', '$trackNumber');
    };

    /**
     * Function preloads the game
     */
    JumpandJam.preloadGame = function() {
        /*var self = this;

        this.elems.$loadingBar.animate({
            'width': 430
        }, 8000, function() {
            $body.removeClass('loading');
            $('#loading-mask').fadeOut('600');

        });*/

        console.log('ran preload');

        var qs = (function(a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i)
            {
                var p=a[i].split('=');
                if (p.length != 2) continue;
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));

        var trackPath = qs["track"];

        if (trackPath = "track1"){
            $('iframe#track').attr('src', 'track1.html');
        }
        else if (trackPath = "track2"){
            $('iframe#track').attr('src', 'track1.html');
        }
        else if (trackPath = "track3"){
            $('iframe#track').attr('src', 'track1.html');
        }
        else if (trackPath = "track4"){
            $('iframe#track').attr('src', 'track1.html');
        }
        else if (trackPath = "track5"){
            $('iframe#track').attr('src', 'track1.html');
        }


        


    };

    


    window.JumpandJam = JumpandJam;

    } (jQuery, this, this.document));