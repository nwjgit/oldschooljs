"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrizzlyBearTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.GrizzlyBearTable = new LootTable_1.default()
    .every("Bones")
    .every("Bear fur")
    .every("Raw bear meat")
    .tertiary(25, "Ensouled bear head", 1)
    .tertiary(90, "Clue scroll (beginner)", 1);
exports.default = new SimpleMonster_1.default({
    id: 3423,
    name: "Grizzly bear",
    table: exports.GrizzlyBearTable,
    aliases: ["grizzly", "grizzly bear"],
});
