storyText = document.getElementById("storyText");
firstBut = document.getElementById("first");
secBut = document.getElementById("second");
thirdBut = document.getElementById("third");
resetBut = document.getElementById("reset");

text = "";
standStill = 0;
foundAll = false; 
locksLeft = 3;

let textChange = (curText) => {
  switch(curText) {
    // hallway/index: Stand Still
    case "still":
      still();
      break;
      
    // bathroom: Check Cabinet
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
      
    // bathroom: Check Mirror
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

    case "frontDoor":
      if((sessionStorage.checkCab == 2)) {
        text = "You place the golden key onto the lock. Clink, the lock and key turn to dust. You can feel shivers down your spine.";
        sessionStorage.checkCab = 3;
        locksLeft = 2;
      } else if (locksLeft == 3) {
        text = "You try to open it but there are three locks in the way.";
      } else if(locksLeft == 2) {
        text = "Two Locks Left";
      }
      break;
      
    default:
      break;
  }

  display();
}

//Used for Stand Still. If user is clicked on it five buttons, they die
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
      setVisibility("visible", "hidden");
      break;
    case 6:
      standStill = 4;
      break;
    default:
      text = "You stand so still you somehow managed to break the code."
      break;
  }
}

//Sets button visiblity
function setVisibility(reset, others) {
  resetBut.style.visibility = reset;
  firstBut.style.visibility = others;
  secBut.style.visibility = others;
  thirdBut.style.visibility = others;
}

//Resets the story
function reset() {
  locksLeft = 3;
  sessionStorage.clear();
  setVisibility("hidden", "visible");
  text = "You wake up in a strange house. You could here the faint whispers of the wind. You should try to find an exit."
  standStill = 0;
  display();
}


//Displays the text in paragraph
function display() {
  storyText.innerHTML = text;
}

 function changeBackground(Num) {
		if (Num == 1){
			document.body.style.backgroundImage = "url()";
		}//jay 
	 
	 document.body.style.backgroundImage = "url()";
 }




// 	  function changeBackground() {
// 		document.body.style.backgroundImage = "url('new_background_image.jpg')";
// 	  }

// 	<button onclick="changeBackground()">Change Background</button>

