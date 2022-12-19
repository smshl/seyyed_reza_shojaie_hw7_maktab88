import { userData,params } from "../1_1/mergeData.js";

export function readUser(sortBy = "uid") {
	//validates inputs
	if (!params.includes(sortBy)) {
		console.log("Invalid sort parameter");
		return;
	}

	//sorts objects by properties that may not be used in all objects
	userData.sort(function (a, b) {
		if (typeof a[sortBy] === "string")
			return a[sortBy].localeCompare(b[sortBy]);
		return a[sortBy] - b[sortBy];
	});
	console.log(userData);
	// console.table(userData); //shows data listed in a table
}
// readUser();
