// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

export type This = Geometry & cgeo.Geometry;

@cgeo.mixin(cgeo.Geometry as { new(): cgeo.Geometry })
export class Geometry {

	writeWKT() { return(''); }

	toWKT(this: This) {
		return(
			cgeo.GeometryKind[this.kind].toUpperCase() +
			'(' + this.writeWKT() + ')'
		);
	}

	defaultWKT: cgeo.GeometryKind;

}
