let playerArray = [
  
];

let playerName = document.getElementById('playerName');
let playerPosition = document.getElementById('playerPosition');
let playerNationality = document.getElementById('playerNationality');
let playerPhoto = document.getElementById('playerPhoto');
let playerRating = document.getElementById('playerRating');
let playerClub = document.getElementById('ClubSelect');
let playerPAC = document.getElementById('playerPAC');
let playerPAS = document.getElementById('playerPAS');
let playerSHO = document.getElementById('playerSHO');
let playerDRI = document.getElementById('playerDRI');
let playerDEF = document.getElementById('playerDEF');
let playerPHY = document.getElementById('playerPHY');

function openAddPM() {
  const addModal = document.getElementById("AddPlayer-modal");
  addModal.style.display = "flex";
};

function closeAddModal() {
  const modal = document.getElementById("AddPlayer-modal");
  modal.style.display = "none";
  playerName.value ="";
  // playerPhoto.value ="";
  playerPosition.value ="";
  playerNationality.value ="";
  playerClub.value ="";
  playerRating.value ="";
  playerPAC.value ="";
  playerSHO.value ="";
  playerPAS.value ="";
  playerDRI.value ="";
  playerDEF.value ="";
  playerPHY.value ="";
};

function openPlayerModal(position) {
  const modal = document.getElementById("playerListModal");
  const modalTitle = document.getElementById("modal-title");

  modalTitle.textContent = `Choose a player for ${position}`;
  modal.style.display = "flex";
};

function closeModal() {
  const modal = document.getElementById("playerListModal");
  modal.style.display = "none";
   
};

const addPlayer = document.getElementById("add-player");

addPlayer.onclick = function () {

  const player = {
    name: playerName.value,
    position: playerPosition.value,
    nationality: playerNationality.value,
    club: playerClub.value,
    rating: playerRating.value,
    pace: playerPAC.value,
    shooting: playerSHO.value,
    passing: playerPAS.value,
    dribbling: playerDRI.value,
    defending: playerDEF.value,
    physical: playerPHY.value
  };

  playerArray.push(player);
 console.log(playerArray);
  };


