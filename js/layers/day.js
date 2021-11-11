addLayer("plants", {
    name: "plants",
    startData() { return {
        unlocked: true
    }},
    layerShown: false,
    grid: {
        rows: 1,
        maxCols: 9,
        cols: 3,
        getStartData(id) {
            if (id == 101) return "shovel"
            else if (id == 102) return new Card("plantSunflower", 0)
            else if (id == 103) return new Card("plantPeashooter", 0)
        },
        getDisplay(data, id) {
            if (id == 101)
                return allNames[data][player.h.language]
            else
                return data.getDisplayName()
        },
        onClick(data, id) {
            if (player.l.currentItemInHand == id)
               player.l.currentItemInHand = -1
            else if (id == 101 || data.cd.equals(0))
               player.l.currentItemInHand = id
        },
        getStyle(data, id) {
            if (player.l.currentItemInHand == id)
                return {'background-color': plantSelectedColour}
            else if (id == 101)
                return {'background-color': plantUnselectedColour}
            else
                return data.getStyle()
        },
        getTooltip(data, id) {
            return data
        }
    },
    update(diff) {
        // plants CD
        for (let i = 102; i < 109; i++) {
            p = getGridData(this.layer, i)
            if (p !== null) p.update(diff)
        }
    }
})

addLayer("l", {
    name: "lawn",
    symbol: "L",
    position: 0,
    startData() { return {
        unlocked: true,
		currentItemInHand: -1,
    }},
    color() { return lawnColour },
    row: 0,
    layerShown: true,
    grid: {
        rows: 5,
        cols: 9,
        getStartData(id) {
            return {"plants": [], "bullets": [], "zombies": []}
        },
        getDisplay(data, id) {
            if (data.plants.length == 0)
                return ""
            else
                return data.plants[0].getDisplayName()
        },
        onClick(data, id) {
            if (player[this.layer].currentItemInHand != -1) {
                let card = getGridData("plants", player[this.layer].currentItemInHand)
                if (card == "shovel") {
                    data.plants = []
                    player[this.layer].currentItemInHand = -1
                }
                else if (data.plants.length == 0) {
                    card.cd = card.getMaxCD()
                    data.plants = [card.createPlant(id)]
                    player[this.layer].currentItemInHand = -1
                }
            }
        },
        getTooltip(data, id) {
            return data
        },
        getStyle(data, id) {
            if (data.plants.length != 0) {
                return data.plants[0].getStyle()
            }
            return {'background-color': lawnColour}
        },
    },
    tabFormat: ["blank",
        "blank",
        ["layer-proxy", ["plants", ["grid"]]],
        "blank",
        "blank",
        "blank",
        "grid",],
    update(diff) {
        // plants update
        for (let i = 1; i < 6; i++) {
            for (let j = 1; j < 10; j++) {
                p = getGridData(this.layer, i * 100 + j)
                for (pl of p.plants)
                    pl.update(diff)
            }
        }
    }
})
