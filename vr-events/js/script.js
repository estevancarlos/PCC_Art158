var testEntity = document.getElementById('orange-cube');


document.querySelector('#orange-cube').addEventListener('mouseenter', function () {
    console.log('hi');
    document.querySelector('#orange-cube').emit('startCube-1');

    if( document.querySelector('#orange-cube').getAttribute('position') === '{x: 0, y: 0, z: -30}' ) {
        console.log('getAttr');
        document.querySelector('#orange-cube-anim1').setAttribute('to', '10 0 -40');
    }
});





