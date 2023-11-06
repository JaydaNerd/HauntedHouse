storyText = document.getElementById("storyText");
firstBut = document.getElementById("first");
secBut = document.getElementById("second");
thirdBut = document.getElementById("third");
resetBut = document.getElementById("reset");
img = document.getElementById('hide');

text = "";
standStill = 0;
foundAll = false; 

// Changes paragraph text
let textChange = (curText) => {
  switch(curText) {
    // hallway/index: Stand Still, Josephine
    case "still":
      still();
      break;
      
    // bathroom: Check Cabinet, Josephine
    case "cabinet":
      if(!sessionStorage.checkCab) {
        sessionStorage.checkCab = 0;
      }

      if(sessionStorage.checkCab == 0) {
        text = "You open the broken cabinet and found a note inside. It states break the mirror.";
        sessionStorage.checkCab = 1;
      } else if (sessionStorage.checkCab == 1) {
        text = "The cabinet sits empty and uninteresting. You really should break the mirror";
      } else if (sessionStorage.checkCab  >= 2) {
        text = "There is nothing left.";
      }
      break;
      
    // bathroom: Check Mirror, Josephine
    case "mirror":
      if(!sessionStorage.checkCab) {
        sessionStorage.checkCab = 0;
      }
      
      if(sessionStorage.checkCab == 0) {
        text = "You look at yourself in the mirror, you look terrified.";
      } else if(sessionStorage.checkCab == 1) {
        text = "You look around, finding a hammer. You throw it, breaking the mirror. You find a golden key hidden within it.";
        sessionStorage.checkCab = 2;
      } else if (sessionStorage.checkCab >= 2) {
        text = "All that's left is shards.";
      }
      break;
      
    // living room: Open Front Door, Josephine
    case "frontDoor":
      if(!sessionStorage.locksLeft) {
        sessionStorage.locksLeft = 3;
      }
      
      if ((sessionStorage.checkCab == 2)) {
        text = "You place the golden key onto the lock. Clink, the lock and key turn to dust. You can feel shivers down your spine.";
        sessionStorage.checkCab = 3;
        sessionStorage.locksLeft = 2;
      } else if (sessionStorage.locksLeft == 3) {
        text = "You try to open it but there are three locks in the way.";
      } else if (sessionStorage.locksLeft == 2) {
        text = "Two Locks Left";
      }
      break;

    case "creakyDoor":
      text = "This is a text";
      break;
      
    default:
      text = "This code is so haunted that the code brokem";
      break;
  }

  display();
}

//Used for hallway: Stand Still. If user is clicked on the button five times, they die and must reset, Josephine
function still() {
  standStill++;
  switch(standStill) {
    case 1:
      text = "You stand still, this does nothing."
      break;
    case 2:
      text = "You stand even stiller, this does nothing."
      break;
    case 3:
      text = "You stand even stiller than a statue, this does nothing."
      break;
    case 4: 
      text = "But wait, that cold wind. Is something finally happening?"
      break;
    case 5:
      text = "It's a ghost stabing you. You died like how you lived, doing nothing." 
      firstBut.style.visibility = "hidden";
      secBut.style.visibility = "hidden";
      thirdBut.style.visibility = "hidden";
      break; 
    default:
      text = "You stand so still you somehow managed to break the code."
      break;
  }
}


// Resets the story, Josephine
function reset() {
  sessionStorage.clear();
  locksLeft = 3;
  setVisibility("hidden", "visible");
  text = "You wake up in a strange house. You could here the faint whispers of the wind. You should try to find an exit."
  standStill = 0;
  display();
  img.style.visibility = "hidden";
}

// https://stackoverflow.com/questions/15076950/hide-and-then-show-an-image-using-javascript, Josephine
// Changes the visibility of the hidden image
function hideVisible() {
  if (img.style.visibility == 'hidden') {
      img.style.visibility = "visible";
  } else {
      img.style.visibility = "hidden";
  }
}


// Displays the text on the website, Josephine
function display() {
  storyText.innerHTML = text;
}

 function changeBackground(Num)//jay  
	{
		if (Num == 1){
			document.body.style.backgroundImage = "url()";
		}
		if (Num == 2){
			document.body.style.backgroundImage = "url()";
		}
		if (Num == 3){
			document.body.style.backgroundImage = "url()";
		}//jay 
		if (Num == 4){
			document.body.style.backgroundImage = "url()";
		}//jay 
		if (Num == 5){
			document.body.style.backgroundImage = "url()";
		}
		if (Num == 1){
			document.body.style.backgroundImage = "url()";
		}
	 document.body.style.backgroundImage = "url()";
 }

