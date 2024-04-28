import "./style.css";
import OBR from "@owlbear-rodeo/sdk";
import { setupContextMenu } from "./contextMenu";

let currentPhase;
let allPhases;
let round;
let roundCounter = 1;
let phase;
let phaseCounter = 1;

const previousPhase = () => {
  allPhases[currentPhase].classList.remove('focused');
  if (currentPhase == 0) {
    currentPhase = 3;
  } else {
    currentPhase--;
  }

  allPhases[currentPhase].classList.add('focused');
}

const nextPhase = () => {
  allPhases[currentPhase].classList.remove('focused');
  if (currentPhase == 3) {
    currentPhase = 0;
  } else {
    currentPhase++;
  }
  allPhases[currentPhase].classList.add('focused');
}

const previousRound = () => {
  if (roundCounter == 1) {
    return;
  }
  roundCounter--;
  round.innerHTML = "Round: " + roundCounter;
}

const nextRound = () => {
  roundCounter++;
  round.innerHTML = "Round: " + roundCounter;
}

const reset = () => {
  allPhases[currentPhase].classList.remove('focused');
  allPhases[0].classList.add('focused');
  currentPhase = 0;
  roundCounter = 1;
  round.innerHTML = "Round: " + roundCounter;
}

document.querySelector("#app").innerHTML = `
  <div class="scs-tracker-background">
    <h1>SCS Tracker</h1>
    <div class="scs-tracker">
      <div class="scs-tracker-phase">
        <div id="block1" class="move block focused">Move</div>
        <div id="block2" class="attack block">Attack</div>
        <div id="block3" class="move block">Move</div>
        <div id="block4" class="spell block">Spell</div>
      </div>
      <div class="scs-tracker-buttons">
        <button id="previousRound"> << </button>
        <button id="previousPhase"> < </button>
        <div class="round-phase">
          <span id="round"></span>
        </div>
        <button id="nextPhase"> > </button>
        <button id="nextRound"> >> </button>
      </div>
    </div>
    <button id="reset">Reset</button>
  </div>
`;

OBR.onReady(() => {
  setupContextMenu();
  document.querySelector("#previousPhase").addEventListener("click", previousPhase);
  document.querySelector("#nextPhase").addEventListener("click", nextPhase);
  document.querySelector("#previousRound").addEventListener("click", previousRound);
  document.querySelector("#nextRound").addEventListener("click", nextRound);
  document.querySelector("#reset").addEventListener("click", reset);
  allPhases = document.querySelectorAll('div[id^="block"]');
  currentPhase = 0;
  round = document.querySelector("#round");
  round.innerHTML = "Round: " + roundCounter;
});