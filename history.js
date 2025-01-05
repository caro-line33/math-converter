let historyArray = JSON.parse(localStorage.getItem('key'))
const historyContainer = document.getElementById('historyContainer');

function display(){
    historyArray = JSON.parse(localStorage.getItem('key'))
    for (let i = 0; i < historyArray.length; i++){
        console.log((historyArray[i])[0])
        const convertedValue = document.createElement('span'); 
        convertedValue.textContent = ((historyArray[i])[0]);
        const textType = document.createElement('span');
        textType.textContent = ((historyArray[i])[1])
        const entryContainer = document.createElement('div');
        const deleteButton = document.createElement('button');
        const currentIndex = i;
        deleteButton.textContent = 'X';
        deleteButton.id = currentIndex;
        entryContainer.appendChild(convertedValue);
        entryContainer.appendChild(textType);
        entryContainer.appendChild(deleteButton);
        historyContainer.appendChild(entryContainer)
    
    } 
    
}

display();

const clearHistory = document.getElementById('clearHistory')
clearHistory.addEventListener('click', clearAll);
function clearAll(){
    localStorage.clear();
    historyArray = [];
    display();

}

