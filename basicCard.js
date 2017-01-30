function basicCard(frontSide, backSide) {

  //if user forgot to use new with basicCard

  if (!(this instanceof basicCard)) {
   return new basicCard(frontSide, backSide);
  }

	this.front = frontSide;
	this.back = backSide;
}

module.exports = basicCard;