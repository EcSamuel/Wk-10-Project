let userEnteredGames = [`Dungeons and Dragons`, `Magic the Gathering`, `Warhammer 40000`, `Chess`, `Axis and Allies`];

const usStates = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'];
          
const select = document.getElementById("state");

usStates.forEach(function(state) {
        // console.log(`adding option for ${state}`);
        let option = document.createElement("option");
        option.text = state;
        select.appendChild(option);
        // In the select function something should probably be referencing usStates...?
    });

document.getElementById('add-game').addEventListener('click', () => {
    let newGame = document.getElementById('new-game').value.trim();
    if (newGame !== '') {
        addGameOption(newGame)
        console.log(`a new game has been added!`);
    } else {
        alert(`Please do not try and add null values!`);
    }
    });

    // Populate the dropdown menu dynamically
let gamesDropdown = document.getElementById('preferred-games');
    // gamesDropdown.innerHTML = '<option value="">Select a Game</option>';

userEnteredGames.forEach(function(game) {
    // console.log(`adding option for ${game}`);
    addGameOption(game);
});

document.getElementById('add').addEventListener('click', () => {
    let userFirst = document.getElementById('user-first').value.trim();
    let userLast = document.getElementById('user-last').value.trim();
    let city = document.getElementById('city').value.trim();
    let state = document.getElementById('state').value.trim();
    let newGame = document.getElementById('preferred-games').value.trim();

    // Check if any of the required fields are blank
    if (userFirst === '' || userLast === '' || city === '' || state === '') {
        alert('Please fill out all fields.');
        return;
    }

    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    let id = table.rows.length - 1; // Calculate id based on current number of rows

    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${userFirst} ${userLast}`;
    row.insertCell(1).innerHTML = `${createdDate.getMonth() + 1} - ${createdDate.getDate()} - ${createdDate.getFullYear()}`;
    row.insertCell(2).innerHTML = city;
    row.insertCell(3).innerHTML = state;
    row.insertCell(4).innerHTML = newGame;

function createDeleteButton(id) {
    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = 'Delete';
    button.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return button;
}});

function addGameOption(game) {
    let option = document.createElement('option');
    option.value = game;
    option.textContent = game;
    gamesDropdown.appendChild(option);
}
