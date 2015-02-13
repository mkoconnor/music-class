// -*-javascript-*-

var tunings = {
    "Even-Tempered" : {
        'C':  1.0000000000000000,
        'C#': 1.0594630943592953,
        'D':  1.1224620483093730,
        'D#': 1.1892071150027211,
        'E':  1.2599210498948732,
        'F':  1.3348398541700344,
        'F#': 1.4142135623730950,
        'G':  1.4983070768766815,
        'G#': 1.5874010519681995,
        'A':  1.6817928305074291,
        'A#': 1.7817974362806786,
        'B':  1.8877486253633870
    },
    "Pythagorean" : {
        'C': 1.0000000000000000,
        'D': 9/8,
        'E': 81/64,
        'F': 4/3,
        'G': 3/2,
        'A': 27/16,
        'B': 243/128,

        // The accidentals are not right for pythagorean, just copied
        // from even-tempered
        'C#': 1.0594630943592953,
        'D#': 1.1892071150027211,
        'F#': 1.4142135623730950,
        'G#': 1.5874010519681995,
        'A#': 1.7817974362806786
    },
    // This one is crazy, it's just to show that it's doing something
    "Linear" : {
        "C":  1.0000000000000,
        "C#": 1.083333333333333,
        "D": 1.166666666666667,
        "D#": 1.250000000000000,
        "E": 1.333333333333333,
        "F": 1.416666666666667,
        "F#": 1.500000000000000,
        "G": 1.583333333333333,
        "G#": 1.666666666666667,
        "A": 1.750000000000000,
        "A#": 1.833333333333333,
        "B": 1.916666666666667,
    },
    "Just Intonation" : {
        "C": 1,
        "D": 9/8,
        "E": 5/4,
        "F" : 4/3,
        "G" : 3/2,
        "A" : 5/3,
        "B" : 15/8,

        // accidentals just copied from even-tempered
        'C#': 1.0594630943592953,
        'D#': 1.1892071150027211,
        'F#': 1.4142135623730950,
        'G#': 1.5874010519681995,
        'A#': 1.7817974362806786
    }
}
