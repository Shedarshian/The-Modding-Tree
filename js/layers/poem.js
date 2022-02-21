addLayer("p", {
    name: "poem",
    color: "red",
    symbol: "詩",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        basePointsLag: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
        pointsLag: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)]
    }},
    row: 1,
    resource: "poem",
    layerShown() {
        return hasUpgrade("s", 34) || (player[this.layer].points.neq(0));
    },
    baseResource: "click",
    baseAmount() { return player.s.points; },
    requires: new Decimal("1e26"),
    type: "static",
    base: 10,
    exponent: 1,
    roundUpCost: true,
    branches: ['s'],
    effect() {
        let softcap = new Decimal(1000);
        let gen = player[this.layer].points;
        if (gen.gte(softcap)) {
            gen = gen.pow(0.5).times(softcap.pow(0.5));
        }
        return new Decimal(4).pow(gen);
    },
    effectDescription() {
        let eff = this.effect();
        let softcap = new Decimal(1000);
        return "each poem boost your point and click gain by 4. Currently: " + format(eff) + (player[this.layer].points.gte(softcap) ? " (softcapped)" : "")
    },
    milestones: {
        0: {
            requirementDescription: "3 poems<br>關關雎鳩，在河之洲。",
            effectDescription: "Generate 100% of your click gain each second.",
            done() {
                return player[this.layer].points.gte(3);
            }
        },
        1: {
            requirementDescription: "4 poems<br>呦呦鹿鳴，食野之苹。",
            effectDescription: "Buy one of the first click buyable each tick.",
            done() {
                return player[this.layer].points.gte(4);
            }
        },
        2: {
            requirementDescription: "6 poems<br>溯洄從之，道阻且長。",
            effectDescription: "Keep click upgrades on poem reset.",
            done() {
                return player[this.layer].points.gte(5);
            }
        },
        3: {
            requirementDescription: "10 poems<br>昔我往矣，楊柳依依。",
            effectDescription: "Remove all of the 1 second lags in the click upgrades.",
            done() {
                return player[this.layer].points.gte(10);
            }
        },
        4: {
            requirementDescription: "20 poems<br>青青子衿，悠悠我心。",
            effectDescription: "You can buy max poems.",
            done() {
                return player[this.layer].points.gte(20);
            }
        },
        5: {
            requirementDescription: "1,000 poems<br>它山之石，可以攻玉。",
            effectDescription: "Auto buy poems.",
            done() {
                return player[this.layer].points.gte(1000);
            }
        },
        6: {
            requirementDescription: "2,500 poems<br>碩鼠碩鼠，無食我黍。",
            effectDescription: "Poem resets nothing.",
            done() {
                return player[this.layer].points.gte(2500);
            }
        }
    },
    canBuyMax() {
        return hasMilestone('p', 4);
    },
    autoPrestige() {
        return hasMilestone('p', 5);
    },
    resetsNothing() {
        return hasMilestone('p', 6);
    }
})