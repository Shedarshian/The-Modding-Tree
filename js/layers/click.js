addLayer("s", {
    name: "click",
    color: "green",
    symbol: "点",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        basePointsLag: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
        pointsLag: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)]
    }},
    row: 0,
    resource: "click",
    layerShown: true,
    baseResource: "points",
    baseAmount() { return player.points; },
    requires: new Decimal(10),
    type: "normal",
    exponent: 0.5,
    upgrades: {
        11: {
            title: "始(Begin)",
            description: "Boost point gain by 2.",
            cost: new Decimal(1),
            effect() {
                let gain = new Decimal(2);
                if (hasUpgrade('s', 23))
                    gain = gain.times(2);
                return gain;
            },
            effectDisplay() { return format(this.effect()) + "x"; }
        },
        12: {
            title: "源(Origin)",
            description: "Boost point gain based on point, but lag for about 1 second.",
            cost: new Decimal(2),
            effect() {
                let gain = player[this.layer].basePointsLag[0].add(1).pow(0.5);
                if (hasUpgrade('s', 23))
                    gain = gain.times(2);
                let softcap = new Decimal(1000000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (gain.gt(softcap))
                    gain = gain.times(softcap).pow(0.5);
                return gain;
            },
            effectDisplay() {
                let eff = this.effect();
                let s = format(eff) + "x";
                let softcap = new Decimal(1000000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (eff.gt(softcap))
                    s += " (softcapped)";
                return s;
            }
        },
        13: {
            title: "量(Amount)",
            description: "Boost click gain based on click, but lag for about 1 second.",
            cost: new Decimal(10),
            effect() {
                let gain = player[this.layer].pointsLag[0].add(1).pow(0.5);
                if (hasUpgrade('s', 23))
                    gain = gain.times(2);
                let softcap = new Decimal(160000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (gain.gt(softcap))
                    gain = gain.times(softcap).pow(0.5);
                return gain;
            },
            effectDisplay() {
                let eff = this.effect();
                let s = format(eff) + "x";
                let softcap = new Decimal(160000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (eff.gt(softcap))
                    s += " (softcapped)";
                return s;
            }
        },
        14: {
            title: "漲(Gain)",
            description: "Boost point gain based on click, but lag for about 1 second.",
            cost: new Decimal(100),
            effect() {
                let gain = player[this.layer].pointsLag[0].add(1).pow(0.5);
                if (hasUpgrade('s', 23))
                    gain = gain.times(2);
                let softcap = new Decimal(160000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (gain.gt(softcap))
                    gain = gain.times(softcap).pow(0.5);
                return gain;
            },
            effectDisplay() {
                let eff = this.effect();
                let s = format(eff) + "x";
                let softcap = new Decimal(160000);
                if (hasUpgrade('s', 31))
                    softcap = softcap.times(100);
                if (eff.gt(softcap))
                    s += " (softcapped)";
                return s;
            }
        },
        21: {
            title: "線(Linear)",
            description: "Generate 1% of your click gain each second.",
            cost: new Decimal(1000),
        },
        22: {
            title: "超(Super)",
            description: "Boost click gain by the OOM of point, but lag for about 1 second.",
            cost: new Decimal(100000),
            effect() {
                return player[this.layer].basePointsLag[0].add(1).log10().add(1);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "x"; }
        },
        23: {
            title: "促(Boost)",
            description: "Times all of the first row effect by 2.",
            cost: new Decimal(2000000),
        },
        24: {
            title: "生(Born)",
            description: "Unlock one click buyable.",
            cost: new Decimal("1e9"),
        },
        31: {
            title: "破(Break)",
            description: "Raise the softcap threshold of the first row effects.",
            cost: new Decimal("5e14")
        },
        32: {
            title: "被(Passive)",
            description: "Add another 9% generation of your click gain each second.",
            cost: new Decimal("1e19")
        },
        33: {
            title: "弱(Weak)",
            description: "Make the first click buyable cheaper.",
            cost: new Decimal("1e20")
        },
        34: {
            title: "新(New)",
            description: "Unlock new layers.",
            cost: new Decimal("1e26")
        }
    },
    buyables: {
        11: {
            title: "買(Buy)",
            cost(x) {
                let base = new Decimal(10);
                if (hasUpgrade('s', 33))
                    base = base.times(0.5);
                return base.pow(new Decimal(8).add(x));
            },
            effect() { return new Decimal(2).pow(getBuyableAmount(this.layer, this.id)); },
            unlocked() { return hasUpgrade('s', 24) },
            display() { return "Boost points gain by 2.\nCost: " + format(this.cost()) + "\nCurrently: " + format(buyableEffect(this.layer, this.id)) + "x" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        }
    },
    update(diff) {
        if (hasMilestone('p', 3)) {
            player[this.layer].basePointsLag[0] = player.points;
            player[this.layer].pointsLag[0] = player.s.points;
        }
        else {
            for (let i = 0; i < 40 && i < 40 * diff; i++) {
                player[this.layer].basePointsLag.shift();
                player[this.layer].basePointsLag.push(player.points);
                player[this.layer].pointsLag.shift();
                player[this.layer].pointsLag.push(player.s.points);
            }
        }
        if (hasMilestone('p', 1) && this.buyables[11].canAfford()) {
            this.buyables[11].buy();
        }
    },
    gainMult() {
        let mult = new Decimal(1);
        if (hasUpgrade('s', 13))
            mult = mult.times(upgradeEffect('s', 13));
        if (layerunlocked('p'))
            mult = mult.times(layers.p.effect());
        return mult;
    },
    onPrestige(gain) {
        player[this.layer].basePointsLag = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)];
        player[this.layer].pointsLag = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)]
    },
    passiveGeneration() {
        let gen = new Decimal(0);
        if (hasUpgrade('s', 21))
            gen = gen.add(0.01);
        if (hasUpgrade('s', 32))
            gen = gen.add(0.09);
        if (hasMilestone('p', 0))
            gen = gen.add(1);
        return gen;
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) {
            if (resettingLayer == "p" && hasMilestone('p', 2)) {
                layerDataReset(this.layer, ["upgrades"]);
            }
            else {
                layerDataReset(this.layer, []);
            }
        }
    }
})
