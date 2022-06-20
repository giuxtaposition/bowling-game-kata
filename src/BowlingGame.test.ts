import { Game } from "./BowlingGame"

describe("BowlingGame", () => {
    let game: Game

    beforeEach(() => {
        game = new Game()
    })

    const rollMany = (n: number, pins: number) => {
        for (let i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    test("gutter game", () => {
        rollMany(20, 0)
        expect(game.getScore()).toEqual(0)
    })

    test("all ones", () => {
        rollMany(20, 1)
        expect(game.getScore()).toEqual(20)
    })
})
