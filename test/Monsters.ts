import test from 'tape';

import { Monsters } from '../dist';
import { checkThreshold } from './testUtil';

test('Giant Mole', async (test): Promise<void> => {
	const expectedRates = {
		'Big bones': 1,
		'Mole claw': 1,
		'Adamant longsword': 12.8,
		'Mithril platebody': 14.22,
		'Mithril bar': 42.67,
		'Oyster pearls': 128,
		'Baby mole': 3000,
		'Curved bone': 5013,
		'Clue scroll (elite)': 500,
		'Long bone': 400,
		'Rune med helm': 128,
		'Mithril battleaxe': 128
	};

	const number = 3_000_000;
	const loot = Monsters.GiantMole.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});

test('Zulrah', async (test): Promise<void> => {
	const expectedRates: { [key: string]: number } = {
		'Pet snakeling': 4000,
		'Jar of swamp': 3000,
		'Tanzanite fang': 512,
		'Magic fang': 512,
		'Serpentine visage': 512,
		'Uncut onyx': 512,
		'Tanzanite mutagen': 6580,
		'Magma mutagen': 6580,
		Snakeskin: 22.55 / 35 / 2,
		'Mahogany logs': 31 / 50 / 2,
		'Zul-andra teleport': 16.53 / 4 / 2,
		'Dragon bones': 31 / 12 / 2,
		Battlestaff: 24.8 / 10 / 2,
		'Dragon halberd': 124 / 2,
		'Death rune': 20.67 / 300 / 2,
		"Zulrah's scales": 1 / (199 + 500 / (49.6 / 2))
	};

	const number = 10_000_000;
	const loot = Monsters.Zulrah.kill(number);
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});