const noteMap = {
    "A": 0, "A#": 1, "Bb": 1, "B": 2, "C": 3, "C#": 4, "Db": 4,
    "D": 5, "D#": 6, "Eb": 6, "E": 7, "F": 8, "F#": 9, "Gb": 9,
    "G": 10, "G#": 11, "Ab": 11
}

const positionMap = {
    0: "A", 1: ["A#", "Bb"], 2: "B", 3: "C", 4: ["C#", "Db"], 5: "D",
    6: ["D#", "Eb"], 7: "E", 8: "F", 9: ["F#", "Gb"], 10: "G", 11: ["G#", "Ab"]
}

function transpose(position, distance) {
    let newPosition = (position + distance) % 12;
    if (newPosition < 0) newPosition += 12;
    return newPosition;
}


function transposeNotes() {
    let input = document.getElementById('input').value
    let distance = parseInt(document.getElementById('distance').value)
    let accidental = parseInt(document.getElementById('accidental').value)
    let output = document.getElementById('output')

    notesArray = input.match(/(\s+)|(?<![A-Za-z0-9#b])([A-G](?:#|b)?)(?=(m)?(?![A-Za-z0-9#b]))|([^\w\s])|(\w+)/g);
    newNotesArray = []

    // console.log(notesArray)

    for (let note of notesArray){
        // if empty after trim it was all whitespace
        if (note.trim() === "") {
            newNotesArray.push(note)
            continue;
        }
        let position = noteMap[note]

        if (position === undefined) {
            newNotesArray.push(note)
            continue
        }

        let newPosition = transpose(position, distance)
        let newNote = positionMap[newPosition]
        console.log(newNote)

        if (Array.isArray(newNote)) {
            newNote = accidental === 1 ? newNote[0] : newNote[1]
        }
        newNotesArray.push(newNote)
    }
    // console.log(newNotesArray)
    output.value = newNotesArray.join("")
}

let distance = document.getElementById("distance")
let sliderValue = document.getElementById("sliderValue")
let accidental = document.getElementById("accidental")

distance.addEventListener("input", function() {
    sliderValue.textContent = this.value
    transposeNotes()
})

accidental.addEventListener("change", function() {
    transposeNotes()
})