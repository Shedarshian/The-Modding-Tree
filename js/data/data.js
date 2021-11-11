const plantSelectedColour = "#3F3FFF"
const plantCDColour = "#7F7F7F"
const plantUnselectedColour = "#FFFFFF"
const sunGenColour = "#FF7F00"
const lawnColour = "#4BDC13"

const allNames = {
    "shovel": {"en": "shovel", "zh": "铲子"},
    "plantSunflower": {"en": "sunflower", "zh": "向日葵"},
    "plantPeashooter": {"en": "peashooter", "zh": "豌豆射手"},
}

function setName(obj, name) {
    obj.name = name
    obj.getDisplayName = function () {
        return allNames[this.name][player.h.language]
    }
    return obj
}