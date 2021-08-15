class GuessingGame {
    constructor() {}

    // this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    // this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        return Math.round((this.min + this.max) / 2);
    }

    // this method is called if prev call of `guess()` returned number which is greater than answer
    lower() {
        return this.max = this.guess();
    }

    // this method is called if prev call of `guess()` returned number which is lower than answer
    greater() {
        return this.min = this.guess();
    }
}

module.exports = GuessingGame;
