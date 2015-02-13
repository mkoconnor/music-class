// -*-javascript-*-

Gibberish.init();
Gibberish.Time.export();
Gibberish.Binops.export();
 
$(document).ready(function () {

    var defaultFreq = 440;
    var otherFreq = 445;
    var board = JXG.JSXGraph.initBoard('box', {boundingbox:[-0.5/(otherFreq - defaultFreq),2.2,0.5/(otherFreq - defaultFreq),-2.2], axis:true, grid:false, showCopyright: showCopyright, zoom: {factorY:1, eps:0.05}});

    var fixedSinewave = new Gibberish.Sine (defaultFreq, .25).connect();
    var sinewave = new Gibberish.Sine( otherFreq, .25 ).connect();

    var stop = function () {
        fixedSinewave.amp = 0;
        sinewave.amp = 0;
    };
    stop ();
    
    // var slide = board.create('slider', [[0.2/defaultFreq, 1.5], [1.8/defaultFreq, 1.5], [220, 440, 660]]);
    var sinFreq = function(sinewave, x) {
        return Math.sin((sinewave.frequency) * 2* Math.PI * x);
    }
    board.create('functiongraph', [function(x) { return sinFreq(fixedSinewave, x) + sinFreq(sinewave,x); }], {highlight:false, strokecolor:'blue'});
    board.create('functiongraph', [function(x) { return 2 * Math.cos((fixedSinewave.frequency - sinewave.frequency) * Math.PI * x); }], {highlight:false, strokecolor:'red'});
    
    // board.on('update', function() {
    //     sinewave.frequency = slide.Value();
    // });

    $("#secondFreq").html(otherFreq);
    
    $("#slider").slider({
        min: defaultFreq * .9,
        max: defaultFreq * 1.1,
        value: otherFreq,
        slide: function (event,ui) {
            var val = $(this).slider("value");
            $("#secondFreq").html(val);
            sinewave.frequency = val;
            board.update();
        }
    });

    $("#start").click(function() {
        fixedSinewave.amp = .25;
        sinewave.amp = .25;
    });
    $("#stop").click(stop);
                      
});
