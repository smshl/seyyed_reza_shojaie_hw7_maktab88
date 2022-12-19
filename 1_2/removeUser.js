import { userData } from "../1_1/mergeData.js";
import { readUser } from "./readUser.js";

function removeUser(userId) {
	userId=parseInt(userId)
	//validation part
	if (typeof userId !== "number") {
		console.log("Input should be number");
		return;
	}

	//finds the user
	let userFound = userData.filter((e) => e.uid === userId);
	if (!userFound.length) {
		console.log("This use id doesnt exist");
		return;
	}
	let indexOfUserFound = userData.indexOf(...userFound);
	userData.splice(indexOfUserFound, 1);
	console.log("Data successfully removed");
}

removeUser('4');

readUser();
