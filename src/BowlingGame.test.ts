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

    test("one spare", () => {
        rollSpare()
        game.roll(3)
        rollMany(17, 0)
        expect(game.getScore()).toEqual(16)
    })

    test("one strike", () => {
        rollStrike()
        game.roll(3)
        game.roll(4)
        rollMany(16, 0)
        expect(game.getScore()).toEqual(24)
    })

    test("perfect game", () => {
        rollMany(12, 10)
        expect(game.getScore()).toEqual(300)
    })

    const rollStrike = () => {
        game.roll(10)
    }

    const rollSpare = () => {
        game.roll(5)
        game.roll(5)
    }
})
