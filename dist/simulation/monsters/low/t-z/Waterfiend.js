"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const HerbDropTable_1 = __importDefault(require("../../../subtables/HerbDropTable"));
const RareDropTable_1 = require("../../../subtables/RareDropTable");
const RareSeedTable_1 = __importDefault(require("../../../subtables/RareSeedTable"));
const WaterfiendTable = new LootTable_1.default()
    .every("Water rune")
    .every("Fiendish ashes")
    .oneIn(3000, "Mist battlestaff")
    .add("Staff of water", 1, 6)
    .add("Water battlestaff", 1, 4)
    .add("Adamant chainbody", 1, 2)
    .add("Adamant warhammer", 1, 2)
    .add("Rune med helm", 1, 2)
    .add("Mystic water staff", 1, 1)
    .add("Blue d'hide vambraces", 1, 1)
    .add("Rune full helm", 1, 1)
    .add("Mithril arrow", 90, 10)
    .add("Water rune", 150, 6)
    .add("Sapphire bolts", 15, 5)
    .add("Death rune", 23, 5)
    .add("Blood rune", 17, 3)
    .add("Mist rune", [25, 75], 2)
    .add("Mud rune", [75, 100], 2)
    .add("Steam rune", [40, 60], 2)
    .add("Mithril ore", [10, 20], 4)
    .add("Raw lobster", 18, 3)
    .add("Raw shark", 8, 3)
    .add("Shark", 2, 3)
    .add("Mithril bar", [10, 15], 1)
    .add("Uncut sapphire", 3, 1)
    .add("Uncut emerald", 3, 1)
    .add("Uncut ruby", 3, 1)
    .add("Uncut diamond", 3, 1)
    .add(HerbDropTable_1.default, 1, 9)
    .add(RareSeedTable_1.default, 1, 4)
    .add("Watermelon seed", [5, 15], 3)
    .add("Coins", [2000, 3000], 15)
    .add("Water orb", [6, 10], 8)
    .add("Vial of water", [40, 50], 4)
    .add("Water talisman", 1, 4)
    .add("Oyster", 3, 2)
    .add("Seaweed", [20, 30], 2)
    .add("Snape grass", [20, 30], 2)
    .add(RareDropTable_1.GemTable, 1, 3)
    .tertiary(24, "Crystal shard")
    .tertiary(128, "Clue scroll (hard)");
exports.default = new SimpleMonster_1.default({
    id: 2916,
    name: "Waterfiend",
    table: WaterfiendTable,
    aliases: ["waterfiend"],
});
