let id = 0;
let userEnteredGames = []; // Array to store games entered by users

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);

    row.insertCell(0).innerHTML = `${document.getElementById('user-first').value}` + ' ' + `${document.getElementById('user-last').value}`;
    row.insertCell(1).innerHTML = `${createdDate.getMonth() + 1} - ${createdDate.getDate()} - ${createdDate.getFullYear()}`;
    row.insertCell(2).innerHTML = document.getElementById('city').value;
    row.insertCell(3).innerHTML = document.getElementById('state').value;

    // Create and populate the dropdown menu dynamically
    let gamesDropdown = document.createElement('select');
    gamesDropdown.className = 'form-control';
    gamesDropdown.innerHTML = '<option value="">Select a Game</option>';

    // Populate dropdown with predefined games
    let predefinedGames = ["Chess", "Monopoly", "Scrabble", "Risk", "Settlers of Catan"];
    predefinedGames.forEach(function(game) {
        let option = document.createElement('option');
        option.value = game;
        option.textContent = game;
        gamesDropdown.appendChild(option);
    });

    // Populate dropdown with user-entered games
    userEnteredGames.forEach(function(game) {
        let option = document.createElement('option');
        option.value = game;
        option.textContent = game;
        gamesDropdown.appendChild(option);
    });

    row.insertCell(4).appendChild(gamesDropdown);

    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('preferred-games').value = '';
});

function createDeleteButton(id) {
    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.id = id;
    button.innerHTML = 'Delete';
    button.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return button;
}