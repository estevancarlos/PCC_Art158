function getCubeAttr() {
    var posValue = document.querySelector('#orange-cube').getAttribute('position');
    console.log(posValue);
};

var posObj = {x: 0, y: 0, z:0};

document.querySelector('#orange-cube').addEventListener('mouseenter', function () {
    var initialEntityPos = document.querySelector('#orange-cube').getAttribute('position')
    var entityPos;
    var animDuration = document.querySelector('#orange-cube-anim').getAttribute('dur');
    var animPosition = document.querySelector('#orange-cube-anim').getAttribute('to');
    var strAnimPosition = animPosition.split(' ').map(Number);

    posObj.x = strAnimPosition[0];
    posObj.y = strAnimPosition[1];
    posObj.z = strAnimPosition[2];

    //document.querySelector('#orange-cube').emit('startCube-1');
    document.querySelector('#cameraStart-1').emit('camera-1');

    var checkAnim = setInterval(function () {
        entityPos = document.querySelector('#orange-cube').getAttribute('position');

        //http://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects
        if(entityPos.x === posObj.x && entityPos.y === posObj.y && entityPos.z === posObj.z) {
            console.log('true');
            //document.querySelector('#orange-cube-anim').setAttribute('to', '0 0 -20');
            //document.querySelector('#orange-cube-anim').setAttribute('begin', 'startCube-2');

            document.querySelector('#orange-cube').emit('startCube-2');
            clearInterval(checkAnim);
        }
    }, 100);

    checkAnim;



});

