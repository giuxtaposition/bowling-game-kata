export class Game {
    private rolls: number[] = new Array(20)
    private currentRoll: number = 0

    public roll(pins: number): void {
        this.rolls[this.currentRoll++] = pins
    }

    public getScore(): number {
        let score = 0
        let frameIndex = 0

        for (let frame = 0; frame < 10; frame++) {
            if (this.isSpare(frameIndex)) {
                score += 10 + this.rolls[frameIndex + 2]
                frameIndex += 2
            } else {
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
                frameIndex += 2
            }
        }

        return score
    }

    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
    }
}
