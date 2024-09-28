"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CallistoUniqueTable = new LootTable_1.default()
    .oneIn(196, "Claws of callisto")
    .oneIn(256, "Dragon 2h sword")
    .oneIn(256, "Dragon pickaxe")
    .oneIn(360, "Voidwaker hilt")
    .oneIn(512, "Tyrannical ring");
const CallistoSecondarySupplyTable = new LootTable_1.default({ limit: 18 })
    .add("Blighted anglerfish", [5, 6], 1)
    .add("Blighted karambwan", [5, 6], 1)
    .add("Blighted super restore(3)", [3, 4], 1)
    .add("Blighted super restore(4)", [3, 4], 1)
    .add("Ranging potion(2)", [2, 3], 1)
    .add("Super combat potion(2)", [2, 3], 1);
const CallistoTable = new LootTable_1.default()
    .every("Big bones")
    .every(CallistoUniqueTable)
    .add("Rune pickaxe", 5, 8)
    .add("Rune 2h sword", 3, 3)
    .add("Mystic earth staff", 4, 2)
    .add("Mystic robe top", 4, 2)
    .add("Mystic robe bottom", 4, 2)
    .add("Rune kiteshield", 4, 2)
    .add("Rune platebody", 4, 2)
    .add("Blood rune", 500, 7)
    .add("Death rune", 700, 7)
    .add("Chaos rune", 900, 7)
    .add("Soul rune", 600, 5)
    .add("Cannonball", 600, 4)
    .add("Mahogany logs", 600, 6)
    .add("Limpwurt root", 100, 5)
    .add("Magic logs", 225, 5)
    .add("Uncut ruby", 75, 4)
    .add("Uncut diamond", 35, 3)
    .add("Red dragonhide", 170, 3)
    .add("Uncut dragonstone", 5, 2)
    .add("Coconut", 135, 2)
    .add("Grimy toadflax", 150, 1)
    .add("Grimy dwarf weed", 45, 1)
    .add("Grimy ranarr weed", 45, 1)
    .add("Grimy snapdragon", 45, 1)
    .add("Ranarr seed", 11, 5)
    .add("Snapdragon seed", 8, 5)
    .add("Coins", 50_000, 10)
    .add("Dark crab", 50, 5)
    .add("Super restore(4)", 10, 5)
    .add("Supercompost", 225, 4)
    .add("Dragon bones", 75, 3)
    .add("Wilderness crabs teleport", 4, 3)
    .add("Blighted anglerfish", 100, 1)
    .tertiary(100, "Clue scroll (elite)")
    .tertiary(400, "Long bone")
    .tertiary(1500, "Callisto cub")
    .tertiary(5013, "Curved bone");
const CallistoTotalTable = new LootTable_1.default().every(CallistoSecondarySupplyTable).every(CallistoTable);
exports.default = new SimpleMonster_1.default({
    id: 6503,
    name: "Callisto",
    table: CallistoTotalTable,
    aliases: ["callisto"],
});
