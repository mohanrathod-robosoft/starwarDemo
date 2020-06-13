var ura = require('unique-random-array');
var starwarObject = require('./strwars-object.json');

module.exports = {
    all: starwarObject,
    random: ura(starwarObject),

}