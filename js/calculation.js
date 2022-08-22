//---------------------player cost------------------------

document.getElementById('btn-calculation').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('perPlayerCost');
    const listContainer = document.getElementById('list');
    const playerString = listContainer.children.length;
    const totalPlayer = parseInt(playerString);

    const totalPlayerCost = perPlayerCost * totalPlayer;

    setTextElementValueById('totalExpenses', totalPlayerCost);
})

//-----------------------total cost------------------------

document.getElementById('btn-totalCalculation').addEventListener('click', function () {
    const managerCost = getInputFieldValueById('managerCost');
    console.log(managerCost);
    const coachCost = getInputFieldValueById('coachCost');
    console.log(coachCost);
    const playerCost = getTextElementValueById('totalExpenses');
    console.log(playerCost)
    const total = playerCost + managerCost + coachCost;

    setTextElementValueById('total', total);
})