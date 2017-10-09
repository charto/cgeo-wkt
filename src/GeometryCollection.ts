// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class GeometryCollection extends cgeo.GeometryCollection {

	writeWKT() {
		const result = [];

		for(let child of this.childList) {
			if(child) {
				if(child.kind == this.defaultWKT) {
					result.push('(' + child.writeWKT() + ')');
				} else {
					result.push(child.toWKT());
				}
			}
		}

		return(result.join(','));
	}

}
