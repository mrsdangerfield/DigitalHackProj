; (function ($, window, document, undefined) {

        'use strict';

    // Common objects
    var $window = $(window),
        $document = $(document),
        $body = $(document.body),
        JumpandJam = JumpandJam || {};

    /** 
    * Initialisation (DOM ready)
    * When the page is ready to be acted upon, initialise our global methods 
    */
    $document.ready(function () {

        JumpandJam.initialise();

    });

    JumpandJam.initialise = function () {

        this.counter();

    };

    JumpandJam.counter = function () {

        //fix device orientation

        //listen for motion
        /*window.addEventListener('devicemotion', function (e) {
            ax = e.accelerationIncludingGravity.x * sensitivity;
            ay = -e.accelerationIncludingGravity.y * sensitivity;
        }, false);*/

        var count=0;
        if(window.DeviceOrientationEvent){
            document.getElementById("doEvent").innerHTML="DeviceOrientation";
            window.addEventListener('deviceorientation',function(eventData){
                var tiltLR=eventData.gamma;
                var tiltFB=eventData.beta;
                var dir=eventData.alpha
                deviceOrientationHandler(tiltLR,tiltFB,dir);},false);
        }
        else{
            document.getElementById("doEvent").innerHTML="Not supported on your device or browser.  Sorry."}
        }
        function deviceOrientationHandler(tiltLR,tiltFB,dir){
            document.getElementById("doTiltLR").innerHTML=Math.round(tiltLR);
            document.getElementById("doTiltFB").innerHTML=Math.round(tiltFB);
            document.getElementById("doDirection").innerHTML=Math.round(dir);
            //var logo=document.getElementById("imgLogo");logo.style.webkitTransform="rotate("+tiltLR+"deg) rotate3d(1,0,0, "+(tiltFB*-1)+"deg)";logo.style.MozTransform="rotate("+tiltLR+"deg)";logo.style.transform="rotate("+tiltLR+"deg) rotate3d(1,0,0, "+(tiltFB*-1)+"deg)";}
        console.log("logging info");

    };

    window.JumpandJam = JumpandJam;

    } (jQuery, this, this.document));