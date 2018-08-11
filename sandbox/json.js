const fs = require('fs');

var noteObject = [

    {
        title: "Some title 1",
        body: "Some body text 1"
    },

    {
        title: "Some title 2",
        body: "Some body text 2"
    },

    {
        title: "Some title 3",
        body: "Some body text 3"
    }

];

// Write json to file
var noteJSON = JSON.stringify(noteObject);

fs.writeFile('notes.json', noteJSON, (err) => {
    if (err) {
        console.log("Unable to perform this request");
    } else {
        console.log("Note added \n");
    }
});

// Read json from file
fs.readFile('notes.json', (err, data) => {
  if (err) {
      console.log("Cannot read file");
  } else {
      var notes = JSON.parse(data);

      for (var i = 0; i < notes.length; i++) {
          console.log((i+1) + ". " + notes[i].title + " ---- " + notes[i].body);
      }
  }
});
