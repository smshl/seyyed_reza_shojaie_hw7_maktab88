import { userData, params } from "../1_1/mergeData.js";
import { readUser } from "../1_2/readUser.js";

function createUser(newUser) {
	//validation part
	if (typeof newUser !== "object") {
		console.log("not a valid input");
		return;
	}

	//checks the new user keys to be matched with the user data
	for (const key in newUser) {
		if (!params.includes(key)) {
			console.log(`The key "${key}" is not used within the input data`);
			return;
		}
	}

	for (const object of userData) {
		//checks if the user with this uid existsa
		if (object.uid === newUser.uid) {
			console.log("this user exsists and can not be created again");
			return;
		}
	}

	userData.push(newUser);
	console.log('Data successfully created');
}
createUser({
	uid: 7,
	firstName: "sara",
	lastName: "rajabi",
	position: "programmer",
	city: "qazvin",
});
readUser();
