/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of Oyo by LGA
* 
* @author Femi Olapegba
*/
(function($) {
    $.extend(true, $.fn.mapael, 
        {
            maps :{
                usa_states : {
                    width : 609, //reduce width to increase size on map
                    height : 593,
                    getCoords : function (lat, lon) {
                             var xfactor = 219.42858628934
                                , xoffset = -580.75748915183
                                , x = (lon * xfactor) + xoffset
                                , yfactor = -219.52839635215
                                , yoffset = 2023.280214543
                                , y = (lat * yfactor) + yoffset;
                            
                        return {'x' : x, 'y' : y};
                    },
                    elems : {
                        "EPHC-OY-AFI-01" : "M194.57,384.42l4.62,-0.88l2.51,0.43l-0.71,4.14l7.01,7.65l0,0l-2.45,3.49l-2.45,0.46l-1.41,1.72l0.22,2.22l2.02,0.82l-0.88,2.89l1.2,2.77l-1.43,3.54l-3.91,2.88l-3.61,11.01l-2.75,2.4l-0.62,4.63l1.34,2.09l-0.88,0.51l-0.01,1.63l-1.44,-0.25l-2.46,8.34l-2.68,1.03l-2,-1.83l-1.34,-0.12l-4.51,3.19l-2.1,-5.46l2.01,-2.25l-1.74,-2.09l-17.66,-0.44l-2.2,1.01l-2.29,5.69l-3.93,3.45l-1.2,7.01l2.63,2.92l0.22,3.17l-2.57,3.67l-0.85,3.74l-3.53,1.48l-1.76,4.32l3.1,2.48l1.65,2.94l2.88,1.13l1.24,2.26l-0.39,1.16l0,0l-6.9,16.74l0,0l-14.03,-15.18l-17.52,-13.62l0,0l4,0.28l0.83,-1.73l-0.21,-1.07l-3.3,-1.74l-3.77,-0.18l1.32,-1.35l2.4,-0.1l1.89,-1.82l2.44,-0.66l0.72,-1.82l-0.83,-8.04l-0.64,-0.78l-1.77,0.51l-3.07,3.33l-6.63,-0.68l-2.01,-1.96l-0.03,-3.41l2.98,-4.92l8.03,-6.35l1.81,-8.76l0,0l2.67,-1.42l2.15,-4.97l4.29,-3.44l2.32,-0.02l5.42,3.47l1.81,0.03l0.81,-5l-0.46,-3.98l1.56,-6.54l6.7,-2.16l-0.62,-2.4l0,0l4.55,-1.45l14.75,0.12l1.55,0.53l1.42,2.21l1.96,6.74l2.28,0.59l5.53,-3.5l3.04,-4.43l4.54,-14.16l4.58,-3.93l0.85,-2.06l1.86,-0.38l1.5,1.24L194.57,384.42z"
                    }
                }
            }
        }
    );
})(jQuery);

$(document).ready(function(){
    columnChart();
    
    function columnChart(){
        var item = $('.chart', '.column-chart').find('.item'),
        itemWidth = 100 / item.length;
        item.css('width', itemWidth + '%');
        
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };
});