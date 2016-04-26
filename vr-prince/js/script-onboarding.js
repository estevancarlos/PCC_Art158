var readyCue = document.querySelector('#quote-sign-1');
var cue1 = document.querySelector('#cue-1');
var cue2;
var cue1_init1 = document.querySelector('#cue-1-init-1');
var cue3 =  document.querySelector('#camera-viewer-anim-1');
var cueSky = document.querySelector('#sky-1');
var cue4 = document.querySelector('#camera-viewer-anim-2');


function init() {
    cue1.addEventListener('mouseenter', function () {
        var i = -1;

        document.querySelector('#hem-white-light-anim-1').emit('hem-white-light-init-1');
        document.querySelector('#hem-white-light-anim-2').emit('hem-white-light-init-2');

        function wallSlides () {
            setTimeout(function () {
                i++;
                document.querySelector('#wall-anim-' + (i + 1)).emit('wall-init-' + (i + 1));
                if( i === 3 ) {
                    document.querySelector('#instruct-1').emit('instruct-1-init-1');
                }
                if (i < 3) {
                    wallSlides();
                }
            }, 300)
        }

        wallSlides();

        cue2 = document.querySelector('#wall-anim-3');
        cue2.addEventListener('animationend', function () {
            document.querySelector('#camera-viewer-anim-1').emit('camera-viewer-init-1');
            document.querySelector('#camera-viewer-anim-2').emit('camera-viewer-init-2');

            document.querySelector('#hem-white-light-anim-1').emit('hem-white-light-init-1');
            document.querySelector('#hem-white-light-anim-2').emit('hem-white-light-init-2');
        });

        /*
         for(var i = 0; i < 4; i++) {
         console.log(i + 1);
         document.querySelector('#wall-anim-' + (i + 1)).emit('wall-init-' + (i + 1));
         }
         */
    });
};

cue3.addEventListener('animationend', function () {
    var c = 1000;
    function skyColor () {
        setTimeout(function () {
            c--;
            document.querySelector('#sky-1').setAttribute('opacity', c * 0.01);
            if (c > 1) {
                skyColor(); // Changes opacity of background
            }
        }, 80)
    }
    skyColor();

    // Remove Sign
    document.querySelector('#prince-title-anim-1').emit('prince-title-remove');
    document.querySelector('#cue-1-anim-2').emit('cue-1-remove');

    document.querySelector('#camera-viewer-anim-3').emit('camera-viewer-init-3');
    document.querySelector('#camera-viewer-anim-4').emit('camera-viewer-init-4');

    document.querySelector('#spot-pink-light-anim-1').emit('spot-pink-light-init-1');
});



cue4.addEventListener('animationend', function () {
    console.log('cue4 ends');

    readyCue.emit('quote-sign-init-2');



    if( document.querySelector('#diamond-1') ) {
        for(var i = 0; i < 40; i++) {

            for(var v1 = 0; v1 < 2; v1++) {
                var r1 = Math.random() * (55 - -55) + -55;
                for(var v2 = 0; v2 < 2; v2++){
                    var r2 = Math.random() * (35 - -35) + -35;
                    for(var v3 = 0; v3 < 2; v3++){
                        var r3 = Math.random() * (70 - -70) + -70;

                        document.querySelector('#diamond-' + (i + 1)).setAttribute('position', { x: r1, y: r2, z: r3 });
                        document.querySelector('#diamond-' + (i + 1)).setAttribute('material.opacity', '1.0');
                        document.querySelector('#diamond-' + (i + 1)).setAttribute('visible', 'true');
                    };
                };
            };
        };
    };

});




readyCue.addEventListener('mouseleave', function () {
    init();
    readyCue.emit('quote-sign-init-1');
});