
var basicMode       = require("./basicCard.js");
var advanceMode     = require("./clozeCard.js")

var cardType = process.argv[2];
var frontSide = process.argv[3];
var backSide = process.argv[4];


if (cardType === "basic") {

var basicCard = new basicMode(frontSide,backSide);

console.log(basicCard);

};

if (cardType === "cloze") {

var clozeCard = new advanceMode(frontSide,backSide);

console.log(clozeCard);

}