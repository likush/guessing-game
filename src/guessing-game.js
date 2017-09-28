class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        this.guessed = Math.round((this.max + this.min) / 2);
        return this.guessed
    }

    lower() {
        this.max = this.guessed
    }

    greater() {
        this.min = this.guessed
    }
}

module.exports = GuessingGame;
