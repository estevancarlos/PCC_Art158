var cue1 = document.querySelector('#cue-1');
var cue2;
var cue1_init1 = document.querySelector('#cue-1-init-1')

cue1.addEventListener('mouseenter', function () {
    console.log('cue-1 done');

    var i = -1;

    function wallSlides () {
        setTimeout(function () {
            i++;
            console.log(i + 1);
            document.querySelector('#wall-anim-' + (i + 1)).emit('wall-init-' + (i + 1));
            if( i === 3 ) {
                console.log('remove instruct 1');

                document.querySelector('#instruct-1').emit('instruct-1-remove');
            }
            if (i < 3) {
                wallSlides();
            }
        }, 300)
    }

    wallSlides();

    cue2 = document.querySelector('#wall-anim-3');
    cue2.addEventListener('animationend', function () {
        console.log('cue2 starts');

        document.querySelector('#camera-viewer-anim-1').emit('camera-viewer-init-1');
        document.querySelector('#camera-viewer-anim-2').emit('camera-viewer-init-2');

        console.log('cue 1 starts / lights');
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


cue1.addEventListener('mouseenter', function () {
    console.log('cue 1 anim end / lights');
    document.querySelector('#hem-white-light-anim-1').emit('hem-white-light-init-1');
    document.querySelector('#hem-white-light-anim-2').emit('hem-white-light-init-2');
});


