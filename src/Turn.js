class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.turns = 0;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    }
    else {
      return 'incorrect!'
    }
  };
};


module.exports = Turn;
