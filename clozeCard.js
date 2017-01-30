function clozeCard(sentence, cloze) {

	//if user forgot to use new with clozeCard

  if (!(this instanceof clozeCard)) {
   return new clozeCard(sentence, cloze);
  }

    var newSentence = sentence.replace(cloze, "...");


	this.partial = newSentence;
	this.cloze = cloze;

	//this will be one way of adding the method, but the homework asked us to use prototype
	// I am doing this outside the function clozeCard

	// this.displayCard = function(){

	// 	var solution = sentence.replace(cloze, "'" + cloze + "'");
	//     console.log(solution);

	// };


}

// ading a method to the clozeCard object using prototype

	clozeCard.prototype.displayCard = function(sentence, cloze){

		var solution = sentence.replace(cloze, "'" + cloze + "'");
	    console.log(solution);

	};

module.exports = clozeCard;