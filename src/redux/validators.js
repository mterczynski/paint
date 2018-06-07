export function isNumber(input){
	if(typeof input != 'number'){
		throw new Error('Input must be number');
	}
}

export function isInteger(input){
	if(Number.isInteger(input) == false){
		throw new Error('Input must be integer');
	}
}

export function isFromRange(input, from, to){
	isNumber(input);
	if(from > to){
		throw new Error('"From" must be less than "to"');
	}
	if(input < from){
		throw new Error('Input is too small');
	}
	if(input > to){
		throw new Error('Input is too big');
	}
}

export function isString(input){
	if(typeof input != 'string'){
		throw new Error('Input must be string');
	}
}

export function isRGBColor(input){
	isString(input);
	const regex = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
	if(regex.exec(input) == null){
		throw new Error('Input must be rgb color');
	}
}
