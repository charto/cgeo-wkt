// This file is part of cgeo-wkt, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as cgeo from 'cgeo';

export interface OptionsWKT {
	flipXY?: boolean;
}

export class State implements OptionsWKT {

	constructor(options: OptionsWKT = {}, geom: Geometry & cgeo.Geometry) {
		this.flipXY = options.flipXY || false;

		if(geom.hasZ()) { this.hasZ = true; this.suffix += 'Z'; }
		if(geom.hasM()) { this.hasM = true; this.suffix += 'M'; }
	}

	flipXY: boolean;
	hasZ: boolean;
	hasM: boolean;
	suffix = '';

}

export type This = Geometry & cgeo.Geometry;

@cgeo.mixin(cgeo.Geometry as any as { new(): cgeo.Geometry })
export class Geometry {

	writeWKT(this: This, state: State) { return(''); }

	writeFullWKT(this: This, state: State) {
		return(
			cgeo.GeometryKind[this.kind].toUpperCase() + state.suffix +
			'(' + this.writeWKT(state) + ')'
		);
	}

	toWKT(this: This, options?: OptionsWKT) {
		const state = new State(options, this);

		return(this.writeFullWKT(state));
	}

	defaultWKT: cgeo.GeometryKind;

}
