const db = require('./db/connection.js');
const mainMenu = require('./lib/Prompt.js');

const Prompt = require('./lib/Prompt.js');


db.connect(err => {
    if (err) throw err;
})

mainMenu();