import { userData, params } from "../1_1/mergeData.js";
import { readUser } from "../1_2/readUser.js";

function updateUser(user) {
	//validation part
	//checks if the user has uid
	if (!Object.keys(user).includes("uid")) {
		console.log("no userId");
		return;
	}
	//checks if the userId exists in the userData
	let userValid = userData.filter((e) => e.uid === user.uid);
	if (!userValid.length) {
		console.log("this use id doesnt exist");
		return;
	}

	userValid.map((i) => {
		for (const key in user) {
			i[key] = user[key];
		}
	});
	readUser();
}

updateUser({
	uid: 6,
	firstName: "asghar",
	lastName: "kara",
	position: "Admin",
	city: "sari",
});
