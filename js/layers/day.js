addLayer("S", {
    name: "score",
    symbol: "点",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    row: 0,
    resource: "score",
    layerShown: true,
    update(diff) {
        
    }
})
