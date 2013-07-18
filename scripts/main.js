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

        // Initialise the hover over effects
        //this.HoverEffectBenefits();

    };

    JumpandJam.counter = function () {

        //fix device orientation

        //listen for motion
        /*window.addEventListener('devicemotion', function (e) {
            ax = e.accelerationIncludingGravity.x * sensitivity;
            ay = -e.accelerationIncludingGravity.y * sensitivity;
        }, false);*/

        function deviceMotionHandler(eventData) {
          var info, xyz = "[X, Y, Z]";

          // Grab the acceleration from the results
          var acceleration = eventData.acceleration;
          info = xyz.replace("X", acceleration.x);
          info = info.replace("Y", acceleration.y);
          info = info.replace("Z", acceleration.z);
          document.getElementById("moAccel").innerHTML = info;

          // Grab the acceleration including gravity from the results
          acceleration = eventData.accelerationIncludingGravity;
          info = xyz.replace("X", acceleration.x);
          info = info.replace("Y", acceleration.y);
          info = info.replace("Z", acceleration.z);
          document.getElementById("moAccelGrav").innerHTML = info;

          // Grab the rotation rate from the results
          var rotation = eventData.rotationRate;
          info = xyz.replace("X", rotation.alpha);
          info = info.replace("Y", rotation.beta);
          info = info.replace("Z", rotation.gamma);
          document.getElementById("moRotation").innerHTML = info;

          // // Grab the refresh interval from the results
          info = eventData.interval;
          document.getElementById("moInterval").innerHTML = info;       
        }


        if ((window.DeviceMotionEvent) {
          window.addEventListener('devicemotion', deviceMotionHandler, false);
        } else {
          document.getElementById("dmEvent").innerHTML = "Not supported."
        }

    };

    window.JumpandJam = JumpandJam;

    } (jQuery, this, this.document));