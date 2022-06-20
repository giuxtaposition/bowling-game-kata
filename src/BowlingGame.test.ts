import { Game } from "./BowlingGame"

describe("BowlingGame", () => {
    test("gutter game", () => {
        const game = new Game()

        for (let i = 0; i < 20; i++) {
            game.roll(0)
        }
        expect(game.getScore()).toEqual(0)
    })
})
