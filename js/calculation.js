document.getElementById('btn-calculation').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('perPlayerCost');
    const listContainer = document.getElementById('list');
    const playerString = listContainer.children.length;
    const totalPlayer = parseInt(playerString)

    const totalPlayerCost = perPlayerCost * totalPlayer

    setTextElementValueById('totalExpenses', totalPlayerCost);
})