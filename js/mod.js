let modInfo = {
	name: "The Character Tree",
	id: "char",
	author: "shedarshian",
	pointsName: "points",
	modFiles: ["tree.js", "layers/day.js", "data/helper.js", "data/data.js"],
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Gotta begin somewhere.",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Gotta begin somewhere.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "getName"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){

}

// function fixData(defaultData, newData) {
// 	if (Array.isArray(defaultData) && defaultData.length == 0) {
// 		for (item in newData) {
// 			var defaultObject = null
// 			if (newData[item] === null) {}
// 			else if (newData[item].type == "Plant")
// 				defaultObject = Plant(newData[item].name, newData[item].level, newData[item].pos);
// 			else if (newData[item].type == "Card")
// 				defaultObject = Card(newData[item].name, newData[item].level, newData[item].pos);
// 			else if (newData[item].type == "Bullet")
// 				defaultObject = Bullet(newData[item].name, newData[item].level, newData[item].pos);
// 			if (newData[item] === undefined)
// 				newData[item] = defaultObject;
// 			else if (defaultObject === null)
// 				newData[item] = null;
// 			else
// 				fixData(defaultObject, newData[item]);
// 		}
// 	}
// 	else for (item in defaultData) {
// 		if (defaultData[item] == null) {
// 			if (newData[item] === undefined)
// 				newData[item] = null;
// 		}
// 		else if (Array.isArray(defaultData[item])) {
// 			if (newData[item] === undefined)
// 				newData[item] = defaultData[item];
// 			else
// 				fixData(defaultData[item], newData[item]);
// 		}
// 		else if (defaultData[item] instanceof Decimal) { // Convert to Decimal
// 			if (newData[item] === undefined)
// 				newData[item] = defaultData[item];

// 			else
// 				newData[item] = new Decimal(newData[item]);
// 		}
// 		else if ((!!defaultData[item]) && (typeof defaultData[item] === "object")) {
// 			if (newData[item] === undefined || (typeof defaultData[item] !== "object"))
// 				newData[item] = defaultData[item];

// 			else
// 				fixData(defaultData[item], newData[item]);
// 		}
// 		else {
// 			if (newData[item] === undefined)
// 				newData[item] = defaultData[item];
// 		}
// 	}
// }