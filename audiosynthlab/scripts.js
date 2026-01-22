// Store current slider values
let params = {
    h1: 1.0, h2: 0.5, h3: 0.25, h4: 0.1,
    attack: 0.002, dampen: 1.0
};

function updateUI() {
    // Update the display numbers
    params.h1 = parseFloat(document.getElementById('h1').value);
    params.h2 = parseFloat(document.getElementById('h2').value);
    params.h3 = parseFloat(document.getElementById('h3').value);
    params.h4 = parseFloat(document.getElementById('h4').value);
    params.attack = parseFloat(document.getElementById('att').value);
    params.dampen = parseFloat(document.getElementById('damp').value);

    document.getElementById('val-h1').innerText = params.h1;
    document.getElementById('val-h2').innerText = params.h2;
    document.getElementById('val-h3').innerText = params.h3;
    document.getElementById('val-h4').innerText = params.h4;
    document.getElementById('val-att').innerText = params.attack;
    document.getElementById('val-damp').innerText = params.dampen;
}

function playTone(note, octave) {
    // TRICK: AudioSynth caches sounds aggressively.
    // If we want to hear our slider changes instantly, 
    // we must create a UNIQUE instrument name every time we press a key.
    // Otherwise, it will play the old cached sound.
    let tempName = "mix_" + Date.now();

    Synth.loadSoundProfile({
        name: tempName,
        attack: function() { return params.attack; },
        dampen: function(sampleRate, frequency, volume) {
            // Using a simplified dampen logic based on the slider
            return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * params.dampen;
        },
        wave: function(i, sampleRate, frequency, volume) {
            // We access the built-in modulators (Sin waves)
            // modulate[0] = Fundamental
            // modulate[1] = Octave (2nd harmonic)
            // modulate[2] = 2 Octaves up (3rd harmonic)
            var base = this.modulate[0];
            var mod1 = this.modulate[1];
            var mod2 = this.modulate[2];

            // We mix them based on slider values!
            return (
                (params.h1 * base(i, sampleRate, frequency, 0)) +
                (params.h2 * mod1(i, sampleRate, frequency, 0)) + 
                (params.h3 * mod2(i, sampleRate, frequency, 0)) +
                (params.h4 * base(i, sampleRate, frequency, 0.5)) // Phase shifted sparkle
            );
        }
    });

    // Create and play instantly
    let instrument = Synth.createInstrument(tempName);
    instrument.play(note, octave, 2);
}

function generateCode() {
    // Generates the code snippet to copy-paste into your project
    let code = `
    Synth.loadSoundProfile({
        name: 'custom_slider_sound',
        attack: function() { return ${params.attack}; },
        dampen: function(sampleRate, frequency, volume) {
            return Math.pow(0.5*Math.log((frequency*volume)/sampleRate), 2) * ${params.dampen};
        },
        wave: function(i, sampleRate, frequency, volume) {
            var base = this.modulate[0];
            var mod1 = this.modulate[1];
            var mod2 = this.modulate[2];

            return (
                (${params.h1} * base(i, sampleRate, frequency, 0)) +
                (${params.h2} * mod1(i, sampleRate, frequency, 0)) + 
                (${params.h3} * mod2(i, sampleRate, frequency, 0)) +
                (${params.h4} * base(i, sampleRate, frequency, 0.5))
            );
        }
    });
    `;
    document.getElementById('code-output').value = code.trim();
}