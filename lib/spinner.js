var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
" ",
"A",
" ",
"B",
"O",
"T",
" ",
"M",
"A",
"D",
"D",
"E",
" ",
"B",
"Y",
" ",
" ",
"U",
"R",
"U",
"S",
" ",   
"A",   
"N",
"D",
" ",
"S",
"A",
"I",
"T",
"A",
"M",
"A",
" ",
"A",   
"I",
" ",

""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}