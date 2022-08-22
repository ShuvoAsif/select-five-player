function addToList(element) {
    const playerName = element.parentNode.children[1].innerText;
    console.log(playerName);



    const listContainer = document.getElementById('list');

    const li = document.createElement('li');
    li.innerText = playerName;


    if (listContainer.children.length < 5) {
        listContainer.appendChild(li);
    }


    console.log(listContainer.children.length);

    const deleteButton = element.parentNode.children[3];


    if (listContainer.children.length === playerName) {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
        deleteButton.classList.add('bg-slate-500')
    }



}

