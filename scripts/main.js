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

    };

    /**
     * Function preloads the game
     */
    JumpandJam.preloadGame = function() {

        var gameInit = {

            init: function() {
                /*document.getElementById('voiceover').play();*/
                $('.counter3').fadeIn(500, function() { $(this).delay(1500).fadeOut(300); });
                $('.counter2').delay(2500).fadeIn(500, function() { $(this).delay(1500).fadeOut(300); });
                $('.counter1').delay(5000).fadeIn(500, function() { $(this).delay(1500).fadeOut(290); });
                $('#loading-mask').delay(8000).fadeOut('300');

                this.playSong();
            },

            playSong: function(){

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
                    //$.playSound('assets/track1.mp3');
                }
                else if (trackPath = "track2"){
                    //$.playSound('assets/track1.mp3');
                }
                else if (trackPath = "track3"){
                    //$.playSound('assets/track1.mp3');
                }
                else if (trackPath = "track4"){
                    //$.playSound('assets/track1.mp3');
                }
                else if (trackPath = "track5"){
                    //$.playSound('assets/track1.mp3');
                }


                //document.getElementById('track1').play();
                /*var ifr=document.createElement("iframe");
                    ifr.setAttribute('src', "assets/track1.mp3");
                    ifr.setAttribute('width', '1px');
                    ifr.setAttribute('height', '1px');
                    ifr.setAttribute('scrolling', 'no');
                    ifr.style.border="0px";
                document.body.appendChild(ifr);*/

                (function () {
                    var $inner = $('.speaker-1'),
                        $inner2 = $('.speaker-2'),
                        $outer = $('.speaker-3');

                    setInterval(function () {
                        $inner2.delay(150).fadeTo(1000, 1, function() {
                            $(this).fadeTo(500, 0.2);
                        });
                        $outer.delay(300).fadeTo(1000, 1, function() {
                            $(this).fadeTo(500, 0.1);
                        });
                    }, 1750);
                }());
                this.sound();
                this.endScreen();
            },

            sound: function(){
                document.addEventListener('touchstart', function () {
                    document.getElementsByTagName('audio')[0].play();
                });


            },

            endScreen: function(){
                $('#result-mask').delay(65000).fadeIn('400'), function(){
                    var ResultScore = $('myResult');
                    document.addEventListener('touchstart', function () {
                        document.getElementsByTagName('audio')[0].pause();
                    });
                };
            }
        };

        gameInit.init();

    };

    window.JumpandJam = JumpandJam;


    } (jQuery, this, this.document));
