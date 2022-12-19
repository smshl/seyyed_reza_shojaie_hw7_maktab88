import { mergeData } from "../1_1/script.js";

let userData = mergeData();

function readUser(sortBy = "uid") {
	//gathers all keys used in objects of data array
	// function objectAllKeysExtractor() {
	// 	let keysList = [];
	// 	for (const obj of userData) {
	// 		keysList.push(...Object.keys(obj));
	// 	}
	// 	return [...new Set(keysList)];
	// }

    let params = Object.keys(userData[0]);
    console.log(params);

	//validates inputs
	if (
		typeof userData !== "object" ||
		!params.includes(sortBy)
	) {
		console.log("Invalid input(s)");
		return;
	}

	//sorts objects by properties that may not be used in all objects
	userData.sort(function (a, b) {
		if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string")
			return a[sortBy].localeCompare(b[sortBy]);

		let x = typeof a[sortBy] === "undefined" ? Infinity : a[sortBy];
		let y = typeof b[sortBy] === "undefined" ? Infinity : b[sortBy];
		return x - y;
	});
	console.log(userData);
	// console.table(objectAllKeysExtractor());
}



// function createUser(newUser) {
// 	//validation part
// 	if (typeof newUser !== "object") {
// 		console.log("not a valid input");
// 		return;
// 	}
	
// 	let userIds = [];
// 	for (const object of userData) {
// 		userIds.push(object.uid);
// 		if (object.uid === newUser.uid) {
// 			console.log("this user exsists and can not be created again");
// 			return;
// 		}
//     }
//     if (!newUser.uid) newUser = Object.assign({ uid: userIds[userIds.length - 1] + 1 }, newUser);
    
// 	userData.push(newUser);
// 	readUser();
// }

// function updateUser(user) {
//     if (!user.uid) console.log('no userId');
//     for (const item of userData) {
//         if (item.uid === user.uid) {
//             item.firstName=user.firstName;
//             item.firstName=user.lastName;
//         }
//     }
    
// }

readUser('lastName');
// createUser({uid:50,
//     firstName: 'sara',
//     lastName: 'rajabi',
//     position: 'programmer',
//     city: 'karaj'});
// createUser({
//     firstName: 'sohrab',
//     lastName: 'azimi',
//     position: 'programmer',
//     city: 'saveh'});

