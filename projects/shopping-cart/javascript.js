const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul')

button.addEventListener('click', (event) => {
    event.preventDefault();

    const inputText = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn  = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = inputText;

    listItem.appendChild(listBtn);
    listBtn.textContent = 'delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.focus()
});