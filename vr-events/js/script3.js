document.querySelector('#podium-1-toggle').addEventListener('mouseenter', function () {
    console.log('toggled');
    document.querySelector('#orb').emit('start-orb');
});

document.querySelector('#orb-anim').addEventListener('animationend', function () {
    console.log('orb anim done');
    document.querySelector('#camera-anim').emit('camera-start-1');
});

document.querySelector('#camera-anim').addEventListener('animationend', function () {
    console.log('camera-1 anim done');
    document.querySelector('#camera-anim2').emit('camera-start-2');
    document.querySelector('#point-light-anim').emit('point-light-start');
    document.querySelector('#point-light-anim-red').emit('point-light-start');
    document.querySelector('#ambient-light-anim-red').emit('ambient-light-start');
    document.querySelector('#camera-anim3').emit('camera-start-2');
});




