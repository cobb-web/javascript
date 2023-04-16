var person = {
    firstname: "Jeffery",
    lastname: "Adjei",
    age: "30",

}

var personJSON = '{"firstname":"Jeffery", "lastname":"Adjei", "age":"30"}';

var personStringified = JSON.stringify(person);

var parsedData = JSON.parse(personJSON);



var personB = {
    firstname: "Kwamina",
    lastname: "Adonu",
    age: "40",

}
var personBJSON = '{"firstname": "Kwamina", "lastname":"Adonu", "age":"40"}';

var personBStringified = JSON.stringify(personB);

var parsedData2 = JSON.parse(personBJSON);

var personC = {
    firstName: "Emmanuel",
    lastName: "Doku",
    age: 50,

}

var personCJSON = '{"firstname": "Emmanuel", "lastname":"Doku", "age":"50"}';

var personCStringified = JSON.stringify(personC);

var parsedData3 = JSON.parse(personCJSON);

