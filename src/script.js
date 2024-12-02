
let playerArray = [
  {
    "name": "Lionel Messi",
    "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
    "position": "RW",
    "nationality": "Argentina",
    "nationality": "https://cdn.sofifa.net/flags/ar.png",
    "club": "Inter Miami",
    "club": "https://cdn.sofifa.net/meta/team/239235/120.png",
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
    "nationality": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Al Nassr",
    "club": "https://cdn.sofifa.net/meta/team/2506/120.png",
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
    "nationality": "https://cdn.sofifa.net/flags/be.png",
    "club": "Manchester City",
    "club": "https://cdn.sofifa.net/meta/team/9/120.png",
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
    "nationality": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Real Madrid",
    "club": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 92,
    "pace": 97,
    "shooting": 89,
    "passing": 80,
    "dribbling": 92,
    "defending": 39,
    "physical": 77
  },
  {
    "name": "Virgil van Dijk",
    "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
    "position": "LCB",
    "nationality": "Netherlands",
    "nationality": "https://cdn.sofifa.net/flags/nl.png",
    "club": "Liverpool",
    "club": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 90,
    "pace": 75,
    "shooting": 60,
    "passing": 70,
    "dribbling": 72,
    "defending": 92,
    "physical": 86
  },
  {
    "name": "Antonio Rudiger",
    "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
    "position": "RCB",
    "nationality": "Germany",
    "nationality": "https://cdn.sofifa.net/flags/de.png",
    "club": "Real Madrid",
    "club": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 82,
    "shooting": 55,
    "passing": 73,
    "dribbling": 70,
    "defending": 86,
    "physical": 86
  },
  {
    "name": "Neymar Jr",
    "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "nationality": "https://cdn.sofifa.net/flags/br.png",
    "club": "Al-Hilal",
    "club": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 90,
    "pace": 91,
    "shooting": 83,
    "passing": 86,
    "dribbling": 94,
    "defending": 37,
    "physical": 61
  },
  {
    "name": "Mohamed Salah",
    "photo": "https://cdn.sofifa.net/players/209/331/24_120.png",
    "position": "RW",
    "nationality": "Egypt",
    "nationality": "https://cdn.sofifa.net/flags/eg.png",
    "club": "Liverpool",
    "club": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 89,
    "pace": 93,
    "shooting": 87,
    "passing": 81,
    "dribbling": 90,
    "defending": 45,
    "physical": 75
  },
  {
    "name": "Joshua Kimmich",
    "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
    "position": "RM",
    "nationality": "Germany",
    "nationality": "https://cdn.sofifa.net/flags/de.png",
    "club": "Bayern Munich",
    "club": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 89,
    "pace": 70,
    "shooting": 75,
    "passing": 88,
    "dribbling": 84,
    "defending": 84,
    "physical": 81
  },
  {
    "name": "Jan Oblak",
    "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
    "position": "GK",
    "nationality": "Slovenia",
    "nationality": "https://cdn.sofifa.net/flags/si.png",
    "club": "Atletico Madrid",
    "club": "https://cdn.sofifa.net/meta/team/7980/120.png",
    "rating": 91,
    "diving": 89,
    "handling": 90,
    "kicking": 78,
    "reflexes": 92,
    "speed": 50,
    "positioning": 88
  },
  {
    "name": "Luka Modrić",
    "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
    "position": "LM",
    "nationality": "Croatia",
    "nationality": "https://cdn.sofifa.net/flags/hr.png",
    "club": "Real Madrid",
    "club": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 74,
    "shooting": 78,
    "passing": 89,
    "dribbling": 90,
    "defending": 72,
    "physical": 65
  },
  {
    "name": "Vinicius Junior",
    "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "nationality": "https://cdn.sofifa.net/flags/br.png",
    "club": "Real Madrid",
    "club": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 89,
    "pace": 91,
    "shooting": 88,
    "passing": 85,
    "dribbling": 94,
    "defending": 39,
    "physical": 61
  },
  {
    "name": "Brahim Diáz",
    "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
    "position": "LW",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Real Madrid",
    "club": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 82,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 85,
    "defending": 31,
    "physical": 56
  },
  {
    "name": "Karim Benzema",
    "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
    "position": "ST",
    "nationality": "France",
    "nationality": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "club" :"https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 90,
    "pace": 77,
    "shooting": 90,
    "passing": 83,
    "dribbling": 88,
    "defending": 40,
    "physical": 78
  },
  {
    "name": "Erling Haaland",
    "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "position": "ST",
    "nationality": "Norway",
    "nationality": "https://cdn.sofifa.net/flags/no.png",
    "club": "Manchester City",
    "club": "https://cdn.sofifa.net/meta/team/9/120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 94,
    "passing": 65,
    "dribbling": 80,
    "defending": 45,
    "physical": 88
  },
  {
    "name": "N'Golo Kanté",
    "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
    "position": "CDM",
    "nationality": "France",
    "nationality": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "club": "https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 87,
    "pace": 77,
    "shooting": 66,
    "passing": 75,
    "dribbling": 82,
    "defending": 88,
    "physical": 82
  },
  {
    "name": "Alphonso Davies",
    "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
    "position": "LB",
    "nationality": "Canada",
    "nationality": "https://cdn.sofifa.net/flags/ca.png",
    "club": "Bayern Munich",
    "club": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 84,
    "pace": 96,
    "shooting": 68,
    "passing": 77,
    "dribbling": 82,
    "defending": 76,
    "physical": 77
  },
  {
    "name": "Yassine Bounou",
    "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
    "position": "GK",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Al-Hilal",
    "club": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 84,
    "diving": 81,
    "handling": 82,
    "kicking": 77,
    "reflexes": 86,
    "speed": 38,
    "positioning": 83
  },
  {
    "name": "Bruno Fernandes",
    "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
    "position": "CM",
    "nationality": "Portugal",
    "nationality": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Manchester United",
    "club": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 88,
    "pace": 75,
    "shooting": 85,
    "passing": 89,
    "dribbling": 84,
    "defending": 69,
    "physical": 77
  },
  {
    "name": "Jadon Sancho",
    "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
    "position": "LW",
    "nationality": "England",
    "nationality": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Manchester United",
    "club": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 84,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 88,
    "defending": 34,
    "physical": 63
  },
  {
    "name": "Trent Alexander-Arnold",
    "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
    "position": "RB",
    "nationality": "England",
    "nationality": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Liverpool",
    "rating": 87,
    "pace": 76,
    "shooting": 66,
    "passing": 89,
    "dribbling": 80,
    "defending": 79,
    "physical": 71
  },
  {
    "name": "Achraf Hakimi",
    "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
    "position": "RB",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Paris Saint-Germain",
    "club": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 84,
    "pace": 91,
    "shooting": 76,
    "passing": 80,
    "dribbling": 80,
    "defending": 75,
    "physical": 78
  },
  {
    "name": "Youssef En-Nesyri",
    "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
    "position": "ST",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Fenerbahçe",
    "club": "https://cdn.sofifa.net/meta/team/88/120.png",
    "rating": 83,
    "pace": 82,
    "shooting": 82,
    "passing": 63,
    "dribbling": 77,
    "defending": 36,
    "physical": 80
  },
  {
    "name": "Noussair Mazraoui",
    "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
    "position": "LB",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Manchester United",
    "club": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 81,
    "pace": 78,
    "shooting": 66,
    "passing": 77,
    "dribbling": 83,
    "defending": 77,
    "physical": 71
  },
  {
    "name": "Ismael Saibari",
    "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
    "position": "CM",
    "nationality": "Morocco",
    "nationality": "https://cdn.sofifa.net/flags/ma.png",
    "club": "PSV",
    "club": "https://cdn.sofifa.net/meta/team/682/120.png",
    "rating": 83,
    "pace": 89,
    "shooting": 78,
    "passing": 80,
    "dribbling": 86,
    "defending": 55,
    "physical": 84
  },
  {
    "name": "Gianluigi Donnarumma",
    "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
    "position": "GK",
    "nationality": "Italy",
    "nationality": "https://cdn.sofifa.net/flags/it.png",
    "club": "Paris Saint-Germain",
    "club": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 89,
    "diving": 88,
    "handling": 84,
    "kicking": 75,
    "reflexes": 90,
    "speed": 50,
    "positioning": 85
  }
];

let playerName = document.getElementById('playerName');
let playerPosition = document.getElementById('playerPosition');
let playerNationality = document.getElementById('playerNationality');
let playerPhoto = document.getElementById('playerPhoto');
let playerRating = document.getElementById('playerRating'); // n.o GK
let playerClub = document.getElementById('ClubLogo');
let playerPAC = document.getElementById('playerPAC');
let playerPAS = document.getElementById('playerPAS');
let playerSHO = document.getElementById('playerSHO');
let playerDRI = document.getElementById('playerDRI');
let playerDEF = document.getElementById('playerDEF');
let playerPHY = document.getElementById('playerPHY');

let playerDIVING = document.getElementById('player-DIVING');
let playerHANDLING = document.getElementById('player-HANDLING');
let playerKICKING = document.getElementById('player-KICKING');
let playerREFLEXES = document.getElementById('player-REFLEXES');
let playerSPEED = document.getElementById('player-SPEED');
let playerPOSITIONING = document.getElementById('player-POSITIONING');

const playerStats = document.getElementById("playerstats");
const GKStats = document.getElementById("GKstats");

let clickedCard;


playerPosition.addEventListener('change', function () {
  if (this.value === 'GK') {
    playerStats.classList.add('hidden');
    GKStats.classList.remove('hidden');
} else {
    GKStats.classList.add('hidden');
    playerStats.classList.remove('hidden');
}
});

function openAddPM() {
  const addModal = document.getElementById("AddPlayer-modal");
  addModal.style.display = "flex";
};

function closeAddModal() {
  const modal = document.getElementById("AddPlayer-modal");
  modal.style.display = "none";
  playerName.value ="";
  playerPhoto.value ="";
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
  // playerRating.value ="";
  playerDIVING.value = "";
  playerHANDLING.value ="";
  playerKICKING.value ="";
  playerREFLEXES.value ="";
  playerSPEED.value ="";
  playerPOSITIONING.value ="";
};

function openPlayerModal(position) {
  const modal = document.getElementById("playerListModal");
  const modalTitle = document.getElementById("modal-title");

  modalTitle.textContent = `Choose a player for ${position}`;
  modal.style.display = "flex";
  // renderPlayerList(filteredPlayers)
  clickedCard = document.getElementById(position);
};

function closeModal() {
  const modal = document.getElementById("playerListModal");
  modal.style.display = "none";
   
};

const addPlayer = document.getElementById("add-player");

addPlayer.onclick = function () {
  const country = playerNationality.value.toUpperCase();
  const photo = playerPhoto.value || "/src/img/default-player.png";
  const club = playerClub.value.toUpperCase();

  let player;
  if (playerPosition.value === 'GK') {
    player = {
      name: playerName.value,
      position: playerPosition.value,
      nationality: `https://flagsapi.com/${country}/flat/64.png`,
      // flag: `https://flagsapi.com/${country}/flat/64.png`,
      club: `https://raw.githubusercontent.com/A-007481D/FB-Clubs-API/refs/heads/main/teams/${club}.png`, // playerClub.value,
      // club: `https://cdn.sofifa.net/meta/team/${club}/120.png`,
      photo: photo,
      rating: playerRating.value,
      diving: playerDIVING.value,
      handling: playerHANDLING.value,
      kicking: playerKICKING.value,
      reflexes: playerREFLEXES.value,
      speed: playerSPEED.value,
      positioning: playerPOSITIONING.value
    };

  } else {
    player = {
      name: playerName.value,
      position: playerPosition.value,
      nationality: `https://flagsapi.com/${country}/flat/64.png`,
      // flag: `https://flagsapi.com/${country}/flat/64.png`,
      club: `https://raw.githubusercontent.com/A-007481D/FB-Clubs-API/refs/heads/main/teams/${club}.png`, // playerClub.value,
      // club: `https://cdn.sofifa.net/meta/team/${club}/120.png`,
      photo: photo,
      rating: playerRating.value,
      pace: playerPAC.value,
      shooting: playerSHO.value,
      passing: playerPAS.value,
      dribbling: playerDRI.value,
      defending: playerDEF.value,
      physical: playerPHY.value
    };
  }

  
  playerArray.push(player);
  console.log(playerArray);
  closeAddModal();
};

document.querySelectorAll('.card-position').forEach(card => {
  card.addEventListener('click', () => {
      const position = card.id;
      filterPlayersBy(position);
  });
});

function filterPlayersBy(position) {
  const filteredPlayers = playerArray.filter(player => player.position === position);
  renderPlayerList(filteredPlayers);
}
function renderPlayerList(playerArray) {
  const playerListDiv = document.getElementById("playerlistdiv");
  playerListDiv.innerHTML = "";

  if (playerArray.length === 0) {
      playerListDiv.innerHTML = `<p class="text-center text-black font-semibold">No players available for this position.</p>`;
      return;
  }

  playerArray.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.onclick = () => {
      clickedCard.innerHTML = playerCard.innerHTML;
    }
    playerCard.className = "player-card";
    playerCard.innerHTML = `
      <div class="relative w-[10rem] h-[13rem] bg-cover bg-center flex flex-col items-center justify-center text-white text-lg font-bold rounded-lg hover:scale-105 transition duration-200 cursor-pointer
        bg-[url('./src/img/badge-storyline.png')]">
        <div class="flex justify-center mt-[0.6rem]">
          <div class="flex flex-col mr-[-9px] mt-[0.7rem] text-white ">
            <span class="player-RATING mb-[-4px] font-bold">${player.rating || 'N/A'}</span>
            <span class="player-POSITION text-[0.65rem] font-medium">${player.position || 'N/A'}</span>
          </div>
          <img class="player-PHOTO w-[6.500rem]" src="${player.photo}" alt="${player.name}">
        </div>
        <div class="text-white gap-1 flex flex-col items-center mt-[-0.5rem]">
          <p class="player-NAME text-[11px] font-bold text-white mb-[-1rem]">${player.name || 'Unknown'}</p>
          <div class="flex gap-2">
            ${player.position === 'GK' ? `
              ${[
                { short: 'DIV', value: player.diving },
                { short: 'HAN', value: player.handling },
                { short: 'KIC', value: player.kicking },
                { short: 'REF', value: player.reflexes },
                { short: 'SPD', value: player.speed },
                { short: 'POS', value: player.positioning }
              ].map(stat => `
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="text-[0.46rem] font-medium mb-[-1rem]">${stat.short}</span>
                  <span class="font-bold text-[0.65rem]">${stat.value || 'N/A'}</span>
                </div>
              `).join('')}` : `
              ${[
                { short: 'PAC', value: player.pace },
                { short: 'SHO', value: player.shooting },
                { short: 'PAS', value: player.passing },
                { short: 'DRI', value: player.dribbling },
                { short: 'DEF', value: player.defending },
                { short: 'PHY', value: player.physical }
              ].map(stat => `
                <div class="flex flex-col gap-0 justify-center items-center">
                  <span class="text-[0.46rem] font-medium mb-[-1rem]">${stat.short}</span>
                  <span class="font-bold text-[0.65rem]">${stat.value || 'N/A'}</span>
                </div>
              `).join('')}
            `}
          </div>
          <div class="flex justify-center items-center w-3 mt-[-0.4rem] gap-2">
            <img class="player-flag" src="${player.nationality}" alt="">
            <img class="player-club" src="${player.club}" alt="">
          </div>
        </div>
      </div>`;
    playerListDiv.appendChild(playerCard);
  });
}