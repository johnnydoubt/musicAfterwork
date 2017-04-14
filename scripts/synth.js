var keyboard = new QwertyHancock({
     id: 'keyboard',
     width: 1080,
     height: 150,
     octaves: 3
});

var context = new AudioContext(),
    masterVolume = context.createGain(),
    oscillators = {};



masterVolume.gain.value = 0.2;

masterVolume.connect(context.destination);

keyboard.keyDown = function (note, frequency) {
    var osc = context.createOscillator(),
        osc2 = context.createOscillator();

    osc.frequency.value = frequency;
    osc.type = 'sawtooth';
    osc.detune.value = -10;

    osc2.frequency.value = frequency;
    osc2.type = 'triangle';
    osc2.detune.value = 10;

    osc.connect(masterVolume);
    osc2.connect(masterVolume);

    masterVolume.connect(context.destination);

    oscillators[frequency] = [osc, osc2];

    osc.start(context.currentTime);
    osc2.start(context.currentTime);

    console.log('LEAD Note', note, 'has been pressed');
    console.log('Its frequency is', frequency);
};

keyboard.keyUp = function (note, frequency) {
    oscillators[frequency].forEach(function (oscillator) {
        oscillator.stop(context.currentTime);
    });
};
