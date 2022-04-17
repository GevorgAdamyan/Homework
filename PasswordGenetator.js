let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperChars = [];
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let symbols = [];
let k = + prompt("Enter the number of symbols in your password");

chars.forEach(function(val) {
	upperChars.push(val.toUpperCase())
  return upperChars;
})

function gen (arr, n) {
    for (let i = n; i > 0; i--) {
        let ind = Math.floor(Math.random() * arr.length);
        let newSymbol = arr[ind];
        symbols.push(newSymbol);
    }
    return symbols;
}

function passGen (k) {
    gen(chars, k - 5);
		gen(specChars, 2);
		gen(nums, 2);
    gen(upperChars, 1);
    symbols = symbols.sort(() => Math.random() - 0.5)
    let newPass = symbols.join('')
		return newPass;
}

if (k > 6 && k < 15) {
	alert(passGen(k));
} else {
	alert("Invalid data")
}