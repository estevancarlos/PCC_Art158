$(document).ready(function(){ // Detects of the page is "ready"
    
    // Panorama effect
    $(".panorama").panorama_viewer({
        repeat: true,
        direction: "horizontal",
        animationTime: 700,
        easing: "ease-out",
        overlay: true
    });
    
    // Assigns a click function to anything with the the ID #pan-btn-a
    $("#pan-btn-a").click(function() {
        
        // Changes an attribute of an image that has the ID #pan-image
        $('#pan-image').attr('src','images/panorama1.jpg');
    })
    
     $("#pan-btn-b").click(function() {
        $('#pan-image').attr('src','images/panorama2.jpg');
    })
});