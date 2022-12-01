
class Screen {
    constructor() {
        this.text = "default_text"
        this.options = []
        this.index = 0
    }
    setIndex(value) {
        this.index = value
        if (this.index >= this.options.length) {
            this.index = 0
        }
        if (this.index < 0) {
            this.index = this.options.length - 1
        }
    }
    incrementIndex(value) {
        this.index += value
        if (this.index >= this.options.length) {
            this.index = 0
        }
        if (this.index < 0) {
            this.index = this.options.length - 1
        }
    }

    start() {
        this.options = [
            {
                tag: "New",
                condition() {
                    return true
                },
                run(game) {
                    game.getScreen().text = "Welcome to a new game!"
                },
            },
            {
                tag: "Save",
                condition() {
                    return true
                },
                run(game) {
                    game.getScreen().text = "You successfully saved the game."
                },
            },
            {
                tag: "Load",
                condition() {
                    return true
                },
                run(game) {
                    game.getScreen().text = "You cannot load a game right now."
                },
            },
            {
                tag: "Options",
                condition() {
                    return true
                },
                run(game) {
                    game.getScreen().text = "This is not available."
                },
            },
        ]
        this.text = "Welcome to the game."
        return this
    }
}

export {Screen}