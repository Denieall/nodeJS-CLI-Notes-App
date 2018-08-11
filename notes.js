const fs = require('fs');

var addNote = (title, body) => {

    let newNote = {
        title: title,
        body: body
    };

    let notesArray = readJSON();

    if (notesArray == null) {
        writeJSON(JSON.stringify([newNote]));
    } else {
        var duplicateNote = notesArray.filter(note => note.title.toLowerCase() === title.toLowerCase());

        console.log(duplicateNote);

        if (duplicateNote.length > 0) {
            console.log("Note with this title already exists");
        } else {
            notesArray.push(newNote);
            writeJSON(JSON.stringify(notesArray));
        }
    }

}

var getAll = () => {
    let res = readJSON();

    if (res == null) {
        console.log("No notes to diplay");
    } else {

        for (var i = 0; i < res.length; i++) {
            console.log((i + 1) + ". " + res[i].title);
            console.log(res[i].body + "\n");
        }

    }
};

var readNote = (title) => {
    let res = readJSON();

    if (res == null) {
        console.log("No notes to diplay");
    } else {

        for (var i = 0; i < res.length; i++) {
            if ((res[i].title).toLowerCase() === title.toLowerCase()) {
                console.log(res[i].body);
                return;
            }
        }

        console.log("Note with this title cannot be found");

    }
};

var removeNote = (title) => {

    let res = readJSON();

    if (res == null) {

        console.log("No notes to diplay");

    } else {

        for (var i = 0; i < res.length; i++) {
            if ((res[i].title).toLowerCase() === title.toLowerCase()) {
                var deletedArray = res.splice(res.indexOf(title), 1);

                writeJSON(JSON.stringify(deletedArray));

                console.log("The note is deleted");
                return;
            }
        }

        console.log("Note with this title cannot be found");

    }

};

function writeJSON(json) {

    fs.writeFile("notesDB.json", json, (err) => {

      if (err) {
          console.log('The file could not be saved');
      } else {
          console.log('The changes has been saved');
      };

    });

}

function readJSON() {

    try {
        let array = JSON.parse(fs.readFileSync("notesDB.json"));
        return array;
    } catch (e) {
        return null;
    }

}

// Make function available when app.js require
module.exports = {
        addNote,
        getAll,
        readNote,
        removeNote
};
