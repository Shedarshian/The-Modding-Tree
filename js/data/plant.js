function Plant(name, level, pos) {
    var Plant = {}
    setName(Plant, name)
    Plant.type = "Plant"
    Plant.level = level
    Plant.pos = pos
    Plant.cycleTime = new Decimal(0)
    Plant.getCycle = function () { return new Decimal(1) }
    Plant.update = function (diff) {
        this.cycleTime = this.cycleTime.minus(diff).max(0)
        if (this.cycleTime.equals(0)) {
            this.cycleTime = this.getCycle()
        }
    }
    Plant.getStyle = function () { return {} }

    if (name == "plantSunflower") {
        Plant.cycleTime = new Decimal(18).times(Math.random()).plus(3)
        Plant.getCycle = function () { return new Decimal(25) }
        Plant.sunGain = new Decimal(25)
        Plant.getStyle = function () {
            if (this.cycleTime.lte(2)) {
                return {'background': sunGenColour}
            }
            return {}
        }
    }
    return Plant
}