import { mergeData } from "../1_1/script.js";

let userData = mergeData();

function read(objectData, sortBy = "uid") {
	//sorts objects by properties that may not be used in all objects
	objectData.sort(function (a, b) {
		if (typeof a[sortBy] === "string" && typeof b[sortBy] === "string")
			return a[sortBy].localeCompare(b[sortBy]);

		let x = typeof a[sortBy] === "undefined" ? Infinity : a[sortBy];
		let y = typeof b[sortBy] === "undefined" ? Infinity : b[sortBy];
		return x - y;
	});

	console.table(objectData);
}

function create(newObject) {
	if (typeof newObject !== "object") return "not a valid input";
	if (!Object.keys(newObject).includes("uid"))
		return "this input has no user id";

	for (const object of userData) {
		if (object.uid === newObject.uid)
			return "this user exsists and can not be created again";
	}
	userData.push(newObject);

	read();
}

// read(userData, "height");
create({ uid: 566, firstName: "hamid" }, "age");
//
//
//
//
//

// create({uid:566,age:65,height:178},'age');
// create({uid:566,age:30,height:178},'age');
//  = [
let x = [
	{ name: "reza", family: "shojaie", age: 34, city: "tehran" },
	{ name: "javad" },
	{ name: "zaher" },
	{ name: "samir" },
];
// 	{ name: "hadi" },
// ];
//
// console.log(a.name);
// console.log();
// console.log(x);
// console.log("----------------");
x.sort(function (a, b) {
	return a.name.localeCompare(b.name);
});
// console.log(x);
// console.log("----------------");
// a = a.sort((a, b) => a[0].toUpperCase() - b[0].toUpperCase());
// console.log(a);

// console.log(typeof 38);
