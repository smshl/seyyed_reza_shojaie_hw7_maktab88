import { mergeData } from "../1_1/script.js";

let userData = mergeData();

function readUserData(objectData, sortBy = "uid") {
	//gathers all keys used in objects of data array
	function objectAllKeysExtractor() {
		let keysList = [];
		for (const obj of objectData) {
			keysList.push(...Object.keys(obj));
		}
		return [...new Set(keysList)];
	}

	//validates inputs
	if (
		typeof objectData !== "object" ||
		!objectAllKeysExtractor().includes(sortBy)
	) {
		console.log("Invalid input(s)");
		return;
	}

	//sorts objects by properties that may not be used in all objects
	objectData.sort(function (a, b) {
		if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string")
			return a[sortBy].localeCompare(b[sortBy]);

		let x = typeof a[sortBy] === "undefined" ? Infinity : a[sortBy];
		let y = typeof b[sortBy] === "undefined" ? Infinity : b[sortBy];
		return x - y;
	});
	console.log(userData);
	// console.table(objectData, objectAllKeysExtractor());
}



function createNewUser(newObject) {
	//validation part
	if (typeof newObject !== "object") {
		console.log("not a valid input");
		return;
	}
	
	let userIds = [];
	for (const object of userData) {
		userIds.push(object.uid);
		if (object.uid === newObject.uid) {
			console.log("this user exsists and can not be created again");
			return;
		}
    }
    if (!newObject.uid) newObject = Object.assign({ uid: Math.max(...userIds) + 1 }, newObject);
    
    // if (Object.keys(newObject).includes("uid"))

	userData.push(newObject);
	readUserData(userData);
}

// readUserData(userData,'lastName');
createNewUser({
    firstName: 'sara',
    lastName: 'rajabi',
    position: 'programmer',
    city: 'akraj'});