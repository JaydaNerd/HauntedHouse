const hallText = document.getElementById("hall");
const bathText = document.getElementById("bath");

const resetBut = document.getElementByClass("reset");

standStill = 0;
hallway = 0
item = "";
foundBath = false; //Checks if everything has been found in bathroom

// Standing still at the begining leads to this
function still() {
  standStill++;
  if(standStill == 1) {
    hallText.innerHTML = "You stand still, this does nothing."
  } else if (standStill == 2) {
    hallText.innerHTML = "You stand even stiller, this does nothing."
  } else if (standStill == 3) {
    hallText.innerHTML = "You stand even stiller than a statue, this does nothing."
  } else if (standStill == 4) {
    hallText.innerHTML = "But wait, that cold wind. Is something finally happening?"
  } else if (standStill == 5) {
    hallText.innerHTML = "It's a ghost stabing you. You died like how you lived, doing nothing."
  }  else if (standStill == 6) {
    standStill = 6;
  } else {
    hallText.innerHTML = "Uh oh, standing too still has somehow caused an error."
  } 
}

function cabinet() {
  bathText.innerHTML = "You open the broken cabinet and found a note inside. It states break the mirror."
  item += " note";
}

function mirror() {
 bathText.innerHTML = "You look at yourself in the mirror, you look terrified."
  
}

function reset() {

}