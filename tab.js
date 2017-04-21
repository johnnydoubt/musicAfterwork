$(document).ready(function() {

    for (let i = 0; i < notes.length; i++) {
        setTimeout(function() {
        if (notes[i].time !== notes[i-1].time) {
          var myImage = new Image(100, 100);
          myImage.src = 'images/donut.png';
          console.log(myImage);
          var time = 0;
      $('.container').prepend(myImage);
          console.log((notes[i].time)*1000);
        }
        }, (notes[i].time)*1000);
    }
});

var notes =  [
        {
          "name": "E3",
          "midi": 52,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 2.531644,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 2.531644,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 2.531644,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 2.531644,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 2.531644,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 3.4810105,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 3.63923825,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.63923825,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 3.63923825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 3.63923825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 3.63923825,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 3.63923825,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 3.63923825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.63923825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.797466,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 3.797466,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 3.797466,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 3.797466,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 3.797466,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 3.797466,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 3.797466,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 3.797466,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 4.7468325,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 4.90506025,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 4.90506025,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 4.90506025,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 5.063288,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 5.063288,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 5.063288,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 5.063288,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 5.063288,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 6.48733775,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 6.48733775,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 6.6455655,
          "velocity": 1,
          "duration": 0.21097033333333304
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 6.6455655,
          "velocity": 1,
          "duration": 0.21097033333333304
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 6.80379325,
          "velocity": 1,
          "duration": 0.10548516666666607
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 6.80379325,
          "velocity": 1,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 6.962020999999999,
          "velocity": 1,
          "duration": 0.21097033333333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 6.962020999999999,
          "velocity": 1,
          "duration": 0.21097033333333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 7.120248749999999,
          "velocity": 1,
          "duration": 0.17800621875000022
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 7.120248749999999,
          "velocity": 1,
          "duration": 0.1911918645833337
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 7.278476499999999,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 7.278476499999999,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 7.436704249999999,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 7.436704249999999,
          "velocity": 1,
          "duration": 0.10548516666666696
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 7.594931999999999,
          "velocity": 1,
          "duration": 0.6329110000000009
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 7.594931999999999,
          "velocity": 1,
          "duration": 0.6329110000000009
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 7.594931999999999,
          "velocity": 0.25196850393700787,
          "duration": 0.6329110000000009
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 7.594931999999999,
          "velocity": 1,
          "duration": 0.6329110000000009
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 7.594931999999999,
          "velocity": 1,
          "duration": 0.6329110000000009
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 7.594931999999999,
          "velocity": 0.6299212598425197,
          "duration": 0.6329110000000009
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 8.5442985,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 8.5442985,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 8.5442985,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 8.5442985,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 8.70252625,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 8.70252625,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 8.70252625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 8.70252625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 8.860754,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 8.860754,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 8.860754,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 8.860754,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 9.8101205,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 9.8101205,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 9.8101205,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 9.8101205,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 9.96834825,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 9.96834825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 9.96834825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 9.96834825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 10.126576,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 10.126576,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 10.126576,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 10.126576,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 10.126576,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 10.759487,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666607
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 10.759487,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 10.759487,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666607
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 10.91771475,
          "velocity": 1,
          "duration": 0.21097033333333393
        },
        {
          "name": "G#2",
          "midi": 44,
          "time": 10.91771475,
          "velocity": 1,
          "duration": 0.21097033333333393
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 10.91771475,
          "velocity": 1,
          "duration": 0.21097033333333393
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 11.23417025,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666607
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 11.23417025,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 11.23417025,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666607
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 11.392398,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333393
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 11.392398,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333393
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 11.392398,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333393
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 11.7088535,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666607
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 11.7088535,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 11.7088535,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666607
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 11.86708125,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333393
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 11.86708125,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333393
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 11.86708125,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333393
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 12.18353675,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666607
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 12.18353675,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 12.18353675,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666607
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 12.3417645,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666607
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 12.3417645,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666607
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 12.3417645,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666607
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 12.49999225,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666607
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 12.49999225,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666607
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 12.49999225,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666607
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 12.65822,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 12.65822,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 12.65822,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 12.65822,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 12.65822,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 13.6075865,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 13.76581425,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.76581425,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 13.76581425,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 13.76581425,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 13.76581425,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 13.76581425,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 13.76581425,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.76581425,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.924042,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 13.924042,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 13.924042,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 13.924042,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 13.924042,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 13.924042,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 13.924042,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 13.924042,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 14.8734085,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 15.03163625,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 15.03163625,
          "velocity": 1,
          "duration": 0.15822775
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 15.03163625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 15.189864,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 15.189864,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 15.189864,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 15.189864,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 15.189864,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 16.613913750000002,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 16.613913750000002,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 16.772141500000004,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 16.772141500000004,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 16.930369250000005,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 16.930369250000005,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 17.088597000000007,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 17.088597000000007,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 17.24682475000001,
          "velocity": 1,
          "duration": 0.1780062187500029
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 17.24682475000001,
          "velocity": 1,
          "duration": 0.1911918645833346
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 17.40505250000001,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 17.40505250000001,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 17.563280250000012,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 17.563280250000012,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 17.721508000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 17.721508000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 17.721508000000014,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 17.721508000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 17.721508000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 17.721508000000014,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 18.670874500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 18.670874500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 18.670874500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 18.670874500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 18.829102250000012,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 18.829102250000012,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 18.829102250000012,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 18.829102250000012,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 18.987330000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 18.987330000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 18.987330000000014,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 18.987330000000014,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 19.936696500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 19.936696500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 19.936696500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 19.936696500000014,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 20.094924250000012,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 20.094924250000012,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 20.094924250000012,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 20.094924250000012,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 20.253152000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 20.253152000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 20.253152000000014,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 20.253152000000014,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 20.253152000000014,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 20.886063000000014,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 20.886063000000014,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 20.886063000000014,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 21.044290750000016,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "G#2",
          "midi": 44,
          "time": 21.044290750000016,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 21.044290750000016,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 21.360746250000016,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 21.360746250000016,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 21.360746250000016,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 21.518974000000018,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 21.518974000000018,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 21.518974000000018,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 21.835429500000018,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 21.835429500000018,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 21.835429500000018,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 21.99365725000002,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333215
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 21.99365725000002,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333215
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 21.99365725000002,
          "velocity": 0.8503937007874016,
          "duration": 0.21097033333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 22.31011275000002,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 22.31011275000002,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 22.31011275000002,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 22.46834050000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 22.46834050000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 22.46834050000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 22.626568250000023,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 22.626568250000023,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 22.626568250000023,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 22.784796000000025,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 22.784796000000025,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 22.784796000000025,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 22.784796000000025,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 22.784796000000025,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 23.734162500000025,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 23.892390250000027,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 23.892390250000027,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 23.892390250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 23.892390250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 23.892390250000027,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 23.892390250000027,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 23.892390250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 23.892390250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 24.05061800000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 24.05061800000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 24.05061800000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 24.05061800000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 24.05061800000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 24.05061800000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 24.05061800000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 24.05061800000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 24.99998450000003,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 25.158212250000027,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 25.158212250000027,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 25.158212250000027,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 25.31644000000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 25.31644000000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 25.31644000000003,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 25.31644000000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 25.31644000000003,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 26.74048975000003,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 26.74048975000003,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 26.898717500000032,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 26.898717500000032,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 27.056945250000034,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 27.056945250000034,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 27.215173000000036,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 27.215173000000036,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 27.373400750000037,
          "velocity": 1,
          "duration": 0.1780062187500029
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 27.373400750000037,
          "velocity": 1,
          "duration": 0.1911918645833346
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 27.53162850000004,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 27.53162850000004,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 27.68985625000004,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 27.68985625000004,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 27.848084000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 27.848084000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 27.848084000000043,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 27.848084000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 27.848084000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 27.848084000000043,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 28.797450500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 28.797450500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 28.797450500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 28.797450500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 28.95567825000004,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 28.95567825000004,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 28.95567825000004,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 28.95567825000004,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 29.113906000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 29.113906000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 29.113906000000043,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 29.113906000000043,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 30.063272500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 30.063272500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 30.063272500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 30.063272500000043,
          "velocity": 1,
          "duration": 0.15822774999999822
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 30.22150025000004,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 30.22150025000004,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 30.22150025000004,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 30.22150025000004,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 30.379728000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 30.379728000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 30.379728000000043,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 30.379728000000043,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 30.379728000000043,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 31.012639000000043,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 31.012639000000043,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 31.012639000000043,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 31.170866750000044,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "G#2",
          "midi": 44,
          "time": 31.170866750000044,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 31.170866750000044,
          "velocity": 1,
          "duration": 0.21097033333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 31.487322250000044,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 31.487322250000044,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 31.487322250000044,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 31.645550000000046,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 31.645550000000046,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 31.645550000000046,
          "velocity": 0.7637795275590551,
          "duration": 0.21097033333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 31.962005500000046,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 31.962005500000046,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 31.962005500000046,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 32.12023325000005,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 32.12023325000005,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 32.12023325000005,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 32.43668875000005,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 32.43668875000005,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 32.43668875000005,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 32.59491650000005,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 32.59491650000005,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 32.59491650000005,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 32.753144250000055,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 32.753144250000055,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 32.753144250000055,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 32.90477917708339,
          "velocity": 0.7952755905511811,
          "duration": 0.0065928229166658525
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 32.90477917708339,
          "velocity": 1,
          "duration": 0.0065928229166658525
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 33.267384437500056,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 33.267384437500056,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 33.267384437500056,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 33.267384437500056,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 33.29375572916672,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 33.29375572916672,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 33.75525333333338,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 33.75525333333338,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 33.78821744791671,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 33.78821744791671,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 33.78821744791671,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 33.78821744791671,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 34.07830165625004,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 34.07830165625004,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 34.08489447916671,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 34.08489447916671,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 34.08489447916671,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 34.08489447916671,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 34.63869160416671,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 34.63869160416671,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 34.65847007291671,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 34.65847007291671,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 34.69143418750004,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 34.69143418750004,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 34.88921887500004,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 34.88921887500004,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 35.02107533333337,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 35.02107533333337,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 35.02107533333337,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 35.02107533333337,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 35.05403944791671,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 35.05403944791671,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 35.05403944791671,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 35.05403944791671,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 35.79902843750004,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 35.79902843750004,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 35.79902843750004,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 35.79902843750004,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 35.825399729166705,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 35.825399729166705,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 36.286897333333364,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 36.286897333333364,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 36.31986144791669,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 36.31986144791669,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 36.31986144791669,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 36.31986144791669,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 36.60994565625003,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 36.60994565625003,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 36.61653847916669,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 36.61653847916669,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 36.61653847916669,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 36.61653847916669,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 37.170335604166695,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 37.170335604166695,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 37.19011407291669,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 37.19011407291669,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 37.22307818750003,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 37.22307818750003,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 37.420862875000026,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 37.420862875000026,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 37.55271933333336,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 37.55271933333336,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 37.55271933333336,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 37.55271933333336,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 37.58568344791669,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 37.58568344791669,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 37.58568344791669,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 37.58568344791669,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 38.21200162500003,
          "velocity": 0.1889763779527559,
          "duration": 0.3098626770833306
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 38.25155856250003,
          "velocity": 1,
          "duration": 0.46809042708332527
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 38.26474420833336,
          "velocity": 1,
          "duration": 0.24393444791666496
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 38.32407961458336,
          "velocity": 1,
          "duration": 0.4483119583333277
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 38.778984395833355,
          "velocity": 1,
          "duration": 0.45490478124998646
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 38.80535568750002,
          "velocity": 1,
          "duration": 0.2109703333333286
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 38.80535568750002,
          "velocity": 1,
          "duration": 0.23074880208332615
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 38.825134156250016,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 39.24048200000001,
          "velocity": 0.9921259842519685,
          "duration": 0.08570669791666319
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 39.260260468750005,
          "velocity": 1,
          "duration": 0.44171913541666896
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 39.2800389375,
          "velocity": 1,
          "duration": 0.725210520833329
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 39.32618869791667,
          "velocity": 0.984251968503937,
          "duration": 0.4351263125000031
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 39.76790783333334,
          "velocity": 1,
          "duration": 0.21756315624999445
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 39.794279125,
          "velocity": 1,
          "duration": 40.50630400000003
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 40.01184228125,
          "velocity": 1,
          "duration": 0.626318177083327
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 40.031620749999995,
          "velocity": 1,
          "duration": 0.7318033437499949
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 40.04480639583333,
          "velocity": 1,
          "duration": 0.5999468854166636
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 40.50630399999999,
          "velocity": 1,
          "duration": 0.731803343750002
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 40.756831270833324,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 40.770016916666656,
          "velocity": 1,
          "duration": 0.2505272708333379
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 40.770016916666656,
          "velocity": 1,
          "duration": 0.21756315625000155
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 40.78320256249999,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 40.829352322916655,
          "velocity": 1,
          "duration": 0.4087550208333397
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 41.29084992708333,
          "velocity": 1,
          "duration": 0.2834913854166743
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 41.29084992708333,
          "velocity": 1,
          "duration": 0.3230483229166765
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 41.29084992708333,
          "velocity": 1,
          "duration": 0.2505272708333379
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 41.297442749999995,
          "velocity": 0.7874015748031497,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 41.75234753125,
          "velocity": 0.8582677165354331,
          "duration": 0.5142401875000004
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 41.772126,
          "velocity": 1,
          "duration": 0.4944617187500029
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 41.8116829375,
          "velocity": 1,
          "duration": 0.725210520833329
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 42.2863661875,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 42.55007910416666,
          "velocity": 0.8110236220472441,
          "duration": 0.7845459270833359
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 42.55007910416666,
          "velocity": 1,
          "duration": 0.11867081249999956
        },
        {
          "name": "F4",
          "midi": 65,
          "time": 42.56985757291666,
          "velocity": 1,
          "duration": 0.13844928125000422
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 42.66874991666666,
          "velocity": 1,
          "duration": 0.777953104166663
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 42.71489967708333,
          "velocity": 1,
          "duration": 0.6197253541666683
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 43.3939604375,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 43.3939604375,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 43.3939604375,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 43.3939604375,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 43.42033172916666,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 43.42033172916666,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 43.88182933333332,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 43.88182933333332,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 43.91479344791665,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 43.91479344791665,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 43.91479344791665,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 43.91479344791665,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 44.204877656249984,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 44.204877656249984,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 44.21147047916665,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 44.21147047916665,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 44.21147047916665,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 44.21147047916665,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 44.76526760416665,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 44.76526760416665,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 44.78504607291665,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 44.78504607291665,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 44.818010187499986,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 44.818010187499986,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 45.01579487499998,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 45.01579487499998,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 45.147651333333314,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 45.147651333333314,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 45.147651333333314,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 45.147651333333314,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 45.18061544791665,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 45.18061544791665,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 45.18061544791665,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 45.18061544791665,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 45.925604437499985,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 45.925604437499985,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 45.925604437499985,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 45.925604437499985,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 45.95197572916665,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 45.95197572916665,
          "velocity": 1,
          "duration": 0.4614976041666594
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 46.41347333333331,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 46.41347333333331,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 46.44643744791664,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 46.44643744791664,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 46.44643744791664,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 46.44643744791664,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 46.73652165624997,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 46.73652165624997,
          "velocity": 1,
          "duration": 0.45490478125000067
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 46.743114479166636,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 46.743114479166636,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 46.743114479166636,
          "velocity": 1,
          "duration": 0.5472043020833368
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 46.743114479166636,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 47.29691160416664,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 47.29691160416664,
          "velocity": 0.2677165354330709,
          "duration": 0.2505272708333308
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 47.316690072916636,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 47.316690072916636,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000155
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 47.34965418749997,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 47.34965418749997,
          "velocity": 1,
          "duration": 0.3626052604166645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 47.54743887499997,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 47.54743887499997,
          "velocity": 0.23622047244094488,
          "duration": 0.1252636354166654
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 47.6792953333333,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 47.6792953333333,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 47.6792953333333,
          "velocity": 1,
          "duration": 0.2241559791666674
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 47.6792953333333,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 47.71225944791664,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 47.71225944791664,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 47.71225944791664,
          "velocity": 1,
          "duration": 0.1845990416666652
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 47.71225944791664,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666652
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 48.101235999999965,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999999645
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 48.101235999999965,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 48.101235999999965,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999999645
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 48.101235999999965,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999999645
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 48.101235999999965,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 48.57591924999996,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999999645
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 48.57591924999996,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 48.57591924999996,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999999645
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 48.57591924999996,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999999645
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 48.57591924999996,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 49.05060249999996,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999999645
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 49.05060249999996,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 49.05060249999996,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999999645
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 49.05060249999996,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999999645
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 49.05060249999996,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 49.52528574999996,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 49.52528574999996,
          "velocity": 0.9763779527559056,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 49.52528574999996,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 49.52528574999996,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 49.52528574999996,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 49.68351349999996,
          "velocity": 0.30708661417322836,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 49.68351349999996,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 49.68351349999996,
          "velocity": 0.33070866141732286,
          "duration": 0.10548516666666785
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 49.84174124999996,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 49.84174124999996,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 49.84174124999996,
          "velocity": 0.84251968503937,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 49.84174124999996,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 49.84174124999996,
          "velocity": 0.5590551181102362,
          "duration": 0.10548516666666785
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 49.999968999999965,
          "velocity": 0.5039370078740157,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 49.999968999999965,
          "velocity": 0.9291338582677166,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 49.999968999999965,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 49.999968999999965,
          "velocity": 0.5196850393700787,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 49.999968999999965,
          "velocity": 0.49606299212598426,
          "duration": 0.2109703333333357
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 50.31642449999997,
          "velocity": 0.5354330708661418,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 50.31642449999997,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 50.31642449999997,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 50.31642449999997,
          "velocity": 0.7007874015748031,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 50.31642449999997,
          "velocity": 0.84251968503937,
          "duration": 0.2109703333333357
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 50.63287999999997,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 50.63287999999997,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 50.63287999999997,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 50.63287999999997,
          "velocity": 0.952755905511811,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 51.10756324999998,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 51.10756324999998,
          "velocity": 0.84251968503937,
          "duration": 0.31645549999999645
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 51.10756324999998,
          "velocity": 0.84251968503937,
          "duration": 0.31645549999999645
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 51.10756324999998,
          "velocity": 1,
          "duration": 0.31645549999999645
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 51.582246499999975,
          "velocity": 1,
          "duration": 0.8438813333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 51.582246499999975,
          "velocity": 0.8188976377952756,
          "duration": 0.8438813333333357
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 51.582246499999975,
          "velocity": 0.9291338582677166,
          "duration": 0.8438813333333357
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 51.582246499999975,
          "velocity": 1,
          "duration": 0.8438813333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 53.16452399999998,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 53.16452399999998,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 53.16452399999998,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 53.16452399999998,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 53.16452399999998,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 54.11389049999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 54.272118249999984,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.272118249999984,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 54.272118249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 54.272118249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 54.272118249999984,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 54.272118249999984,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 54.272118249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.272118249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.430345999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 54.430345999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 54.430345999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 54.430345999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 54.430345999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 54.430345999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 54.430345999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 54.430345999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 55.37971249999998,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 55.537940249999984,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.537940249999984,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 55.537940249999984,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.696167999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 55.696167999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 55.696167999999986,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 55.696167999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 55.696167999999986,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 57.12021774999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 57.12021774999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 57.27844549999999,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 57.27844549999999,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 57.43667324999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 57.43667324999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 57.59490099999999,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 57.59490099999999,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 57.753128749999995,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 57.753128749999995,
          "velocity": 1,
          "duration": 0.19119186458333104
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 57.9113565,
          "velocity": 1,
          "duration": 0.10548516666666075
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 57.9113565,
          "velocity": 1,
          "duration": 0.10548516666666075
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 58.06958424999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 58.06958424999999,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 58.22781199999999,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 58.22781199999999,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 58.22781199999999,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 58.22781199999999,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 58.22781199999999,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 58.22781199999999,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 59.1771785,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 59.1771785,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 59.1771785,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 59.1771785,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 59.33540625,
          "velocity": 0.6141732283464567,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 59.33540625,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 59.33540625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 59.33540625,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 59.493634,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 59.493634,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 59.493634,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 59.493634,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 60.4430005,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 60.4430005,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 60.4430005,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 60.4430005,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 60.60122825,
          "velocity": 1,
          "duration": 0.15822775000000178
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 60.60122825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 60.60122825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 60.60122825,
          "velocity": 0.7874015748031497,
          "duration": 0.15822775000000178
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 60.759456,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 60.759456,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 60.759456,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 60.759456,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 60.759456,
          "velocity": 0.7874015748031497,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 61.392367,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 61.392367,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 61.392367,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 61.55059475,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "G#2",
          "midi": 44,
          "time": 61.55059475,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 61.55059475,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 61.867050250000005,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 61.867050250000005,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 61.867050250000005,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 62.02527800000001,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 62.02527800000001,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 62.02527800000001,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 62.34173350000001,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 62.34173350000001,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 62.34173350000001,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 62.49996125000001,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 62.49996125000001,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 62.49996125000001,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 62.816416750000016,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 62.816416750000016,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 62.816416750000016,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 62.97464450000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 62.97464450000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 62.97464450000002,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 63.13287225000002,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 63.13287225000002,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 63.13287225000002,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 63.29110000000002,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 63.29110000000002,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 63.29110000000002,
          "velocity": 0.25196850393700787,
          "duration": 0.632911
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 63.29110000000002,
          "velocity": 0.6299212598425197,
          "duration": 0.632911
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 63.29110000000002,
          "velocity": 1,
          "duration": 0.632911
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 64.24046650000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 64.39869425000002,
          "velocity": 0.6141732283464567,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.39869425000002,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 64.39869425000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 64.39869425000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 64.39869425000002,
          "velocity": 0.6141732283464567,
          "duration": 0.15822774999999467
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 64.39869425000002,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 64.39869425000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.39869425000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.55692200000001,
          "velocity": 1,
          "duration": 0.6329110000000071
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 64.55692200000001,
          "velocity": 1,
          "duration": 0.6329110000000071
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 64.55692200000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329110000000071
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 64.55692200000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329110000000071
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 64.55692200000001,
          "velocity": 1,
          "duration": 0.6329110000000071
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 64.55692200000001,
          "velocity": 1,
          "duration": 0.6329110000000071
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 64.55692200000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329110000000071
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 64.55692200000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329110000000071
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 65.50628850000003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 65.66451625000002,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.66451625000002,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 65.66451625000002,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.82274400000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 65.82274400000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 65.82274400000001,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 65.82274400000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 65.82274400000001,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 67.24679375000001,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 67.24679375000001,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 67.4050215,
          "velocity": 1,
          "duration": 0.2109703333333215
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 67.4050215,
          "velocity": 1,
          "duration": 0.2109703333333215
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 67.56324925,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 67.56324925,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 67.72147699999998,
          "velocity": 1,
          "duration": 0.2109703333333215
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 67.72147699999998,
          "velocity": 1,
          "duration": 0.2109703333333215
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 67.87970474999997,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 67.87970474999997,
          "velocity": 1,
          "duration": 0.19119186458333104
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 68.03793249999997,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 68.03793249999997,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 68.19616024999996,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 68.19616024999996,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 68.35438799999996,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 68.35438799999996,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 68.35438799999996,
          "velocity": 0.25196850393700787,
          "duration": 0.6329109999999929
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 68.35438799999996,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 68.35438799999996,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 68.35438799999996,
          "velocity": 0.6299212598425197,
          "duration": 0.6329109999999929
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 69.30375449999995,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 69.30375449999995,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 69.30375449999995,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 69.30375449999995,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 69.46198224999995,
          "velocity": 0.6141732283464567,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 69.46198224999995,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 69.46198224999995,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 69.46198224999995,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 69.62020999999994,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 69.62020999999994,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 69.62020999999994,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 69.62020999999994,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 70.56957649999994,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 70.56957649999994,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 70.56957649999994,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 70.56957649999994,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 70.72780424999993,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 70.72780424999993,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 70.72780424999993,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 70.72780424999993,
          "velocity": 0.7874015748031497,
          "duration": 0.15822774999999467
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 70.88603199999993,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 70.88603199999993,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 70.88603199999993,
          "velocity": 1,
          "duration": 0.6329109999999929
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 70.88603199999993,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 70.88603199999993,
          "velocity": 0.7874015748031497,
          "duration": 0.6329109999999929
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 71.51894299999992,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 71.51894299999992,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 71.51894299999992,
          "velocity": 0.9212598425196851,
          "duration": 0.10548516666666785
        },
        {
          "name": "G#3",
          "midi": 56,
          "time": 71.67717074999992,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "G#2",
          "midi": 44,
          "time": 71.67717074999992,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 71.67717074999992,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 71.99362624999992,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 71.99362624999992,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 71.99362624999992,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666666785
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 72.15185399999991,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "A2",
          "midi": 45,
          "time": 72.15185399999991,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 72.15185399999991,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 72.46830949999992,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 72.46830949999992,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 72.46830949999992,
          "velocity": 0.8740157480314961,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 72.62653724999991,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 72.62653724999991,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 72.62653724999991,
          "velocity": 0.8503937007874016,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 72.94299274999992,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 72.94299274999992,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 72.94299274999992,
          "velocity": 0.8110236220472441,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 73.10122049999991,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#2",
          "midi": 46,
          "time": 73.10122049999991,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 73.10122049999991,
          "velocity": 0.937007874015748,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 73.2594482499999,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B2",
          "midi": 47,
          "time": 73.2594482499999,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 73.2594482499999,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666666785
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 73.41108317708324,
          "velocity": 0.7952755905511811,
          "duration": 0.006592822916672958
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 73.41108317708324,
          "velocity": 1,
          "duration": 0.006592822916672958
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 73.77368843749991,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 73.77368843749991,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 73.77368843749991,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 73.77368843749991,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 73.80005972916658,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 73.80005972916658,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 74.26155733333324,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 74.26155733333324,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 74.29452144791658,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 74.29452144791658,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 74.29452144791658,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 74.29452144791658,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 74.5846056562499,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 74.5846056562499,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 74.59119847916658,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 74.59119847916658,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 74.59119847916658,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 74.59119847916658,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 75.14499560416658,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 75.14499560416658,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 75.16477407291659,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 75.16477407291659,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 75.19773818749992,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 75.19773818749992,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 75.39552287499993,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 75.39552287499993,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 75.52737933333327,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 75.52737933333327,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 75.52737933333327,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 75.52737933333327,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 75.56034344791661,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 75.56034344791661,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 75.56034344791661,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 75.56034344791661,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 76.30533243749996,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 76.30533243749996,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 76.30533243749996,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 76.30533243749996,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 76.33170372916662,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 76.33170372916662,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 76.79320133333329,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 76.79320133333329,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 76.82616544791662,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 76.82616544791662,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 76.82616544791662,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 76.82616544791662,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 77.11624965624995,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 77.11624965624995,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 77.12284247916662,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 77.12284247916662,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 77.12284247916662,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 77.12284247916662,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 77.67663960416662,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 77.67663960416662,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 77.69641807291663,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 77.69641807291663,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 77.72938218749997,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 77.72938218749997,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 77.92716687499997,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 77.92716687499997,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 78.05902333333331,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 78.05902333333331,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 78.05902333333331,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 78.05902333333331,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 78.09198744791665,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 78.09198744791665,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 78.09198744791665,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 78.09198744791665,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 78.718305625,
          "velocity": 0.1889763779527559,
          "duration": 0.3098626770833306
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 78.7578625625,
          "velocity": 1,
          "duration": 0.4680904270833395
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 78.77104820833333,
          "velocity": 1,
          "duration": 0.24393444791667207
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 78.83038361458333,
          "velocity": 1,
          "duration": 0.4483119583333348
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 79.28528839583333,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 79.3116596875,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 79.3116596875,
          "velocity": 1,
          "duration": 0.23074880208334037
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 79.33143815625,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 79.74678600000001,
          "velocity": 0.9921259842519685,
          "duration": 0.0857066979166774
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 79.76656446875002,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 79.78634293750002,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 79.83249269791669,
          "velocity": 0.984251968503937,
          "duration": 0.4351263125000031
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 80.27421183333337,
          "velocity": 1,
          "duration": 0.21756315624999445
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 80.30058312500003,
          "velocity": 1,
          "duration": 60.75945600000085
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 80.51814628125004,
          "velocity": 1,
          "duration": 0.6263181770833341
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 80.53792475000004,
          "velocity": 1,
          "duration": 0.731803343750002
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 80.55111039583338,
          "velocity": 1,
          "duration": 0.5999468854166707
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 81.01260800000004,
          "velocity": 1,
          "duration": 0.7318033437500162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 81.26313527083337,
          "velocity": 1,
          "duration": 0.2703057395833497
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 81.27632091666672,
          "velocity": 1,
          "duration": 0.2505272708333308
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 81.27632091666672,
          "velocity": 1,
          "duration": 0.21756315624999445
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 81.28950656250005,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 81.33565632291672,
          "velocity": 1,
          "duration": 0.4087550208333397
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 81.79715392708339,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 81.79715392708339,
          "velocity": 1,
          "duration": 0.3230483229166765
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 81.79715392708339,
          "velocity": 1,
          "duration": 0.25052727083334503
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 81.80374675000006,
          "velocity": 0.7874015748031497,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 82.25865153125007,
          "velocity": 0.8582677165354331,
          "duration": 0.5142401874999933
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 82.27843000000007,
          "velocity": 1,
          "duration": 0.4944617187499887
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 82.31798693750007,
          "velocity": 1,
          "duration": 0.725210520833329
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 82.79267018750006,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 83.05638310416673,
          "velocity": 0.8110236220472441,
          "duration": 0.7845459270833288
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 83.05638310416673,
          "velocity": 1,
          "duration": 0.11867081249999956
        },
        {
          "name": "F4",
          "midi": 65,
          "time": 83.07616157291673,
          "velocity": 1,
          "duration": 0.13844928124999
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 83.17505391666673,
          "velocity": 1,
          "duration": 0.7779531041666559
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 83.2212036770834,
          "velocity": 1,
          "duration": 0.6197253541666612
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 83.90026443750006,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 83.90026443750006,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 83.90026443750006,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 83.90026443750006,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 83.92663572916672,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 83.92663572916672,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 84.38813333333339,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 84.38813333333339,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 84.42109744791672,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 84.42109744791672,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 84.42109744791672,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 84.42109744791672,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 84.71118165625005,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 84.71118165625005,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 84.71777447916672,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 84.71777447916672,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 84.71777447916672,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 84.71777447916672,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 85.27157160416672,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 85.27157160416672,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 85.29135007291673,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 85.29135007291673,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 85.32431418750006,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 85.32431418750006,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 85.52209887500007,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 85.52209887500007,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 85.65395533333341,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 85.65395533333341,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 85.65395533333341,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 85.65395533333341,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 85.68691944791675,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 85.68691944791675,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 85.68691944791675,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 85.68691944791675,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 86.4319084375001,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 86.4319084375001,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 86.4319084375001,
          "velocity": 0.3543307086614173,
          "duration": 0.336233968749994
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 86.4319084375001,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 86.45827972916676,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 86.45827972916676,
          "velocity": 1,
          "duration": 0.4614976041666665
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 86.91977733333343,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 86.91977733333343,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 86.95274144791676,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 86.95274144791676,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 86.95274144791676,
          "velocity": 1,
          "duration": 0.3691980833333304
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 86.95274144791676,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 87.24282565625009,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 87.24282565625009,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 87.24941847916676,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 87.24941847916676,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 87.24941847916676,
          "velocity": 1,
          "duration": 0.5472043020833297
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 87.24941847916676,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000027
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 87.80321560416677,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 87.80321560416677,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 87.82299407291677,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 87.82299407291677,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 87.85595818750011,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 87.85595818750011,
          "velocity": 1,
          "duration": 0.36260526041668584
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 88.05374287500011,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 88.05374287500011,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 88.18559933333346,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 88.18559933333346,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 88.18559933333346,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 88.18559933333346,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 88.2185634479168,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 88.2185634479168,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 88.2185634479168,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 88.2185634479168,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 88.60754000000014,
          "velocity": 0.5984251968503937,
          "duration": 0.31645550000000355
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 88.60754000000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 88.60754000000014,
          "velocity": 0.7007874015748031,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 88.60754000000014,
          "velocity": 0.7480314960629921,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 88.60754000000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 89.08222325000014,
          "velocity": 0.5984251968503937,
          "duration": 0.31645550000000355
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 89.08222325000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 89.08222325000014,
          "velocity": 0.7007874015748031,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 89.08222325000014,
          "velocity": 0.7480314960629921,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 89.08222325000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 89.55690650000014,
          "velocity": 0.5984251968503937,
          "duration": 0.31645550000000355
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 89.55690650000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 89.55690650000014,
          "velocity": 0.7007874015748031,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 89.55690650000014,
          "velocity": 0.7480314960629921,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 89.55690650000014,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 90.03158975000014,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 90.03158975000014,
          "velocity": 0.9763779527559056,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 90.03158975000014,
          "velocity": 1,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 90.03158975000014,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 90.03158975000014,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 90.18981750000013,
          "velocity": 0.30708661417322836,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 90.18981750000013,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666666785
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 90.18981750000013,
          "velocity": 0.33070866141732286,
          "duration": 0.10548516666666785
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 90.34804525000013,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666666785
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 90.34804525000013,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666666785
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 90.34804525000013,
          "velocity": 0.84251968503937,
          "duration": 0.10548516666666785
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 90.34804525000013,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666666785
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 90.34804525000013,
          "velocity": 0.5590551181102362,
          "duration": 0.10548516666666785
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 90.50627300000012,
          "velocity": 0.5039370078740157,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 90.50627300000012,
          "velocity": 0.9291338582677166,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 90.50627300000012,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 90.50627300000012,
          "velocity": 0.5196850393700787,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 90.50627300000012,
          "velocity": 0.49606299212598426,
          "duration": 0.2109703333333357
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 90.82272850000012,
          "velocity": 0.5354330708661418,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 90.82272850000012,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 90.82272850000012,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 90.82272850000012,
          "velocity": 0.7007874015748031,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 90.82272850000012,
          "velocity": 0.84251968503937,
          "duration": 0.2109703333333357
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 91.13918400000013,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 91.13918400000013,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 91.13918400000013,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 91.13918400000013,
          "velocity": 0.952755905511811,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 91.61386725000013,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 91.61386725000013,
          "velocity": 0.84251968503937,
          "duration": 0.31645550000000355
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 91.61386725000013,
          "velocity": 0.84251968503937,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 91.61386725000013,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 92.08855050000012,
          "velocity": 1,
          "duration": 0.8438813333333286
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 92.08855050000012,
          "velocity": 0.8188976377952756,
          "duration": 0.8438813333333286
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 92.08855050000012,
          "velocity": 0.9291338582677166,
          "duration": 0.8438813333333286
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 92.08855050000012,
          "velocity": 1,
          "duration": 0.8438813333333286
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 93.67082800000011,
          "velocity": 1,
          "duration": 0.3362339687500082
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 93.67082800000011,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 93.67742082291679,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 94.68612272916678,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 94.68612272916678,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 94.69271555208346,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 94.69271555208346,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 94.83116483333346,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 94.97620693750014,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 94.98939258333347,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 94.99598540625014,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 95.91898061458349,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 95.92557343750016,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 95.92557343750016,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 95.92557343750016,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 96.09039401041683,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 96.18928635416682,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 96.24202893750015,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 97.19139543750016,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 97.19139543750016,
          "velocity": 1,
          "duration": 0.2571200937500038
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 97.19139543750016,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 97.2243595520835,
          "velocity": 1,
          "duration": 0.23074880208334037
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 97.32984471875017,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 97.50125811458351,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 97.51444376041684,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 97.82430643750017,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 97.82430643750017,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 97.82430643750017,
          "velocity": 1,
          "duration": 0.784545927083343
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 97.8572705520835,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 97.96275571875017,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 98.1341691145835,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 98.14735476041683,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 98.45721743750018,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 98.45721743750018,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 98.45721743750018,
          "velocity": 1,
          "duration": 0.5735755937500073
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 98.49018155208351,
          "velocity": 1,
          "duration": 0.27689856250000844
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 98.59566671875018,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 98.73411600000018,
          "velocity": 1,
          "duration": 0.5076473645833346
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 98.73411600000018,
          "velocity": 1,
          "duration": 0.3362339687500082
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 98.73411600000018,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 98.74070882291686,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 99.74941072916685,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 99.74941072916685,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 99.75600355208353,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 99.75600355208353,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 99.89445283333353,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 100.03949493750021,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 100.05268058333354,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 100.05927340625021,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 100.98226861458356,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 100.98886143750023,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 100.98886143750023,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 101.1536820104169,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 101.2525743541669,
          "velocity": 1,
          "duration": 0.013185645833331705
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 101.30531693750022,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 102.25468343750023,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 102.2612762604169,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 102.53158200000024,
          "velocity": 1,
          "duration": 0.4746832499999982
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 102.53158200000024,
          "velocity": 1,
          "duration": 0.4483119583333206
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 102.53158200000024,
          "velocity": 1,
          "duration": 0.46809042708332527
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 102.53158200000024,
          "velocity": 1,
          "duration": 0.4351263124999889
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 102.99967242708357,
          "velocity": 1,
          "duration": 0.4812760729166712
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 102.99967242708357,
          "velocity": 0.7874015748031497,
          "duration": 0.48786889583334414
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 102.99967242708357,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 102.99967242708357,
          "velocity": 1,
          "duration": 0.41534784375001266
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 102.99967242708357,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 103.51391261458357,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 103.51391261458357,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 103.5270982604169,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 103.5270982604169,
          "velocity": 1,
          "duration": 0.3428267916666812
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 103.5270982604169,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 103.53369108333358,
          "velocity": 1,
          "duration": 0.30326985416667185
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 103.79740400000024,
          "velocity": 1,
          "duration": 0.2966770312500131
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 103.79740400000024,
          "velocity": 1,
          "duration": 0.3362339687500224
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 103.79740400000024,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 103.80399682291691,
          "velocity": 1,
          "duration": 0.3230483229166765
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 104.81269872916693,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 104.81269872916693,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 104.8192915520836,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 104.8192915520836,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 104.9577408333336,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 105.10278293750028,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 105.11596858333361,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 105.12256140625028,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 106.04555661458363,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 106.0521494375003,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 106.0521494375003,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 106.0521494375003,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 106.21697001041697,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 106.31586235416697,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 106.3686049375003,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 107.3179714375003,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 107.3179714375003,
          "velocity": 1,
          "duration": 0.2571200937500038
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 107.3179714375003,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 107.35093555208364,
          "velocity": 1,
          "duration": 0.23074880208334037
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 107.45642071875031,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 107.62783411458365,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 107.64101976041698,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 107.95088243750031,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 107.95088243750031,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 107.95088243750031,
          "velocity": 1,
          "duration": 0.784545927083343
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 107.98384655208365,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 108.08933171875032,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 108.26074511458364,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 108.27393076041697,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 108.58379343750032,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 108.58379343750032,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 108.58379343750032,
          "velocity": 1,
          "duration": 0.5735755937500073
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 108.61675755208366,
          "velocity": 1,
          "duration": 0.27689856250000844
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 108.72224271875032,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 108.86069200000033,
          "velocity": 1,
          "duration": 0.5076473645833346
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 108.86069200000033,
          "velocity": 1,
          "duration": 0.3362339687500082
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 108.86069200000033,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 108.867284822917,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 109.875986729167,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 109.875986729167,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 109.88257955208367,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 109.88257955208367,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 110.02102883333367,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 110.16607093750035,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 110.17925658333368,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 110.18584940625036,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 111.1088446145837,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 111.11543743750038,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 111.11543743750038,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 111.11543743750038,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 111.28025801041704,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 111.37915035416704,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 111.43189293750036,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 112.38125943750038,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 112.38785226041705,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 112.65815800000038,
          "velocity": 1,
          "duration": 0.4746832499999982
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 112.65815800000038,
          "velocity": 1,
          "duration": 0.4483119583333206
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 112.65815800000038,
          "velocity": 1,
          "duration": 0.46809042708332527
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 112.65815800000038,
          "velocity": 1,
          "duration": 0.4351263124999889
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 113.12624842708371,
          "velocity": 1,
          "duration": 0.4812760729166712
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 113.12624842708371,
          "velocity": 0.7874015748031497,
          "duration": 0.48786889583334414
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 113.12624842708371,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 113.12624842708371,
          "velocity": 1,
          "duration": 0.41534784375001266
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 113.12624842708371,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 113.64048861458372,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 113.64048861458372,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 113.65367426041705,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 113.65367426041705,
          "velocity": 1,
          "duration": 0.3428267916666812
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 113.65367426041705,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 113.66026708333372,
          "velocity": 1,
          "duration": 0.30326985416667185
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 113.92398000000038,
          "velocity": 1,
          "duration": 0.2966770312500131
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 113.92398000000038,
          "velocity": 1,
          "duration": 0.3362339687500224
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 113.92398000000038,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 113.93057282291706,
          "velocity": 1,
          "duration": 0.3230483229166765
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 114.93927472916707,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 114.93927472916707,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 114.94586755208374,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 114.94586755208374,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 115.08431683333374,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 115.22935893750042,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 115.24254458333375,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 115.24913740625043,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 116.17213261458377,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 116.17872543750045,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 116.17872543750045,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 116.17872543750045,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 116.34354601041711,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 116.44243835416711,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 116.49518093750044,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 117.44454743750045,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 117.44454743750045,
          "velocity": 1,
          "duration": 0.2571200937500038
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 117.44454743750045,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 117.47751155208378,
          "velocity": 1,
          "duration": 0.23074880208334037
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 117.58299671875045,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 117.75441011458379,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 117.76759576041712,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 118.07745843750045,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 118.07745843750045,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 118.07745843750045,
          "velocity": 1,
          "duration": 0.784545927083343
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 118.11042255208379,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 118.21590771875046,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 118.38732111458378,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 118.40050676041712,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 118.71036943750046,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 118.71036943750046,
          "velocity": 1,
          "duration": 0.586761239583339
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 118.71036943750046,
          "velocity": 1,
          "duration": 0.5735755937500073
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 118.7433335520838,
          "velocity": 1,
          "duration": 0.27689856250000844
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 118.84881871875046,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 118.98726800000047,
          "velocity": 1,
          "duration": 0.5076473645833346
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 118.98726800000047,
          "velocity": 1,
          "duration": 0.3362339687500082
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 118.98726800000047,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 118.99386082291714,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 120.00256272916714,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 120.00256272916714,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 120.00915555208381,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 120.00915555208381,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 120.14760483333382,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 120.29264693750049,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 120.30583258333382,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 120.3124254062505,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 121.23542061458384,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 121.24201343750052,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 121.24201343750052,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 121.24201343750052,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 121.40683401041719,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 121.50572635416718,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 121.5584689375005,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 122.50783543750052,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 122.51442826041719,
          "velocity": 1,
          "duration": 0.3230483229166623
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 122.78473400000053,
          "velocity": 1,
          "duration": 0.4746832499999982
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 122.78473400000053,
          "velocity": 1,
          "duration": 0.4483119583333206
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 122.78473400000053,
          "velocity": 1,
          "duration": 0.46809042708332527
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 122.78473400000053,
          "velocity": 1,
          "duration": 0.4351263124999889
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 123.25282442708385,
          "velocity": 1,
          "duration": 0.4812760729166712
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 123.25282442708385,
          "velocity": 0.7874015748031497,
          "duration": 0.48786889583334414
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 123.25282442708385,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 123.25282442708385,
          "velocity": 1,
          "duration": 0.41534784375001266
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 123.25282442708385,
          "velocity": 1,
          "duration": 0.44171913541667607
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 123.76706461458386,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 123.76706461458386,
          "velocity": 1,
          "duration": 0.31645550000000355
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 123.78025026041719,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 123.78025026041719,
          "velocity": 1,
          "duration": 0.3428267916666812
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 123.78025026041719,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 123.78684308333386,
          "velocity": 1,
          "duration": 0.30326985416667185
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 124.05055600000053,
          "velocity": 1,
          "duration": 0.2966770312500131
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 124.05055600000053,
          "velocity": 1,
          "duration": 0.3362339687500224
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 124.05055600000053,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 124.0571488229172,
          "velocity": 1,
          "duration": 0.3230483229166765
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 125.06585072916721,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 125.06585072916721,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 125.07244355208388,
          "velocity": 1,
          "duration": 0.6658751145833719
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 125.07244355208388,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312500131
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 125.21089283333389,
          "velocity": 1,
          "duration": 0.14504210416667718
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 125.35593493750056,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 125.3691205833339,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 125.37571340625057,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 126.29870861458392,
          "velocity": 1,
          "duration": 0.6395038229166659
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 126.30530143750059,
          "velocity": 0.9921259842519685,
          "duration": 0.6526894687499976
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 126.30530143750059,
          "velocity": 1,
          "duration": 0.15822774999999467
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 126.30530143750059,
          "velocity": 1,
          "duration": 0.2768985624999942
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 126.47012201041726,
          "velocity": 1,
          "duration": 0.48786889583332993
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 126.56901435416725,
          "velocity": 1,
          "duration": 0.6131325312500024
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 126.62175693750058,
          "velocity": 0.9606299212598425,
          "duration": 0.31645550000000355
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 127.57112343750059,
          "velocity": 1,
          "duration": 0.13185645833333126
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 127.57112343750059,
          "velocity": 1,
          "duration": 0.2571200937500038
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 127.57112343750059,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 127.60408755208393,
          "velocity": 1,
          "duration": 0.23074880208334037
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 127.7095727187506,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 127.88098611458393,
          "velocity": 1,
          "duration": 0.27030573958332127
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 127.89417176041727,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 128.2040344375006,
          "velocity": 1,
          "duration": 0.13185645833334547
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 128.2040344375006,
          "velocity": 1,
          "duration": 0.5867612395833532
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 128.2040344375006,
          "velocity": 1,
          "duration": 0.7845459270833999
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 128.23699855208395,
          "velocity": 1,
          "duration": 0.27689856250000844
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 128.34248371875063,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 128.51389711458395,
          "velocity": 1,
          "duration": 0.2703057395833355
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 128.5270827604173,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 128.83694543750065,
          "velocity": 1,
          "duration": 0.13185645833334547
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 128.83694543750065,
          "velocity": 1,
          "duration": 0.5867612395833817
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 128.83694543750065,
          "velocity": 1,
          "duration": 0.5735755937500358
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 128.86990955208398,
          "velocity": 1,
          "duration": 0.27689856250003686
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 128.97539471875066,
          "velocity": 1,
          "duration": 0.4549047812500362
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 129.11384400000068,
          "velocity": 1,
          "duration": 0.507647364583363
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 129.11384400000068,
          "velocity": 1,
          "duration": 0.33623396875003664
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 129.11384400000068,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 129.12043682291736,
          "velocity": 1,
          "duration": 0.3230483229166907
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 130.12913872916738,
          "velocity": 1,
          "duration": 0.283491385416653
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 130.12913872916738,
          "velocity": 1,
          "duration": 0.14504210416666297
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 130.13573155208405,
          "velocity": 1,
          "duration": 0.665875114583315
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 130.13573155208405,
          "velocity": 0.952755905511811,
          "duration": 0.2966770312499989
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 130.27418083333404,
          "velocity": 1,
          "duration": 0.14504210416666297
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 130.4192229375007,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 130.43240858333405,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 130.43900140625072,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 131.36199661458403,
          "velocity": 1,
          "duration": 0.6395038229167085
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 131.3685894375007,
          "velocity": 0.9921259842519685,
          "duration": 0.652689468750026
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 131.3685894375007,
          "velocity": 1,
          "duration": 0.15822775000000888
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 131.3685894375007,
          "velocity": 1,
          "duration": 0.27689856250003686
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 131.53341001041738,
          "velocity": 1,
          "duration": 0.48786889583334414
        },
        {
          "name": "E2",
          "midi": 40,
          "time": 131.6323023541674,
          "velocity": 1,
          "duration": 0.6131325312499882
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 131.68504493750075,
          "velocity": 0.9606299212598425,
          "duration": 0.31645549999998934
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 132.63441143750072,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 132.6410042604174,
          "velocity": 1,
          "duration": 0.3230483229166907
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 132.91131000000073,
          "velocity": 1,
          "duration": 0.47468325000002665
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 132.91131000000073,
          "velocity": 1,
          "duration": 0.44831195833336324
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 132.91131000000073,
          "velocity": 1,
          "duration": 0.4680904270833537
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 132.91131000000073,
          "velocity": 1,
          "duration": 0.4351263125000173
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 133.37940042708408,
          "velocity": 1,
          "duration": 0.4812760729166712
        },
        {
          "name": "G#4",
          "midi": 68,
          "time": 133.37940042708408,
          "velocity": 0.7874015748031497,
          "duration": 0.48786889583334414
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 133.37940042708408,
          "velocity": 1,
          "duration": 0.44171913541666186
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 133.37940042708408,
          "velocity": 1,
          "duration": 0.41534784374999845
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 133.37940042708408,
          "velocity": 1,
          "duration": 0.44171913541666186
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 133.8936406145841,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 133.8936406145841,
          "velocity": 1,
          "duration": 0.31645550000001776
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 133.90682626041743,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 133.90682626041743,
          "velocity": 1,
          "duration": 0.3428267916666812
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 133.90682626041743,
          "velocity": 1,
          "duration": 0.3098626770833448
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 133.9134190833341,
          "velocity": 1,
          "duration": 0.30326985416667185
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 134.5331444375008,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 134.5331444375008,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 134.5331444375008,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 134.5331444375008,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 134.55951572916746,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 134.55951572916746,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 135.02101333333414,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 135.02101333333414,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 135.05397744791748,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 135.05397744791748,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 135.05397744791748,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 135.05397744791748,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 135.3440616562508,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 135.3440616562508,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 135.35065447916747,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 135.35065447916747,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 135.35065447916747,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 135.35065447916747,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 135.9044516041675,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 135.9044516041675,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 135.92423007291748,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 135.92423007291748,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 135.95719418750082,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 135.95719418750082,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 136.15497887500084,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 136.15497887500084,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 136.28683533333418,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 136.28683533333418,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 136.28683533333418,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 136.28683533333418,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 136.31979944791752,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 136.31979944791752,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 136.31979944791752,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 136.31979944791752,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 137.06478843750085,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 137.06478843750085,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 137.06478843750085,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 137.06478843750085,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 137.09115972916752,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 137.09115972916752,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 137.5526573333342,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 137.5526573333342,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 137.58562144791753,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 137.58562144791753,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 137.58562144791753,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 137.58562144791753,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 137.87570565625086,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 137.87570565625086,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 137.88229847916753,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 137.88229847916753,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 137.88229847916753,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 137.88229847916753,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 138.43609560416755,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 138.43609560416755,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 138.45587407291754,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 138.45587407291754,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 138.48883818750087,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 138.48883818750087,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 138.6866228750009,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 138.6866228750009,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 138.81847933333424,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 138.81847933333424,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 138.81847933333424,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 138.81847933333424,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 138.85144344791757,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 138.85144344791757,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 138.85144344791757,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 138.85144344791757,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 139.4777616250009,
          "velocity": 0.1889763779527559,
          "duration": 0.30986267708337323
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 139.51731856250092,
          "velocity": 1,
          "duration": 0.4680904270833537
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 139.53050420833426,
          "velocity": 1,
          "duration": 0.24393444791667207
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 139.58983961458426,
          "velocity": 1,
          "duration": 0.4483119583333348
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 140.04474439583427,
          "velocity": 1,
          "duration": 0.45490478124997935
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 140.07111568750094,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 140.07111568750094,
          "velocity": 1,
          "duration": 0.23074880208332615
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 140.09089415625093,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 140.50624200000092,
          "velocity": 0.9921259842519685,
          "duration": 0.08570669791663477
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 140.52602046875091,
          "velocity": 1,
          "duration": 0.44171913541663343
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 140.5457989375009,
          "velocity": 1,
          "duration": 0.7252105208333148
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 140.59194869791756,
          "velocity": 0.984251968503937,
          "duration": 0.4351263124999889
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 141.03366783333422,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 141.06003912500088,
          "velocity": 1,
          "duration": 24.498929958332525
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 141.2776022812509,
          "velocity": 1,
          "duration": 0.6263181770833626
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 141.29738075000088,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 141.31056639583423,
          "velocity": 1,
          "duration": 0.5999468854166992
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 141.7720640000009,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 142.02259127083425,
          "velocity": 1,
          "duration": 0.2703057395833639
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 142.0357769166676,
          "velocity": 1,
          "duration": 0.25052727083334503
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 142.0357769166676,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 142.04896256250095,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 142.0951123229176,
          "velocity": 1,
          "duration": 0.4087550208333539
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 142.55660992708428,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 142.55660992708428,
          "velocity": 1,
          "duration": 0.3230483229166907
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 142.55660992708428,
          "velocity": 1,
          "duration": 0.25052727083334503
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 142.56320275000095,
          "velocity": 0.7874015748031497,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 143.01810753125096,
          "velocity": 0.8582677165354331,
          "duration": 0.5142401875000076
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 143.03788600000095,
          "velocity": 1,
          "duration": 0.4944617187500171
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 143.07744293750096,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 143.55212618750096,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 143.81583910416765,
          "velocity": 0.8110236220472441,
          "duration": 0.784545927083343
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 143.81583910416765,
          "velocity": 1,
          "duration": 0.11867081249999956
        },
        {
          "name": "F4",
          "midi": 65,
          "time": 143.83561757291764,
          "velocity": 1,
          "duration": 0.13844928125001843
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 143.93450991666765,
          "velocity": 1,
          "duration": 0.7779531041666701
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 143.98065967708433,
          "velocity": 1,
          "duration": 0.6197253541666612
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 144.659720437501,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687499798
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 144.659720437501,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 144.659720437501,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687499798
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 144.659720437501,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 144.68609172916766,
          "velocity": 1,
          "duration": 0.4614976041666523
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 144.68609172916766,
          "velocity": 1,
          "duration": 0.4614976041666523
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 145.1475893333343,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 145.1475893333343,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 145.18055344791765,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 145.18055344791765,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 145.18055344791765,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 145.18055344791765,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 145.47063765625097,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 145.47063765625097,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 145.47723047916764,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 145.47723047916764,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 145.47723047916764,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 145.47723047916764,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 146.03102760416766,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 146.03102760416766,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 146.05080607291765,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 146.05080607291765,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 146.083770187501,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 146.083770187501,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 146.281554875001,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 146.281554875001,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 146.41341133333435,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 146.41341133333435,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 146.41341133333435,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 146.41341133333435,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 146.4463754479177,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 146.4463754479177,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 146.4463754479177,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 146.4463754479177,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 147.19136443750102,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 147.19136443750102,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 147.19136443750102,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 147.19136443750102,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 147.21773572916769,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 147.21773572916769,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 147.67923333333437,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 147.67923333333437,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 147.7121974479177,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 147.7121974479177,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 147.7121974479177,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 147.7121974479177,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 148.00228165625103,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 148.00228165625103,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 148.0088744791677,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 148.0088744791677,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 148.0088744791677,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 148.0088744791677,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 148.56267160416772,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 148.56267160416772,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 148.5824500729177,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 148.5824500729177,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 148.61541418750105,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 148.61541418750105,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 148.81319887500106,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 148.81319887500106,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 148.9450553333344,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 148.9450553333344,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 148.9450553333344,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 148.9450553333344,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 148.97801944791775,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 148.97801944791775,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 148.97801944791775,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 148.97801944791775,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 149.36699600000108,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999998934
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 149.36699600000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 149.36699600000108,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 149.36699600000108,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999998934
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 149.36699600000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 149.84167925000108,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999998934
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 149.84167925000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 149.84167925000108,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 149.84167925000108,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999998934
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 149.84167925000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 150.31636250000108,
          "velocity": 0.5984251968503937,
          "duration": 0.31645549999998934
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 150.31636250000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 150.31636250000108,
          "velocity": 0.7007874015748031,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 150.31636250000108,
          "velocity": 0.7480314960629921,
          "duration": 0.31645549999998934
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 150.31636250000108,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 150.79104575000108,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 150.79104575000108,
          "velocity": 0.9763779527559056,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 150.79104575000108,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 150.79104575000108,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 150.79104575000108,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 150.94927350000106,
          "velocity": 0.30708661417322836,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 150.94927350000106,
          "velocity": 0.5118110236220472,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#3",
          "midi": 49,
          "time": 150.94927350000106,
          "velocity": 0.33070866141732286,
          "duration": 0.10548516666665364
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 151.10750125000104,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 151.10750125000104,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 151.10750125000104,
          "velocity": 0.84251968503937,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 151.10750125000104,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 151.10750125000104,
          "velocity": 0.5590551181102362,
          "duration": 0.10548516666665364
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 151.26572900000102,
          "velocity": 0.5039370078740157,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 151.26572900000102,
          "velocity": 0.9291338582677166,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 151.26572900000102,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 151.26572900000102,
          "velocity": 0.5196850393700787,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 151.26572900000102,
          "velocity": 0.49606299212598426,
          "duration": 0.2109703333333357
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 151.582184500001,
          "velocity": 0.5354330708661418,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 151.582184500001,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 151.582184500001,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 151.582184500001,
          "velocity": 0.7007874015748031,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 151.582184500001,
          "velocity": 0.84251968503937,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 151.898640000001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 151.898640000001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 151.898640000001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 151.898640000001,
          "velocity": 0.9291338582677166,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 152.373323250001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 152.373323250001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 152.373323250001,
          "velocity": 1,
          "duration": 0.31645549999998934
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 152.373323250001,
          "velocity": 0.8503937007874016,
          "duration": 0.31645549999998934
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 152.848006500001,
          "velocity": 1,
          "duration": 1.2658219999999858
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 152.848006500001,
          "velocity": 0.9606299212598425,
          "duration": 1.2658219999999858
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 152.848006500001,
          "velocity": 0.7874015748031497,
          "duration": 1.2658219999999858
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 152.848006500001,
          "velocity": 0.5354330708661418,
          "duration": 1.2658219999999858
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 154.43028400000097,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 154.43028400000097,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 154.58851175000095,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 154.58851175000095,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 154.74673950000093,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 154.74673950000093,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 154.9049672500009,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 154.9049672500009,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 155.0631950000009,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 155.0631950000009,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 155.22142275000087,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 155.22142275000087,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 155.53787825000086,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 155.53787825000086,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 155.69610600000084,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 155.69610600000084,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 156.01256150000083,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 156.01256150000083,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 156.1707892500008,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 156.1707892500008,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 156.4872447500008,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 156.4872447500008,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 156.64547250000078,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 156.64547250000078,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 156.96192800000077,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 156.96192800000077,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 157.12015575000075,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 157.12015575000075,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 157.27838350000073,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 157.27838350000073,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 157.4366112500007,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 157.4366112500007,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 157.5948390000007,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 157.5948390000007,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 157.75306675000067,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 157.75306675000067,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 158.06952225000066,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 158.06952225000066,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 158.22775000000064,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 158.22775000000064,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 158.54420550000063,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 158.54420550000063,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 158.7024332500006,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 158.7024332500006,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 159.0188887500006,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 159.0188887500006,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 159.17711650000058,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 159.17711650000058,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 159.49357200000057,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 159.49357200000057,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 159.65179975000055,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 159.65179975000055,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 159.81002750000053,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 159.81002750000053,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 159.9682552500005,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 159.9682552500005,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 160.1264830000005,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 160.1264830000005,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 160.28471075000047,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 160.28471075000047,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 160.60116625000046,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 160.60116625000046,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 160.75939400000044,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 160.75939400000044,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 161.07584950000043,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 161.07584950000043,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 161.2340772500004,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 161.2340772500004,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 161.5505327500004,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 161.5505327500004,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 161.70876050000038,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 161.70876050000038,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 162.02521600000037,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 162.02521600000037,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 162.18344375000035,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 162.18344375000035,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 162.34167150000033,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 162.34167150000033,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 162.4998992500003,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 162.4998992500003,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 162.6581270000003,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 162.6581270000003,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 162.81635475000027,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 162.81635475000027,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 163.13281025000026,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 163.13281025000026,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 163.29103800000024,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 163.29103800000024,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 163.60749350000023,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 163.60749350000023,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 163.7657212500002,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 163.7657212500002,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 164.0821767500002,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 164.0821767500002,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 164.24040450000018,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 164.24040450000018,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 164.55686000000017,
          "velocity": 0.7637795275590551,
          "duration": 0.10548516666665364
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 164.55686000000017,
          "velocity": 0.7637795275590551,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 164.71508775000015,
          "velocity": 0.9291338582677166,
          "duration": 0.10548516666665364
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 164.71508775000015,
          "velocity": 0.9291338582677166,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 164.87331550000013,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 164.87331550000013,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 165.0315432500001,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 165.0315432500001,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 165.1897710000001,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 165.1897710000001,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 165.34799875000007,
          "velocity": 0.7637795275590551,
          "duration": 2.7426143333331368
        },
        {
          "name": "C5",
          "midi": 72,
          "time": 165.34799875000007,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 165.66445425000006,
          "velocity": 0.7795275590551181,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 165.66445425000006,
          "velocity": 0.7795275590551181,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 165.82268200000004,
          "velocity": 0.6929133858267716,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 165.82268200000004,
          "velocity": 0.6929133858267716,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 166.13913750000003,
          "velocity": 0.9133858267716536,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 166.13913750000003,
          "velocity": 0.9133858267716536,
          "duration": 0.10548516666665364
        },
        {
          "name": "D#4",
          "midi": 63,
          "time": 166.29736525,
          "velocity": 0.6299212598425197,
          "duration": 0.2109703333333357
        },
        {
          "name": "D#5",
          "midi": 75,
          "time": 166.29736525,
          "velocity": 0.6299212598425197,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 166.61382075,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 166.61382075,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 166.77204849999998,
          "velocity": 0.7559055118110236,
          "duration": 0.2109703333333357
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 166.77204849999998,
          "velocity": 0.7559055118110236,
          "duration": 0.2109703333333357
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 167.08850399999997,
          "velocity": 0.7637795275590551,
          "duration": 0.10548516666665364
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 167.08850399999997,
          "velocity": 0.7637795275590551,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 167.24673174999995,
          "velocity": 0.9291338582677166,
          "duration": 0.10548516666665364
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 167.24673174999995,
          "velocity": 0.9291338582677166,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 167.40495949999993,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 167.40495949999993,
          "velocity": 0.952755905511811,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 167.5631872499999,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 167.5631872499999,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 167.7214149999999,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 167.7214149999999,
          "velocity": 1,
          "duration": 0.10548516666665364
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 167.87964274999987,
          "velocity": 0.7637795275590551,
          "duration": 13.686700374999617
        },
        {
          "name": "C5",
          "midi": 72,
          "time": 167.87964274999987,
          "velocity": 0.7637795275590551,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 168.19609824999986,
          "velocity": 0.7795275590551181,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 168.19609824999986,
          "velocity": 0.7795275590551181,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 168.35432599999984,
          "velocity": 0.6929133858267716,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 168.35432599999984,
          "velocity": 0.6929133858267716,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 168.67078149999983,
          "velocity": 0.9133858267716536,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 168.67078149999983,
          "velocity": 0.9133858267716536,
          "duration": 0.10548516666665364
        },
        {
          "name": "D#4",
          "midi": 63,
          "time": 168.8290092499998,
          "velocity": 0.6299212598425197,
          "duration": 0.2109703333333357
        },
        {
          "name": "D#5",
          "midi": 75,
          "time": 168.8290092499998,
          "velocity": 0.6299212598425197,
          "duration": 0.2109703333333357
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 169.1454647499998,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 169.1454647499998,
          "velocity": 0.8582677165354331,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 169.30369249999978,
          "velocity": 0.7559055118110236,
          "duration": 0.2109703333333357
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 169.30369249999978,
          "velocity": 0.7559055118110236,
          "duration": 0.2109703333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 169.62014799999977,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 169.62014799999977,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 169.62014799999977,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 169.77837574999975,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 169.77837574999975,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 169.77837574999975,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 169.93660349999973,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 169.93660349999973,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 169.93660349999973,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 170.09483124999971,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 170.09483124999971,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 170.09483124999971,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 170.2530589999997,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 170.2530589999997,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 170.2530589999997,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 170.41128674999968,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 170.41128674999968,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 170.41128674999968,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 170.72774224999966,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 170.72774224999966,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 170.72774224999966,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 170.88596999999965,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 170.88596999999965,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 170.88596999999965,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.20242549999963,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.20242549999963,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 171.20242549999963,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 171.36065324999961,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 171.36065324999961,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 171.36065324999961,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.6771087499996,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.6771087499996,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 171.6771087499996,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.83533649999958,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 171.83533649999958,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 171.83533649999958,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 172.15179199999957,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 172.15179199999957,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 172.15179199999957,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 172.31001974999955,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 172.31001974999955,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 172.31001974999955,
          "velocity": 0.8188976377952756,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 172.46824749999953,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 172.46824749999953,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 172.46824749999953,
          "velocity": 0.8661417322834646,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 172.62647524999952,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 172.62647524999952,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 172.62647524999952,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 172.7847029999995,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#4",
          "midi": 61,
          "time": 172.7847029999995,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 172.7847029999995,
          "velocity": 0.8503937007874016,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 172.94293074999948,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 172.94293074999948,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 172.94293074999948,
          "velocity": 0.7480314960629921,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 173.25938624999947,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 173.25938624999947,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 173.25938624999947,
          "velocity": 0.6141732283464567,
          "duration": 0.10548516666665364
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 173.41761399999945,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 173.41761399999945,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 173.41761399999945,
          "velocity": 0.6692913385826772,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 173.73406949999944,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 173.73406949999944,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 173.73406949999944,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 173.89229724999942,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 173.89229724999942,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "A#4",
          "midi": 70,
          "time": 173.89229724999942,
          "velocity": 0.6456692913385826,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 174.2087527499994,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 174.2087527499994,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 174.2087527499994,
          "velocity": 0.5433070866141733,
          "duration": 0.10548516666665364
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 174.36698049999939,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 174.36698049999939,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 174.36698049999939,
          "velocity": 0.9606299212598425,
          "duration": 0.2109703333333357
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 175.0394484374994,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 175.0394484374994,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 175.0394484374994,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 175.0394484374994,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 175.06581972916607,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 175.06581972916607,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 175.52731733333275,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 175.52731733333275,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 175.56028144791608,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 175.56028144791608,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 175.56028144791608,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 175.56028144791608,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 175.8503656562494,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 175.8503656562494,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 175.85695847916608,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 175.85695847916608,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 175.85695847916608,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 175.85695847916608,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 176.4107556041661,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 176.4107556041661,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 176.4305340729161,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 176.4305340729161,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 176.46349818749943,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 176.46349818749943,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 176.66128287499944,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 176.66128287499944,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 176.7931393333328,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 176.7931393333328,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 176.7931393333328,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 176.7931393333328,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 176.82610344791613,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 176.82610344791613,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 176.82610344791613,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 176.82610344791613,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 177.57109243749946,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 177.57109243749946,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 177.57109243749946,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 177.57109243749946,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 177.59746372916612,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 177.59746372916612,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 178.0589613333328,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 178.0589613333328,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 178.09192544791614,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 178.09192544791614,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 178.09192544791614,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 178.09192544791614,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 178.38200965624947,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 178.38200965624947,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 178.38860247916614,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 178.38860247916614,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 178.38860247916614,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 178.38860247916614,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 178.94239960416616,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 178.94239960416616,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 178.96217807291615,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 178.96217807291615,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 178.99514218749948,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 178.99514218749948,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 179.1929268749995,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 179.1929268749995,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 179.32478333333285,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 179.32478333333285,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 179.32478333333285,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 179.32478333333285,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 179.35774744791618,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 179.35774744791618,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 179.35774744791618,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 179.35774744791618,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 179.98406562499952,
          "velocity": 0.1889763779527559,
          "duration": 0.30986267708337323
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 180.02362256249953,
          "velocity": 1,
          "duration": 0.4680904270833537
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 180.03680820833287,
          "velocity": 1,
          "duration": 0.24393444791667207
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 180.09614361458287,
          "velocity": 1,
          "duration": 0.4483119583333348
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 180.55104839583288,
          "velocity": 1,
          "duration": 0.45490478124997935
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 180.57741968749954,
          "velocity": 1,
          "duration": 0.2109703333333357
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 180.57741968749954,
          "velocity": 1,
          "duration": 0.23074880208332615
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 180.59719815624953,
          "velocity": 1,
          "duration": 0.17800621874999933
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 181.01254599999953,
          "velocity": 0.9921259842519685,
          "duration": 0.08570669791663477
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 181.03232446874952,
          "velocity": 1,
          "duration": 0.44171913541663343
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 181.0521029374995,
          "velocity": 1,
          "duration": 0.7252105208333148
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 181.09825269791617,
          "velocity": 0.984251968503937,
          "duration": 0.4351263124999889
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 181.53997183333283,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 181.5663431249995,
          "velocity": 1,
          "duration": 9.57277887500021
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 181.7839062812495,
          "velocity": 1,
          "duration": 0.6263181770833626
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 181.8036847499995,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 181.81687039583284,
          "velocity": 1,
          "duration": 0.5999468854166992
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.13185645833334547
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.13844928125001843
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.13185645833334547
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.13844928125001843
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 182.27836799999952,
          "velocity": 1,
          "duration": 0.7318033437500446
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 182.52889527083286,
          "velocity": 1,
          "duration": 0.2703057395833639
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 182.5420809166662,
          "velocity": 1,
          "duration": 0.25052727083334503
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 182.5420809166662,
          "velocity": 1,
          "duration": 0.21756315625000866
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 182.55526656249955,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 182.6014163229162,
          "velocity": 1,
          "duration": 0.4087550208333539
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 183.0629139270829,
          "velocity": 1,
          "duration": 0.2834913854166814
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 183.0629139270829,
          "velocity": 1,
          "duration": 0.3230483229166907
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 183.0629139270829,
          "velocity": 1,
          "duration": 0.25052727083334503
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 183.06950674999956,
          "velocity": 0.7874015748031497,
          "duration": 0.4549047812500078
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 183.52441153124957,
          "velocity": 0.8582677165354331,
          "duration": 0.5142401875000076
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 183.54418999999956,
          "velocity": 1,
          "duration": 0.4944617187500171
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 183.58374693749957,
          "velocity": 1,
          "duration": 0.7252105208333433
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 184.05843018749957,
          "velocity": 1,
          "duration": 0.2373416249999991
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 184.32214310416626,
          "velocity": 0.8110236220472441,
          "duration": 0.784545927083343
        },
        {
          "name": "A#3",
          "midi": 58,
          "time": 184.32214310416626,
          "velocity": 1,
          "duration": 0.11867081249999956
        },
        {
          "name": "F4",
          "midi": 65,
          "time": 184.34192157291625,
          "velocity": 1,
          "duration": 0.13844928125001843
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 184.44081391666626,
          "velocity": 1,
          "duration": 0.7779531041666701
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 184.48696367708294,
          "velocity": 1,
          "duration": 0.6197253541666612
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 185.1660244374996,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687499798
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 185.1660244374996,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 185.1660244374996,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687499798
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 185.1660244374996,
          "velocity": 1,
          "duration": 0.3494196145833257
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 185.19239572916626,
          "velocity": 1,
          "duration": 0.4614976041666523
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 185.19239572916626,
          "velocity": 1,
          "duration": 0.4614976041666523
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 185.65389333333292,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 185.65389333333292,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 185.68685744791625,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 185.68685744791625,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 185.68685744791625,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 185.68685744791625,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 185.97694165624958,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 185.97694165624958,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 185.98353447916625,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 185.98353447916625,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 185.98353447916625,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 185.98353447916625,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 186.53733160416627,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 186.53733160416627,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 186.55711007291626,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 186.55711007291626,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 186.5900741874996,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 186.5900741874996,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 186.7878588749996,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 186.7878588749996,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 186.91971533333296,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 186.91971533333296,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 186.91971533333296,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 186.91971533333296,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 186.9526794479163,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 186.9526794479163,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 186.9526794479163,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 186.9526794479163,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 187.69766843749963,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 187.69766843749963,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 187.69766843749963,
          "velocity": 0.3543307086614173,
          "duration": 0.3362339687500082
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 187.69766843749963,
          "velocity": 1,
          "duration": 0.34941961458335413
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 187.7240397291663,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 187.7240397291663,
          "velocity": 1,
          "duration": 0.46149760416668073
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 188.18553733333297,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 188.18553733333297,
          "velocity": 0.8661417322834646,
          "duration": 0.02637129166666341
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 188.2185014479163,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 188.2185014479163,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 188.2185014479163,
          "velocity": 1,
          "duration": 0.3691980833333446
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 188.2185014479163,
          "velocity": 0.9763779527559056,
          "duration": 0.17800621874999933
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 188.50858565624964,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 188.50858565624964,
          "velocity": 1,
          "duration": 0.4549047812500078
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 188.5151784791663,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 188.5151784791663,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 188.5151784791663,
          "velocity": 1,
          "duration": 0.5472043020833439
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 188.5151784791663,
          "velocity": 0.4566929133858268,
          "duration": 0.5537971250000169
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 189.06897560416633,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 189.06897560416633,
          "velocity": 0.2677165354330709,
          "duration": 0.25052727083334503
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 189.08875407291632,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 189.08875407291632,
          "velocity": 0.952755905511811,
          "duration": 0.21756315625000866
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 189.12171818749965,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 189.12171818749965,
          "velocity": 1,
          "duration": 0.36260526041670005
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 189.31950287499967,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 189.31950287499967,
          "velocity": 0.23622047244094488,
          "duration": 0.12526363541667251
        },
        {
          "name": "F#4",
          "midi": 66,
          "time": 189.45135933333302,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 189.45135933333302,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 189.45135933333302,
          "velocity": 1,
          "duration": 0.22415597916668162
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 189.45135933333302,
          "velocity": 0.6062992125984252,
          "duration": 0.03296411458333637
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 189.48432344791635,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 189.48432344791635,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 189.48432344791635,
          "velocity": 1,
          "duration": 0.1845990416666723
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 189.48432344791635,
          "velocity": 0.5905511811023622,
          "duration": 0.1845990416666723
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 189.8732999999997,
          "velocity": 0.5118110236220472,
          "duration": 1.2658220000000142
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 189.8732999999997,
          "velocity": 0.5984251968503937,
          "duration": 0
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 189.8732999999997,
          "velocity": 0.8110236220472441,
          "duration": 1.2658220000000142
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 189.8732999999997,
          "velocity": 0.8188976377952756,
          "duration": 1.2658220000000142
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 189.8732999999997,
          "velocity": 0.7716535433070866,
          "duration": 1.2658220000000142
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 189.8732999999997,
          "velocity": 0.7716535433070866,
          "duration": 1.2658220000000142
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 191.7720329999997,
          "velocity": 0.44881889763779526,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 191.7720329999997,
          "velocity": 0.3543307086614173,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 191.7720329999997,
          "velocity": 0.3543307086614173,
          "duration": 0.10548516666665364
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 191.7720329999997,
          "velocity": 0.28346456692913385,
          "duration": 0.10548516666665364
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 191.9302607499997,
          "velocity": 0.4251968503937008,
          "duration": 0.10548516666665364
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 191.9302607499997,
          "velocity": 0.4645669291338583,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 191.9302607499997,
          "velocity": 0.5275590551181102,
          "duration": 0.10548516666665364
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 191.9302607499997,
          "velocity": 0.44881889763779526,
          "duration": 0.10548516666665364
        },
        {
          "name": "G3",
          "midi": 55,
          "time": 192.08848849999967,
          "velocity": 0.25196850393700787,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 192.08848849999967,
          "velocity": 0.5433070866141733,
          "duration": 0.2109703333333357
        },
        {
          "name": "G4",
          "midi": 67,
          "time": 192.08848849999967,
          "velocity": 0.6614173228346457,
          "duration": 0.2109703333333357
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 192.08848849999967,
          "velocity": 0.6377952755905512,
          "duration": 0.2109703333333357
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 192.08848849999967,
          "velocity": 0.5748031496062992,
          "duration": 0.2109703333333357
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 192.40494399999966,
          "velocity": 0.5354330708661418,
          "duration": 1.6943554895833586
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 192.40494399999966,
          "velocity": 0.25196850393700787,
          "duration": 1.6943554895833586
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 192.40494399999966,
          "velocity": 0.6062992125984252,
          "duration": 1.6943554895833586
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 192.40494399999966,
          "velocity": 0.6220472440944882,
          "duration": 1.6943554895833586
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 192.40494399999966,
          "velocity": 0.6220472440944882,
          "duration": 1.6943554895833586
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 192.40494399999966,
          "velocity": 0.5196850393700787,
          "duration": 1.6943554895833586
        },
        {
          "name": "D6",
          "midi": 86,
          "time": 193.67076599999967,
          "velocity": 0.7874015748031497,
          "duration": 0.8438813333333428
        },
        {
          "name": "C6",
          "midi": 84,
          "time": 194.9365879999997,
          "velocity": 0.7874015748031497,
          "duration": 1.2658220000000142
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 197.3100042499997,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 197.4682319999997,
          "velocity": 0.7874015748031497,
          "duration": 0.8438813333333428
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 198.7340539999997,
          "velocity": 0.7874015748031497,
          "duration": 0.8438813333333428
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 199.99987599999972,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 200.1581037499997,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 200.31633149999968,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 200.47455924999966,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 201.26569799999967,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 201.42392574999965,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 201.58215349999963,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 201.74038124999961,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 202.53151999999963,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 202.53151999999963,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 202.6897477499996,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 202.8479754999996,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 203.00620324999957,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 203.00620324999957,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 203.95556974999957,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 203.95556974999957,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 204.43025299999957,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 205.06316399999957,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 205.22139174999955,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 205.37961949999954,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 205.53784724999952,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 206.32898599999953,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 206.4872137499995,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 206.6454414999995,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 206.80366924999947,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 207.5948079999995,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 207.75303574999947,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 207.91126349999945,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 208.06949124999943,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 209.01885774999943,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 209.49354099999942,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 209.6517687499994,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 209.8099964999994,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 210.12645199999938,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 210.28467974999936,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 210.44290749999934,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 210.60113524999932,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 211.39227399999933,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 211.5505017499993,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 211.7087294999993,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 211.86695724999927,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 212.6580959999993,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 212.6580959999993,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 212.81632374999927,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 212.97455149999925,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 213.13277924999923,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 213.13277924999923,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 214.08214574999923,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 214.08214574999923,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 214.55682899999923,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 215.18973999999923,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 215.3479677499992,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 215.5061954999992,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 215.66442324999917,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 216.4555619999992,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 216.61378974999917,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 216.77201749999915,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 216.93024524999913,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 217.72138399999915,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 217.87961174999913,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 218.0378394999991,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 218.1960672499991,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 219.14543374999909,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 219.62011699999908,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 219.77834474999906,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 219.93657249999904,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 220.25302799999903,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 220.41125574999901,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 220.569483499999,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 220.72771124999898,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 221.518849999999,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 221.67707774999897,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 221.83530549999895,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 221.99353324999893,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 222.78467199999895,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 222.78467199999895,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 222.94289974999893,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 223.1011274999989,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 223.2593552499989,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 223.2593552499989,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 224.2087217499989,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 224.2087217499989,
          "velocity": 0.7874015748031497,
          "duration": 0.31645549999998934
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 224.68340499999888,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 225.3163159999989,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 225.47454374999887,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 225.63277149999885,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 225.79099924999883,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 226.58213799999885,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 226.74036574999883,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 226.8985934999988,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 227.0568212499988,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 227.8479599999988,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 228.0061877499988,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B4",
          "midi": 71,
          "time": 228.16441549999877,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "C#5",
          "midi": 73,
          "time": 228.32264324999875,
          "velocity": 0.7874015748031497,
          "duration": 0.4219406666666714
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 229.27200974999874,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 229.74669299999874,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 229.90492074999872,
          "velocity": 0.7874015748031497,
          "duration": 0.10548516666665364
        },
        {
          "name": "E6",
          "midi": 88,
          "time": 230.0631484999987,
          "velocity": 0.7874015748031497,
          "duration": 0.2109703333333357
        }
      ];
