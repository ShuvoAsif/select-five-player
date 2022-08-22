//-----------------------------------------------------------
//--------------------player list selection------------------
//-----------------------------------------------------------

function addToList(element) {
    //---------------------player list----------------------
    const playerName = element.parentNode.children[1].innerText;
    const listContainer = document.getElementById('list');

    const li = document.createElement('li');
    li.innerText = playerName;


    //---------------appendChild and setAllart---------------
    const playerString = listContainer.children.length;

    if (playerString < 5) {
        listContainer.appendChild(li);
    }
    else {
        alert('You Can Not Add More Than Five Players');
        return;
    }

    //---------------------button disable--------------------
    const name = listContainer.children[parseInt(playerString)].innerText;
    const deleteButton = element.parentNode.children[3];

    if (name === playerName) {
        deleteButton.setAttribute('disabled', true);
        deleteButton.classList.add('bg-slate-500')
    }
    else {
        deleteButton.removeAttribute('disabled');
    }

}