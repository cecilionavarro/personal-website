const noteMap = {
    "A": 0, "A#": 1, "Bb": 1, "B": 2, "C": 3, "C#": 4, "Db": 4, 
    "D": 5, "D#": 6, "Eb": 6, "E": 7, "F": 8, "F#": 9, "Gb": 9, 
    "G": 10, "G#": 11, "Ab": 11
};

const positionMap = {
    0: "A", 1: ["A#", "Bb"], 2: "B", 3: "C", 4: ["C#", "Db"], 5: "D", 
    6: ["D#", "Eb"], 7: "E", 8: "F", 9: ["F#", "Gb"], 10: "G", 11: ["G#", "Ab"]
};

let originalNotes = ""; // Store the original input

document.addEventListener("DOMContentLoaded", function () {
    let notesTextarea = document.getElementById("notes");
    originalNotes = notesTextarea.value; // Store initial value

    document.getElementById("copyButton").addEventListener("click", copyToClipboard);
    document.getElementById("transpose-button").addEventListener("click", transposeNotes);
    document.getElementById("revert-button").addEventListener("click", revertToOriginal);
});

function transpose(position, distance) {
    let newPosition = (position + distance) % 12;
    if (newPosition < 0) newPosition += 12;
    return newPosition;
}

function transposeNotes() {
    let inputNotes = document.getElementById('notes');
    let distance = parseInt(document.getElementById('distance').value);
    let accidental = parseInt(document.getElementById('accidental').value);

    if (!inputNotes.value) {
        inputNotes.value = "Please enter some notes.";
        return;
    }

    let notesArray = inputNotes.value.match(/([A-G](?:#|b)?)|[^A-G#b]+/g);
    let transposedNotes = [];

    for (let note of notesArray) {
        if (noteMap.hasOwnProperty(note)) {
            let position = noteMap[note];
            let newPosition = transpose(position, distance);
            let newNote = positionMap[newPosition];
            newNote = Array.isArray(newNote) ? (accidental === 1 ? newNote[0] : newNote[1]) : newNote;
            transposedNotes.push(newNote);
        } else {
            transposedNotes.push(note);
        }
    }

    inputNotes.value = transposedNotes.join(""); // Update the original textarea
}

function revertToOriginal() {
    document.getElementById("notes").value = originalNotes;
}

// Copy to clipboard function
function copyToClipboard() {
    let inputNotes = document.getElementById("notes");

    // Select the text inside the textarea
    inputNotes.select();
    inputNotes.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    document.execCommand("copy");

    // Provide feedback to the user
    let copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 1500);
}
