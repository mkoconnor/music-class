// -*-javascript-*-

Gibberish.init();
Gibberish.Time.export();
Gibberish.Binops.export();
 
$(document).ready(function () {

    var numHarmonics = 20;
    var fundamental = 440;

    var parser = math.parser();
    var setif = function(name,condition) {
        parser.set(name, function(x,y) {
            if (condition(x)) {
                return y;
            } else {
                return 0;
            }
        });
    };
    setif('ifodd',function(x) { return (Math.abs(x % 2 - 1) < 0.0001); });
    setif('ifeven',function(x) { return (Math.abs(x % 2) < 0.0001); });

    var harmonicFunctionString = "1/n^2";
    var harmonicFunction = function (n) {
        parser.set("n",n);
        var ret = parser.eval(harmonicFunctionString);
        parser.remove("n");
        return ret;
    }
    $("#input").val(harmonicFunctionString);
    
    var startingFunction = function(n) { return 1/(n*n); };

    var board = JXG.JSXGraph.initBoard('box', {boundingbox:[-0.1,1.1,numHarmonics + 0.1,0], axis:true, grid:false, showCopyright: showCopyright, showNavigation: false});

    var sinewaves = [];
    var points = [];
    var playing = false;

    for (var i = 1; i <= numHarmonics; i++) {
        var sinewave = new Gibberish.Sine (i * fundamental, 1).connect();
        sinewave.amp = 0;
        sinewaves.push(sinewave);
        var point = board.create('point',[i,harmonicFunction(i)], {withLabel: false});
        point.fixedX = i;
        point.sinewave = sinewave;
        points.push(point);
        point.on('drag',function() {
            this.setPosition(JXG.COORDS_BY_USER,[this.fixedX,this.Y()]);
            if (playing) {
                this.sinewave.amp = this.Y();
            }
        });
    }

    var setAmps = function() {
        for (var i = 0; i < points.length; i++) {
            points[i].sinewave.amp = points[i].Y();
        }
    };
    
    $("#start").click(function() {
        playing = true;
        setAmps();
    });
    $("#stop").click(function() {
        playing = false;
        for (var i = 0; i < points.length; i++) {
            points[i].sinewave.amp = 0;
        }
    });

    $("#input").keypress(function (e) {
        if (e.which === 13) {
            harmonicFunctionString = $(this).val();
            for (var i = 0; i < points.length; i++) {
                points[i].setPosition(JXG.COORDS_BY_USER,[points[i].fixedX,harmonicFunction(points[i].fixedX)]);
            }
            board.update();
            if (playing) {
                setAmps();
            }
        }
    });
});
