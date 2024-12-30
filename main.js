
import("//unpkg.com/mathlive?module").then(function(test) {
    test.renderMathInDocument()
})

import "https://unpkg.com/@cortex-js/compute-engine?module"

const options = document.getElementById("options")
const output = document.getElementById('output')
const formula = document.getElementById('formula')
const copy = document.getElementById('copy')
let convertTo = options.value;

formula.addEventListener('input', convert);
options.addEventListener('change', variable);
options.addEventListener('change', convert);
copy.addEventListener('click', copyOutput);

function variable(){
    convertTo = options.value; 
}

function convert(){
    output.innerHTML = formula.getValue(convertTo);
}

function copyOutput(){
    navigator.clipboard.writeText(output.value);
}





