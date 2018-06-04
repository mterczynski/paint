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
	if(from < to){
		throw new Error('"From" must be less than "to"');
	}
	if(input < from){
		throw new Error('Input is too small');
	}
	if(input > from){
		throw new Error('Input is too big');
	}
}