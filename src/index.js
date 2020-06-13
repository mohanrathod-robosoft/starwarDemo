
var R = require('ramda');
var ura = require('unique-random-array');
var starwarObject = require('./strwars-object.json');
var male = "male";
var female = "female";


module.exports = {
    all: starwarObject,
    random: ura(starwarObject),
    getMale: getByGender(male),
    getFemale: getByGender(female)
}

function getByGender(givenGender){
    const getByGender = R.filter(R.propEq('gender', givenGender))(starwarObject);
    return getByGender;
}