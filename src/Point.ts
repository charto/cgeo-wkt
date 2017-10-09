// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class Point extends cgeo.Point {

	writeWKT() {
		return(this.pos[0] + ' ' + this.pos[1]);
	}

}
