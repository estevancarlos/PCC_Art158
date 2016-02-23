$(document).ready(function() {
    
    // This function maps a range of numbers into another range of numbers
    // Low1 is the original minimum value
    // High1 is the original max value
    // Low2 is the final minimum value
    // High2 is the final maximum value
    // Value is the incoming original value
    var map_range = function(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    };
    
    
    $(window).on("mousemove", function(event) {
        
        var optionVal = $("#choices option:selected").val();
        
        // This variable is assigned a value equal to
        // the width of the browser window
        var width = $(window).width();
        
        // The mapped value is converted to an integer
        var mapped_val = parseInt( map_range(event.pageX, 0, width, 0, 360) );
        
        console.log(mapped_val);
        
        $(".dancing_box").css(
            "transform", "rotate(" + mapped_val * optionVal + "deg)"
        );
        
    });
});

