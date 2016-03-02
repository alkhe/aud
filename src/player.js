import Lame from 'lame';
import Speaker from 'speaker';
import { createReadStream as r$ } from 'fs';

export let play = filename =>
	r$(filename)
		.pipe(new Lame.Decoder())
		.pipe(new Speaker());
