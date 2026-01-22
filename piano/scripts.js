// 1. Define the Note Structure
// "s" means Sharp (Black key). Standard notes are White keys.
const notes = [
    { name: 'C', type: 'white' },
    { name: 'C#', type: 'black' },
    { name: 'D', type: 'white' },
    { name: 'D#', type: 'black' },
    { name: 'E', type: 'white' },
    { name: 'F', type: 'white' }, // No black key between E and F
    { name: 'F#', type: 'black' },
    { name: 'G', type: 'white' },
    { name: 'G#', type: 'black' },
    { name: 'A', type: 'white' },
    { name: 'A#', type: 'black' },
    { name: 'B', type: 'white' }
];

const pianoContainer = document.getElementById('piano');

// 2. Generator Function
function generatePiano(startOctave, endOctave) {
    pianoContainer.innerHTML = ''; // Clear existing

    for (let oct = startOctave; oct <= endOctave; oct++) {
        
        notes.forEach(note => {
            // Create the Key DIV
            const key = document.createElement('div');
            
            // Assign classes (key + white/black)
            key.className = `key ${note.type}`;
            key.id = `key-${note.name}-${oct}`;
            
            // Only label white keys to keep it clean (optional)
            if(note.type === 'white') {
                key.innerText = note.name + oct; 
            }

            // Add click event
            key.addEventListener('mousedown', () => playNote(note.name, oct));
            
            // Add click animation class (for visual feedback)
            key.addEventListener('mousedown', () => key.classList.add('active'));
            key.addEventListener('mouseup', () => key.classList.remove('active'));
            key.addEventListener('mouseleave', () => key.classList.remove('active'));

            // Append to container
            pianoContainer.appendChild(key);
        });
    }
}

function playNote(note, octave) {
    const instrumentId = document.getElementById('instrument-select').value;
    // Handle numeric vs string ID for audiosynth
    let inst = Synth.createInstrument(instrumentId);
    
    // Play note
    inst.play(note, octave, 2);
}

// 3. Initialize: Generate 2 Octaves (Octave 3 and 4)
//generatePiano(3, 4);
generatePiano(2, 6);

// Keep track of timeouts so we can stop the song if needed
let activeTimeouts = [];

function playSong(songName) {
    // 1. Get the song data from songs.js
    const songData = songs[songName];
    if (!songData) {
        alert("Song not found!");
        return;
    }

    // 2. Clear any previous song playing
    stopSong();

    // 3. Get the current instrument
    const instrumentId = document.getElementById('instrument-select').value;
    const instrument = Synth.createInstrument(instrumentId);

    // 4. Schedule the notes
    songData.forEach(noteObj => {
        
        // Convert 'time' (seconds) to milliseconds
        const delay = noteObj.time * 1000;

        const timeoutId = setTimeout(() => {
            // A. Play Audio
            instrument.play(noteObj.note, noteObj.octave, 2);

            // B. Visual Effect (Light up the key)
            highlightKey(noteObj.note, noteObj.octave);

        }, delay);

        activeTimeouts.push(timeoutId);
    });
}

function stopSong() {
    // Clears all scheduled notes
    activeTimeouts.forEach(id => clearTimeout(id));
    activeTimeouts = [];
}

// Helper to visually press the key
function highlightKey(note, octave) {
    // We need to find the specific DIV. 
    // Since we didn't give them IDs in the generator, we search by text content
    // OR we can improve the generator to add IDs. Let's assume the previous generator logic.
    
    // Find all keys
    const keys = document.querySelectorAll('.key');
    
    // Loop to find the match
    keys.forEach(key => {
        // Check text content (e.g., "C3") for White keys
        if (key.innerText === (note + octave)) {
            animateKey(key);
        } 
        // Black keys are harder because they have no text. 
        // Let's rely on a smart ID strategy instead (See Step 3 below).
    });
}

function animateKey(keyElement) {
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 200);
}