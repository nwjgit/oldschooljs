import { writeFileSync } from "node:fs";

import { Items } from "../src";
import { USELESS_ITEMS } from "../src/structures/Items";
import { moidLink } from "./prepareItems";

const exitingKeys = new Set<string>();
const duplicates = new Set<number>();
let str = "export enum EItem {";
outer: for (const item of Items.values()) {
	if (!item.tradeable_on_ge && !item.equipment) continue;
	for (const str of [
		"Xeric's aid",
		"Overload",
		"Revitalisation",
		"Sigil",
		"10th",
		"4th",
		"Prayer enh",
		"'24",
		"20",
	]) {
		if (item.name.startsWith(str)) {
			continue outer;
		}
	}
	for (const str of ["+", "Twisted ("]) {
		if (item.name.includes(str)) {
			continue outer;
		}
	}
	if (USELESS_ITEMS.includes(item.id)) {
		continue;
	}
	let key = item.wiki_name ?? item.name;
	key = key.replace("3rd", "third");
	key = key.replace(/[^\w\s]|_/g, "");
	key = key.replace(/\s+/g, "_");
	key = key.toUpperCase();
	if (exitingKeys.has(key)) {
		duplicates.add(item.id);
		continue;
	}
	exitingKeys.add(key);
	str += `\n\t${key} = ${item.id},`;
}
str += "\n}";
str += "\n";
writeFileSync("./src/EItem.ts", str);
console.log(`Duplicates: ${moidLink(Array.from(duplicates))}`);
