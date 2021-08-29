const db = require('./db/connection.js');
const mainMenu = require('./lib/prompt.js');

const Prompt = require('./lib/Prompt.js/index.js');


db.connect(err => {
    if (err) throw err;
})

mainMenu();