// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

@cgeo.mixin()
export class CurvePolygon extends cgeo.CurvePolygon {

	writeWKT() {
		return(cgeo.MultiCurve.prototype.writeWKT.call(this));
	}

	@cgeo.proto(cgeo.GeometryKind.lineString)
	defaultWKT: cgeo.GeometryKind;

}
