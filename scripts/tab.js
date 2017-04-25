let A = [
    0,
    1,
    2,
    12,
    13,
    14,
    24,
    25,
    26,
    36,
    37,
    38,
    48,
    49,
    50,
    60,
    61,
    62,
    72,
    73,
    74,
    84,
    85,
    86,
    96,
    97,
    98,
    108,
    109,
    110120,
    121,
    122
];

let Z = [
    3,
    4,
    5,
    15,
    16,
    17,
    27,
    28,
    29,
    39,
    40,
    41,
    51,
    52,
    53,
    63,
    64,
    65,
    75,
    76,
    77,
    87,
    88,
    89,
    99,
    100,
    101,
    111,
    112,
    113,
    123,
    124,
    125
];

let E = [
    6,
    7,
    8,
    18,
    19,
    20,
    30,
    31,
    32,
    42,
    43,
    44,
    54,
    55,
    56,
    66,
    67,
    68,
    78,
    79,
    80,
    90,
    91,
    92,
    102,
    103,
    104,
    114,
    115,
    116,
    126,
    127
];

let R = [
    9,
    10,
    11,
    21,
    22,
    23,
    33,
    34,
    35,
    45,
    46,
    47,
    57,
    58,
    59,
    69,
    70,
    71,
    81,
    82,
    83,
    93,
    94,
    95,
    105,
    106,
    107,
    117,
    118,
    119
];

let at = false;
let zt = false;
let et = false;
let rt = false;

$(document).ready(function() {
    for (let i = 0; i < notes.length; i++) {
        setTimeout(function() {
            if (notes[i].time !== notes[i - 1].time) {
                var myImage = new Image(45, 22);
                switch (true) {
                    case A.includes(notes[i].midi):
                        myImage.className = 'notes Anote';
                        myImage.src = 'images/puckblue.png';
                        break;
                    case Z.includes(notes[i].midi):
                        myImage.className = 'notes Znote';
                        myImage.src = 'images/puckgreen.png';
                        break;
                    case E.includes(notes[i].midi):
                        myImage.className = 'notes Enote';
                        myImage.src = 'images/puckyellow.png';
                        break;
                    case R.includes(notes[i].midi):
                        myImage.className = 'notes Rnote';
                        myImage.src = 'images/puckred.png';
                        break;
                }
                var time = 0;

                $('.screen').prepend(myImage);

                setTimeout(function() {
                    if (myImage.className == 'notes Anote') {
                        at = true;
                        console.log('note A');
                        setTimeout(function() {
                            at = false;
                        }, 300);

                    } else if (myImage.className == 'notes Znote') {
                        zt = true;
                        console.log('note Z');
                        setTimeout(function() {
                            zt = false;
                        }, 300);
                    } else if (myImage.className == 'notes Enote') {
                        et = true;
                        console.log('note E');
                        setTimeout(function() {
                            et = false;
                        }, 300);
                    } else if (myImage.className == 'notes Rnote') {
                        rt = true;
                        console.log('note R');
                        setTimeout(function() {
                            rt = false;
                        }, 300);
                    }
                }, 3700);
            }

            setTimeout(function() {
                $(myImage).remove();
            }, 4000);
        }, ((notes[i].time) * 1000));
    }
    var audio = new Audio('sounds/rhcp-Californication.mp3');
    setTimeout(function() {
        audio.play();
    }, 500);
});
