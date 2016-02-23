$(document).ready(function() {
    
    var c = document.getElementById("frame");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = $(window).width();
    ctx.canvas.height = $(window).height();
    
    var arcParams = {
        posX : 0,
        posY : 0,
        rad : 50,
        sAngle : 1.2*Math.PI,
        eAngle : function() {
            return this.posX*Math.PI;
        } //1.5*Math.PI
    };
    
    
    ctx.beginPath();
    $(window).on("mousemove", function(event) {
        
        
        arcParams.posX = event.pageX;
        arcParams.posY = event.pageY;
        arcParams.rad = Math.random() * 100;
        
        ctx.arc(
            arcParams.posX,
            arcParams.posY,
            arcParams.rad,
            arcParams.sAngle,
            arcParams.eAngle()
        );
        
        ctx.stroke();
        //ctx.closePath();
        
    });
    
    
    
    
});