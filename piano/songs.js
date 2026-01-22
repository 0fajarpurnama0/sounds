// A "Beat" unit to make timing easier to read. 
// 70 BPM means 1 beat = 0.85 seconds.
// The arpeggios are 8th notes (0.5 beats).
const B = 0.8; 

const songs = {
    canon_in_d: [
        // ============================
        // MEASURE 1 (Intro)
        // Left Hand Arpeggio: D - A - Bm - F#m context
        // ============================
        { note: 'D', octave: 3, time: 0.0 },      // 1
        { note: 'A', octave: 2, time: 0.5 * B },  // &
        { note: 'D', octave: 3, time: 1.0 * B },  // 2
        { note: 'F#', octave: 3, time: 1.5 * B }, // &
        
        { note: 'A', octave: 2, time: 2.0 * B },  // 3
        { note: 'E', octave: 3, time: 2.5 * B },  // &
        { note: 'A', octave: 3, time: 3.0 * B },  // 4
        { note: 'C#', octave: 4, time: 3.5 * B }, // &

        // ============================
        // MEASURE 2
        // Left Hand: Bm - F#m context
        // ============================
        { note: 'B', octave: 2, time: 4.0 * B },
        { note: 'F#', octave: 3, time: 4.5 * B },
        { note: 'B', octave: 3, time: 5.0 * B },
        { note: 'D', octave: 4, time: 5.5 * B },

        { note: 'F#', octave: 2, time: 6.0 * B },
        { note: 'C#', octave: 3, time: 6.5 * B },
        { note: 'F#', octave: 3, time: 7.0 * B },
        { note: 'A', octave: 3, time: 7.5 * B },

        // ============================
        // MEASURE 3 (Melody Enters)
        // Right Hand: F#5... | Left Hand: G Major context
        // ============================
        // RH Melody
        { note: 'F#', octave: 5, time: 8.0 * B }, // Main melody start
        { note: 'E', octave: 5, time: 9.0 * B },
        { note: 'D', octave: 5, time: 10.0 * B },
        { note: 'C#', octave: 5, time: 11.0 * B },
        
        // LH Arpeggio (G Major)
        { note: 'G', octave: 2, time: 8.0 * B },
        { note: 'D', octave: 3, time: 8.5 * B },
        { note: 'G', octave: 3, time: 9.0 * B },
        { note: 'B', octave: 3, time: 9.5 * B },
        
        // LH Arpeggio (D Major)
        { note: 'D', octave: 3, time: 10.0 * B },
        { note: 'A', octave: 3, time: 10.5 * B },
        { note: 'D', octave: 4, time: 11.0 * B },
        { note: 'F#', octave: 4, time: 11.5 * B },

        // ============================
        // MEASURE 4
        // Right Hand: B... | Left Hand: G - A context
        // ============================
        // RH Melody
        { note: 'B', octave: 4, time: 12.0 * B },
        { note: 'A', octave: 4, time: 13.0 * B },
        { note: 'B', octave: 4, time: 14.0 * B },
        { note: 'C#', octave: 5, time: 15.0 * B },

        // LH Arpeggio (G Major)
        { note: 'G', octave: 2, time: 12.0 * B },
        { note: 'D', octave: 3, time: 12.5 * B },
        { note: 'G', octave: 3, time: 13.0 * B },
        { note: 'B', octave: 3, time: 13.5 * B },

        // LH Arpeggio (A Major)
        { note: 'A', octave: 2, time: 14.0 * B },
        { note: 'E', octave: 3, time: 14.5 * B },
        { note: 'A', octave: 3, time: 15.0 * B },
        { note: 'C#', octave: 4, time: 15.5 * B },
        
        // ============================
        // MEASURE 5
        // Variation starts (Melody repeats but Bass continues pattern)
        // ============================
        // RH Melody
        { note: 'D', octave: 5, time: 16.0 * B },
        { note: 'C#', octave: 5, time: 17.0 * B },
        { note: 'B', octave: 4, time: 18.0 * B },
        { note: 'A', octave: 4, time: 19.0 * B },

        // LH Arpeggio (Repeats M1 pattern)
        { note: 'D', octave: 3, time: 16.0 * B },
        { note: 'A', octave: 2, time: 16.5 * B },
        { note: 'D', octave: 3, time: 17.0 * B },
        { note: 'F#', octave: 3, time: 17.5 * B },
        
        { note: 'A', octave: 2, time: 18.0 * B },
        { note: 'E', octave: 3, time: 18.5 * B },
        { note: 'A', octave: 3, time: 19.0 * B },
        { note: 'C#', octave: 4, time: 19.5 * B },

         // ============================
        // MEASURE 6
        // ============================
        // RH Melody
        { note: 'G', octave: 4, time: 20.0 * B },
        { note: 'F#', octave: 4, time: 21.0 * B },
        { note: 'G', octave: 4, time: 22.0 * B }, // Sometimes E in variations, sheet says G
        { note: 'E', octave: 4, time: 23.0 * B },

        // LH Arpeggio (Repeats M2 pattern)
        { note: 'B', octave: 2, time: 20.0 * B },
        { note: 'F#', octave: 3, time: 20.5 * B },
        { note: 'B', octave: 3, time: 21.0 * B },
        { note: 'D', octave: 4, time: 21.5 * B },

        { note: 'F#', octave: 2, time: 22.0 * B },
        { note: 'C#', octave: 3, time: 22.5 * B },
        { note: 'F#', octave: 3, time: 23.0 * B },
        { note: 'A', octave: 3, time: 23.5 * B },
        
        // Resolving Chord (Optional End for Demo)
        { note: 'D', octave: 4, time: 24.0 * B },
        { note: 'D', octave: 3, time: 24.0 * B }
    ],
    gymnopedie_1: [
        // ============================
        // INTRO (Measures 1-4)
        // The famous alternating Gmaj7 and Dmaj7 chords
        // ============================
        
        // Measure 1 (G Major 7)
        { note: 'G', octave: 2, time: 0.0 * B }, // Beat 1: Low G
        { note: 'B', octave: 3, time: 1.0 * B }, // Beat 2: Chord
        { note: 'D', octave: 4, time: 1.0 * B },
        { note: 'F#', octave: 4, time: 1.0 * B },
        // Beat 3 is silence/sustain in LH

        // Measure 2 (D Major 7)
        { note: 'D', octave: 2, time: 3.0 * B }, // Beat 1: Low D
        { note: 'A', octave: 3, time: 4.0 * B }, // Beat 2: Chord
        { note: 'C#', octave: 4, time: 4.0 * B },
        { note: 'F#', octave: 4, time: 4.0 * B },

        // Measure 3 (Repeat G)
        { note: 'G', octave: 2, time: 6.0 * B },
        { note: 'B', octave: 3, time: 7.0 * B },
        { note: 'D', octave: 4, time: 7.0 * B },
        { note: 'F#', octave: 4, time: 7.0 * B },

        // Measure 4 (Repeat D)
        { note: 'D', octave: 2, time: 9.0 * B },
        { note: 'A', octave: 3, time: 10.0 * B },
        { note: 'C#', octave: 4, time: 10.0 * B },
        { note: 'F#', octave: 4, time: 10.0 * B },

        // ============================
        // THEME A (Measures 5-12)
        // Melody enters: F# - A - G - F# - C# - B - C# - D
        // ============================

        // Measure 5 (Melody: F#)
        { note: 'F#', octave: 5, time: 12.0 * B }, // Melody
        { note: 'G', octave: 2, time: 12.0 * B },  // Bass
        { note: 'B', octave: 3, time: 13.0 * B },  // Chord
        { note: 'D', octave: 4, time: 13.0 * B },
        { note: 'F#', octave: 4, time: 13.0 * B },

        // Measure 6 (Melody: A)
        { note: 'A', octave: 5, time: 15.0 * B },  // Melody
        { note: 'D', octave: 2, time: 15.0 * B },  // Bass
        { note: 'A', octave: 3, time: 16.0 * B },  // Chord
        { note: 'C#', octave: 4, time: 16.0 * B },
        { note: 'F#', octave: 4, time: 16.0 * B },

        // Measure 7 (Melody: G)
        { note: 'G', octave: 5, time: 18.0 * B },
        { note: 'G', octave: 2, time: 18.0 * B },
        { note: 'B', octave: 3, time: 19.0 * B },
        { note: 'D', octave: 4, time: 19.0 * B },
        { note: 'F#', octave: 4, time: 19.0 * B },

        // Measure 8 (Melody: F#)
        { note: 'F#', octave: 5, time: 21.0 * B },
        { note: 'D', octave: 2, time: 21.0 * B },
        { note: 'A', octave: 3, time: 22.0 * B },
        { note: 'C#', octave: 4, time: 22.0 * B },
        { note: 'F#', octave: 4, time: 22.0 * B },

        // Measure 9 (Melody: C#)
        { note: 'C#', octave: 5, time: 24.0 * B },
        { note: 'E', octave: 2, time: 24.0 * B }, // Bass changes to E minor
        { note: 'G', octave: 3, time: 25.0 * B }, // Chord
        { note: 'B', octave: 3, time: 25.0 * B },
        { note: 'E', octave: 4, time: 25.0 * B },

        // Measure 10 (Melody: B)
        { note: 'B', octave: 4, time: 27.0 * B },
        { note: 'B', octave: 2, time: 27.0 * B }, // Bass B
        { note: 'F#', octave: 3, time: 28.0 * B }, // Chord
        { note: 'A', octave: 3, time: 28.0 * B },
        { note: 'D', octave: 4, time: 28.0 * B }, // Bm7

        // Measure 11 (Melody: C#)
        { note: 'C#', octave: 5, time: 30.0 * B },
        { note: 'D', octave: 2, time: 30.0 * B },
        { note: 'F#', octave: 3, time: 31.0 * B },
        { note: 'A', octave: 3, time: 31.0 * B },
        { note: 'D', octave: 4, time: 31.0 * B }, // Dmaj7

        // Measure 12 (Melody: D)
        { note: 'D', octave: 5, time: 33.0 * B },
        { note: 'A', octave: 2, time: 33.0 * B }, // Bass A
        { note: 'E', octave: 3, time: 34.0 * B }, // Chord
        { note: 'A', octave: 3, time: 34.0 * B },
        { note: 'C#', octave: 4, time: 34.0 * B }, // A Maj

        // ============================
        // THEME B (Rise to Climax)
        // ============================
        
        // Measure 13 (High A) - The "Peak"
        { note: 'A', octave: 5, time: 36.0 * B },
        { note: 'D', octave: 2, time: 36.0 * B },
        { note: 'A', octave: 3, time: 37.0 * B },
        { note: 'D', octave: 4, time: 37.0 * B },
        { note: 'F#', octave: 4, time: 37.0 * B },

        // Measure 14 (Walking down: G - F#)
        { note: 'G', octave: 5, time: 39.0 * B }, // Beat 1
        { note: 'F#', octave: 5, time: 40.0 * B }, // Beat 2 (on chord)
        
        { note: 'D', octave: 2, time: 39.0 * B }, // Bass
        { note: 'A', octave: 3, time: 40.0 * B }, // Chord
        { note: 'C#', octave: 4, time: 40.0 * B },
        { note: 'F#', octave: 4, time: 40.0 * B },

        // Measure 15 (E - D - B)
        { note: 'E', octave: 5, time: 42.0 * B },
        { note: 'D', octave: 5, time: 43.0 * B }, // Beat 2
        { note: 'B', octave: 4, time: 44.0 * B }, // Beat 3
        
        { note: 'E', octave: 2, time: 42.0 * B }, // Bass
        { note: 'B', octave: 3, time: 43.0 * B }, // Chord
        { note: 'E', octave: 4, time: 43.0 * B },
        { note: 'G', octave: 4, time: 43.0 * B },

        // Measure 16 (D - C# - D)
        { note: 'D', octave: 5, time: 45.0 * B },
        { note: 'C#', octave: 5, time: 46.0 * B },
        { note: 'D', octave: 5, time: 47.0 * B },
        
        { note: 'B', octave: 2, time: 45.0 * B },
        { note: 'F#', octave: 3, time: 46.0 * B },
        { note: 'B', octave: 3, time: 46.0 * B },
        { note: 'D', octave: 4, time: 46.0 * B },

        // ============================
        // OUTRO (Resolution)
        // ============================
        
        // Measure 17 (Low G Maj 7)
        { note: 'E', octave: 5, time: 48.0 * B }, // Melody ends on E
        { note: 'G', octave: 2, time: 48.0 * B },
        { note: 'B', octave: 3, time: 49.0 * B },
        { note: 'D', octave: 4, time: 49.0 * B },
        { note: 'F#', octave: 4, time: 49.0 * B },

        // Final Chord (D Maj 7)
        { note: 'F#', octave: 4, time: 51.0 * B }, // Resolve to F#
        { note: 'D', octave: 2, time: 51.0 * B },
        { note: 'A', octave: 3, time: 52.0 * B },
        { note: 'C#', octave: 4, time: 52.0 * B },
        { note: 'F#', octave: 4, time: 52.0 * B }
    ]
};