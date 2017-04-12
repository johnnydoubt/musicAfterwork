      // FIRST KEYBOARD (LEAD)

// Instanciate keyboard

var keyboard = new QwertyHancock({
     id: 'keyboard',
     width: 1080,
     height: 150,
     octaves: 3
});

// Comment when "KeyDown" & "keyUp"

keyboard.keyDown = function (note, frequency) {
    console.log('LEAD Note', note, 'has been pressed');
    console.log('Its frequency is', frequency);
};

keyboard.keyUp = function (note, frequency) {
    console.log('LEAD Note', note, 'has been released');
    console.log('Its frequency was', frequency);
};

// Instanciate sounds

var context = new AudioContext();

keyboard.keyDown = function (note, frequency) {
    var osc = context.createOscillator();

    osc.connect(context.destination);

    osc.start(context.currentTime);
    osc.stop(context.currentTime + 1);
};

// Control "gain"

var context = new AudioContext(),
    masterVolume = context.createGain();

masterVolume.gain.value = 0.3;
masterVolume.connect(context.destination);

keyboard.keyDown = function (note, frequency) {
    var osc = context.createOscillator();

    osc.connect(masterVolume);
    masterVolume.connect(context.destination);

    osc.start(context.currentTime);
    osc.stop(context.currentTime + 1);
};

// Differents frequencies taken into account

osc.frequency.value = frequency;

// Empty object takes oscillator value

var oscillators = {};

keyboard.keyDown = function (note, frequency) {
    // Previous code here

    oscillators[frequency] = osc;

    osc.start(context.currentTime);
};

// on "noteUp", stop the noteUp

keyboard.keyUp = function (note, frequency) {
    oscillators[frequency].stop(context.currentTime);
};

// Define oscillator typeof

keyboard.keyDown = function (note, frequency) {
    var osc = context.createOscillator(),
        osc2 = context.createOscillator();

    osc.frequency.value = frequency;
    osc.type = 'sawtooth';

    osc2.frequency.value = frequency;
    osc2.type = 'triangle';

    osc.connect(masterVolume);
    osc2.connect(masterVolume);

    masterVolume.connect(context.destination);

    oscillators[frequency] = [osc, osc2];

    osc.start(context.currentTime);
    osc2.start(context.currentTime);
};

keyboard.keyUp = function (note, frequency) {
    oscillators[frequency].forEach(function (oscillator) {
        oscillator.stop(context.currentTime);
    });
};
