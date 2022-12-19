import { additionalPersonData, personData } from "./person-Data.js";

export function mergeData() {
	return personData.map((person) =>
		Object.assign(
			person,
			...additionalPersonData.filter((ad) => ad.uid === person.uid)
		)
	);
}
export let userData = mergeData();
export let params = Object.keys(userData[0]); //gathers all keys used in objects of data array

// console.log(mergeData());
