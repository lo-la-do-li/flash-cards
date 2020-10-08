const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck.cardSet[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns++;
    return turn.giveFeedback(guess);
  }

  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length) / this.turns * 100);
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
};


module.exports = Round;
