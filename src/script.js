let playerArray = [
  {
    "name": "Abdelmalek Labid",
    "photo": "/src/img/abdelmalek.png",
    "position": "RW",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ar.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
    "rating": 93,
    "pace": 85,
    "shooting": 92,
    "passing": 91,
    "dribbling": 95,
    "defending": 35,
    "physical": 65
  },
  {
    "name": "Cristiano Ronaldo",
    "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
    "position": "ST",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Al Nassr",
    "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
    "rating": 91,
    "pace": 84,
    "shooting": 94,
    "passing": 82,
    "dribbling": 87,
    "defending": 34,
    "physical": 77
  },
  {
    "name": "Kevin De Bruyne",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "CM",
    "nationality": "Belgium",
    "flag": "https://cdn.sofifa.net/flags/be.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 74,
    "shooting": 86,
    "passing": 93,
    "dribbling": 88,
    "defending": 64,
    "physical": 78
  },
  {
    "name": "Kylian Mbappé",
    "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 92,
    "pace": 97,
    "shooting": 89,
    "passing": 80,
    "dribbling": 92,
    "defending": 39,
    "physical": 77
  }, 
  {
    "name": "Jan Oblak",
    "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
    "position": "GK",
    "nationality": "Slovenia",
    "flag": "https://cdn.sofifa.net/flags/si.png",
    "club": "Atletico Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
    "rating": 91,
    "diving": 89,
    "handling": 90,
    "kicking": 78,
    "reflexes": 92,
    "speed": 50,
    "positioning": 88
  },
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
  playerListRender()
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



function playerListRender() {
  let playerListModal = document.getElementById('playerlistdiv');

  playerListModal.innerHTML = "";

  playerArray.forEach(player => {
    const playerCardContainer = document.createElement("div");
    playerCardContainer.classList = "cursor-pointer";
    if(playerPosition == 'GK') {
      playerCardContainer.innerHTML = `<div class="flex justify-center mt-[0.6rem]">
              <div class="flex flex-col mr-[-9px] mt-[0.7rem] text-white ">
                <span class="player-RATING mb-[-4px] font-bold">${player.rating}</span>
                <span class="player-POSITION text-[0.65rem] font-medium">${player.position}</span>
              </div>
              <img class="player-PHOTO w-[6.500rem]" src="${player.photo}" alt="${player.name}">
            </div>
            
            <div class="text-white gap-1 flex flex-col items-center mt-[-0.5rem]">
              <p class="player-NAME text-[11px] font-bold text-white mb-[-1rem]">${player.name}</p>
              <div class="flex gap-2">
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-DIVING text-[0.46rem] font-medium mb-[-1rem]">DIV</span>
                  <span class="font-bold text-[0.65rem]">${player.diving}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-HANDLING text-[0.46rem] font-medium mb-[-1rem]">HAN</span>
                  <span class="font-bold text-[0.65rem]">${player.handling}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-KICKING text-[0.46rem] font-medium mb-[-1rem] ">KIC</span>
                  <span class="font-bold text-[0.65rem]">${player.kicking}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-REFLEXES text-[0.46rem] font-medium mb-[-1rem]">REF</span>
                  <span class="font-bold text-[0.65rem]">${player.reflexes}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-SPEED text-[0.46rem] font-medium mb-[-1rem]">SPE</span>
                  <span class="font-bold text-[0.65rem]">${player.speed}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-POSISTION text-[0.46rem] font-medium mb-[-1rem]">POS</span>
                  <span class="font-bold text-[0.65rem]">${player.position}</span>
                </div>
              </div>
              <div class="flex justify-center items-center w-3 mt-[-0.4rem] gap-2">
                <img class="${player.nationality}" src="/src/img/argentina.webp" alt="">
                <img class="player-club" src="${player.club}" alt="">
              </div>
            </div>`
    } else {
      playerCardContainer.innerHTML = `
      <div class="relative w-[8.5rem] h-[13rem] bg-cover bg-center flex flex-col items-center justify-center text-white text-lg font-bold rounded-lg hover:scale-105 transition duration-200 cursor-pointer
          bg-[url('/src/img/badge-storyline.png')]"
            >
      <div class="flex justify-center mt-[0.6rem]">
              <div class="flex flex-col mr-[-9px] mt-[0.7rem] text-white ">
                <span class="player-RATING mb-[-4px] font-bold">${player.rating}</span>
                <span class="player-POSITION text-[0.65rem] font-medium">${player.position}</span>
              </div>
              <img class="player-PHOTO w-[6.500rem]" src="${player.photo}" alt="${player.name}">
            </div>
            
            <div class="text-white gap-1 flex flex-col items-center mt-[-0.5rem]">
              <p class="player-NAME text-[11px] font-bold text-white mb-[-1rem]">${player.name}</p>
              <div class="flex gap-2">
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-DIVING text-[0.46rem] font-medium mb-[-1rem]">PAC</span>
                  <span class="font-bold text-[0.65rem]">${player.pace}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-HANDLING text-[0.46rem] font-medium mb-[-1rem]">SHO</span>
                  <span class="font-bold text-[0.65rem]">${player.shooting}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-KICKING text-[0.46rem] font-medium mb-[-1rem] ">PAS</span>
                  <span class="font-bold text-[0.65rem]">${player.passing}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-REFLEXES text-[0.46rem] font-medium mb-[-1rem]">DRI</span>
                  <span class="font-bold text-[0.65rem]">${player.dribbling}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-SPEED text-[0.46rem] font-medium mb-[-1rem]">DEF</span>
                  <span class="font-bold text-[0.65rem]">${player.defending}</span>
                </div>
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="player-POSISTION text-[0.46rem] font-medium mb-[-1rem]">PHY</span>
                  <span class="font-bold text-[0.65rem]">${player.physical}</span>
                </div>
              </div>
              <div class="flex justify-center items-center w-3 mt-[-0.4rem] gap-2">
                <img class="${player.nationality}" src="/src/img/argentina.webp" alt="">
                <img class="player-club" src="${player.club}" alt="">
              </div>
            </div>
            </div>`
    }
      
    
      
    
    playerListModal.appendChild(playerCardContainer);
  });

};


