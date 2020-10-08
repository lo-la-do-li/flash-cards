const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound || null;
  }

  start() {
    const cardSet = prototypeQuestions.map(question => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    })
    const deck = new Deck(cardSet);
    this.currentRound = new Round(deck);
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
