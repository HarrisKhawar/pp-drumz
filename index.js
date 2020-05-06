var numOfDrums = document.querySelectorAll(".drum").length;
var audio;
var audioKey;
var allAudioKeys = ["a", "s", "d", "f", "g", "h", "j"];

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyDown);

function handleClick() {
  audioKey = this.className[0];
  audio = new Audio("sounds/drum-" + audioKey + ".mp3");
  audio.play();
  addDrumPlayer(audioKey);
}

function handleKeyDown(event) {
  audioKey = event.key;
  if (allAudioKeys.includes(audioKey)) {
    audio = new Audio("sounds/drum-" + audioKey + ".mp3");
    audio.play();
    addDrumPlayer(audioKey);
  }

}
function addDrumPlayer (audiokey) {
  var drumPlayed = document.querySelector("."+audioKey);
  drumPlayed.classList.add("drum-played");
  setTimeout(function() {
    drumPlayed.classList.remove("drum-played");
  }, 200);

}
