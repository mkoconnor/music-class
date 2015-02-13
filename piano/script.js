// -*-javascript-*-

$(document).ready(function () {

    origNotes = {}
    for (var note in Synth._notes) {
        origNotes[note] = Synth._notes[note];
    }    
    
    var setTuning = function(tuning) {
        for (var note in Synth._notes) {
            Synth._notes[note] = origNotes["C"] * tuning[note];
        }
        Synth._clearCache();
    };
    
    var setInstrument = function(inst) {
        $("#sound").val(inst);
    };

    var a = new AudioSynthView();
    a.draw();
    $(".sound-selector-to-hide").hide();
    $("#radio").buttonset();
    $("#radio1").click(function () {
        setInstrument("piano");
    });
    $("#radio2").click(function () {
        setInstrument("organ");
    });
    $("#radio3").click(function () {
        setInstrument("acoustic");
    });
    $("#radio4").click(function () {
        setInstrument("edm");
    });

    setInstrument("piano");

    var tuningHtml = '<div style="margin:5px;" id="tuning-radio">';
    var tuningCount = 0;
    var tuningList = []
    for (var tuning in tunings) {
        var checkedString = "";
        if (tuningCount == 0) {
            checkedString = 'checked="checked"';
        }
        tuningHtml += ('<input type="radio" id="tuning-radio-' + tuningCount + '"name="tuning-radio"' + checkedString + '><label for="tuning-radio-' + tuningCount + '">' + tuning + '</label>');
        tuningList.push(tunings[tuning]);
        tuningCount++;
    }
    tuningHtml += '</div>'
    $("#radio").after(tuningHtml)

    $("#tuning-radio").buttonset();


    // This could be cleaned up
    tuningCount = 0;
    for (var tuning in tunings) {
        $("#tuning-radio-" + tuningCount).click(function () {
            var thisTuning = this.id.substring(13,this.id.length);
            setTuning(tuningList[thisTuning]);
        });
        tuningCount++;
    }
});
