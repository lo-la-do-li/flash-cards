const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
   let game = new Game();
   expect(game).to.be.an.instanceOf(Game);
 });

  it('should set current round to null by default', () => {
    let game = new Game();
    expect(game.currentRound).to.equal(null);
});

  it('should keep track of the round in the game', () => {
    let game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
