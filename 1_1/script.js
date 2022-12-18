import { additionalPersonData, personData } from "./person-Data.js";
export function mergeData() {
	return personData.map((person) =>
		Object.assign(
			person,
			...additionalPersonData.filter((ad) => ad.uid === person.uid)
		)
	);
}
console.log(mergeData());
