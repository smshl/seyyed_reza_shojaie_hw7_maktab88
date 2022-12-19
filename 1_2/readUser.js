import { userData, params } from "../1_1/mergeData.js";

export function readUser(sortBy = "uid", tableShow = false) {
	//Validates inputs
	if (!params.includes(sortBy)) {
		console.log("Invalid sort parameter");
		return;
	}

	//Sorts objects by properties that may not be used in all objects
	userData.sort(function (a, b) {
		if (typeof a[sortBy] === "string")
			return a[sortBy].localeCompare(b[sortBy]);
		return a[sortBy] - b[sortBy];
	});

	//Shows data listed in a table
	if (tableShow) {
		console.table(userData);
		return;
	}
	console.log(userData);
}
// readUser();
