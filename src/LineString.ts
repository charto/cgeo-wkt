// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class LineString extends cgeo.LineString {

	writeWKT() {
		const content: string[] = [];
		const posList = this.posList;
		const count = posList.length;

		for(let num = 0; num < count; num += 2) {
			content.push(posList[num] + ' ' + posList[num + 1]);
		}

		return(content.join(','));
	}

}
