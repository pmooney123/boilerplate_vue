import {Screen} from "./screen"
import {State} from "./state"

class Game {
    constructor() {
        //default game screen
        this.screen = new Screen()
        this.screen.start()

        //optional subscreen
        this.sub = null

        //game values
        this.state = new State()

    }

    update() {
        this.setOptionText()
    }
    getOptionElements() {
        let screen = this.getScreen()
        let text = []
        for (let i = 0; i < screen.options.length; i++) {
            let isBold = false
            if (i === this.screen.index) {
                isBold = true
            }
            text.push({
                text: screen.options[i].tag,
                bold: isBold,
            })
        }
        return text
    }
    setOptionText() {
        let elements = this.getOptionElements()

        let div = document.getElementById("options")
        div.innerHTML = ""

        elements.forEach(element => {
            let child = document.createElement("div")
            let text = element.text
            if (element.bold) {
                text = ("&lt").concat(text.concat("&gt"))
                child.style.fontWeight = "bold"
            }
            child.innerHTML = text
            div.appendChild(child)
        })
    }

    runOption() {
        this.getScreen().options[this.getScreen().index].run(this)
    }

    getScreen() {
        if (this.hasSub()) {
            return this.getSub()
        } else {
            return this.screen
        }
    }

    getState() {
        return this.state
    }

    getSub() {
        return this.sub
    }

    setSub(sub) {
        this.sub = sub
    }

    hasSub() {
        return this.sub != null
    }

}

export {Game}