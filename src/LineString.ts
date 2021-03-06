// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';
import { State } from './Geometry';

@cgeo.mixin()
export class LineString extends cgeo.LineString {

	writeWKT(state: State) {
		const content: string[] = [];
		const x = this.x;
		const y = this.y;
		const z = this.z;
		const m = this.m;
		const count = x.length;
		let pt: string;

		for(let num = 0; num < count; ++num) {
			if(state.flipXY) {
				pt = y[num] + ' ' + x[num];
			} else {
				pt = x[num] + ' ' + y[num];
			}

			if(state.hasZ) pt += ' ' + ((z && z[num]) || 0);
			if(state.hasM) pt += ' ' + ((m && m[num]) || 0);

			content.push(pt);
		}

		return(content.join(','));
	}

}
