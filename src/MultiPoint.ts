// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class MultiPoint extends cgeo.MultiPoint {

	writeWKT() {
		const content: string[] = [];

		for(let child of this.childList) {
			content.push(child!.writeWKT());
		}

		return(content.join(','));
	}

}
