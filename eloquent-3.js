function min(a, b) {
	return Math.min(a , b);
}

function isEven(x) {
	if (x === 0) {
		return true;
	} else if (x === 1) {
		return false;
	} else if (x > 0) {
		return isEven(x - 2);
	} else if (x < 0) {
		return isEven(x + 2);
	}


}

function countBs(str) {
	var strArray = str.split("");
	var count = strArray.filter(function(x){
		return x === "B";
	}).length;
	return count;
}

function countChar(str, character) {
	var strArray = str.split("");
	var count = strArray.filter(function(x){
		return x === character;
	}).length;
	return count;
}
