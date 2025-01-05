import("//unpkg.com/mathlive?module").then(function(test) {
    test.renderMathInDocument()
});
import "https://unpkg.com/@cortex-js/compute-engine?module"

const options = document.getElementById("options");
const output = document.getElementById('output');
const formula = document.getElementById('formula');
const copy = document.getElementById('copy');
const save = document.getElementById('save');
let convertTo = options.value;

formula.addEventListener('input', convert);
options.addEventListener('change', variable);
options.addEventListener('change', convert);
copy.addEventListener('click', copyOutput);
save.addEventListener('click', saveOutput);

function variable(){
    convertTo = options.value; 
}

function convert(){
    output.innerHTML = formula.getValue(convertTo);
}

function copyOutput(){
    navigator.clipboard.writeText(output.textContent || output.value);
}

let conversionHistory = JSON.parse(localStorage.getItem('key')) || [];

function saveOutput() {
    conversionHistory = JSON.parse(localStorage.getItem('key')) || [];
    if (options.value && (output.textContent || output.value)) {
        const entry = [output.textContent || output.value, options.value];
        conversionHistory.push(entry);
        localStorage.setItem('key', JSON.stringify(conversionHistory));
        console.log((JSON.parse(localStorage.getItem('key'))[0]));
    } else {
        console.error('Output or options value is missing.');
    }
}



