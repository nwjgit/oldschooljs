import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";

export const BearCubTable = new LootTable()
	.every("Bones")
	.every("Bear fur")
	.every("Raw bear meat")

	/* Tertiary */
	.tertiary(25, "Ensouled bear head", 1)
	.tertiary(90, "Clue scroll (beginner)", 1);

export default new SimpleMonster({
	id: 3909,
	name: "Bear cub",
	table: BearCubTable,
	aliases: ["bear cub"],
});
