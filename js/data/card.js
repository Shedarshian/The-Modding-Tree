function Card(name, level) {
    var Card = {}
    setName(Card, name)
    Card.type = "Card"
    Card.level = level
    Card.cd = new Decimal(0)
    Card.getMaxCD = function () {
        return new Decimal(7.5)
    }
    Card.update = function (diff) {
        if (this.cd.gt(0))
            this.cd = this.cd.minus(diff).max(0)
    }
    Card.getStyle = function() {
        if (this.cd.equals(0))
            return {'background-color': plantUnselectedColour}
        else {
            pct = this.cd.div(this.getMaxCD()).mul(100)
            return {'background': 'linear-gradient(to bottom, ' + plantCDColour + ' ' + pct + '%, ' + plantUnselectedColour + ' ' + pct + '%)'}
        }
    }
    Card.createPlant = function (pos) {
        return Plant(this.name, this.level, pos)
    }
    return Card
}