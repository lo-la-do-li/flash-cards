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
    return this.card.correctAnswer === this.guess ? true : false;
  };

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  };
};


module.exports = Turn;
