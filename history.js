document.addEventListener('DOMContentLoaded', () => {
    const historyContainer = document.getElementById('historyContainer');
    const clearHistory = document.getElementById('clearHistory');

    function display(){
        historyContainer.innerHTML = '';
        let historyArray = JSON.parse(localStorage.getItem('key')) || [];

        if (!Array.isArray(historyArray)) {
            console.error('historyArray is not an array:', historyArray);
            return;
        }

        historyArray.forEach((item, index) => {
            console.log(item[0]);

            const convertedValue = document.createElement('span'); 
            convertedValue.textContent = item[0];

            const textType = document.createElement('span');
            textType.textContent = item[1];

            const entryContainer = document.createElement('div');
            entryContainer.classList.add('entry');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('deleteButton');
            deleteButton.dataset.index = index;

            deleteButton.addEventListener('click', () => {
                deleteEntry(index);
            });

            entryContainer.appendChild(convertedValue);
            entryContainer.appendChild(textType);
            entryContainer.appendChild(deleteButton);
            historyContainer.appendChild(entryContainer);
        });
    }

    function clearAll(){
        localStorage.removeItem('key');
        display();
    }

    function deleteEntry(index){
        let historyArray = JSON.parse(localStorage.getItem('key')) || [];
        historyArray.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(historyArray));
        display();
    }

    if (clearHistory) {
        clearHistory.addEventListener('click', clearAll);
    } else {
        console.error("Element with id 'clearHistory' not found.");
    }


    display();
});

display();


