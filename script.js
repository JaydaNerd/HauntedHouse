// Used to change all paragraph text
storyText = document.getElementById("storyText"); 
text = "";

// Used for index and hallway to hide buttons
firstBut = document.getElementById("first");
secBut = document.getElementById("second");
thirdBut = document.getElementById("third");

// Used by all 
resetBut = document.getElementById("reset");

// For hidden images
img = document.getElementById('hide'); 

// For index and hallway, standStill
standStill = 0; 

if(!sessionStorage.locksLeft) {
  sessionStorage.locksLeft = 3;
}

if(!sessionStorage.checkCab) {
  sessionStorage.checkCab = 0;
}



// Changes paragraph text
let textChange = (curText) => {
  switch(curText) {
    // hallway/index: Stand Still, Josephine
    case "still":
      still();
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
		  incrementKeysFound();
		  alert("You found a key! You have " + (3 - getKeysFound()) + " keys left to find."); //jabari
        sessionStorage.checkCab = 2;
      } else if (sessionStorage.checkCab >= 2) {
        text = "All that's left is shards.";
      }
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
  
      // living room: Open Front Door, Jabari & Josphene 
      // This code Jabari
          case "frontDoor":
    	if (getKeysFound() == 0) {
    text = "You try to open it but there are three locks in the way.";
  } else if (getKeysFound() == 1) {
    text = "Two Locks Left";
  } else if (getKeysFound() == 2) {
    text = "One Lock Left";
  } else if (getKeysFound() == 3) {
    text = "The door creaks open, and you run out but somethings wrong";
	jumpScare()
    setTimeout(function () {
      window.location.href = '/end2.html';
    }, 2500);
  }
      break;
		  
    case "creakyDoor":
      text = "This is a text";
      break;
      
    default:
      text = "This code is so haunted that the code broken";
      break;
  }

  display();
}

// Used for hallway: Stand Still. If user is clicked on the button five times, they die and must reset, Josephine
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
		   setTimeout(function () {
				window.location.href = '/end2.html';
			  }, 2000);
			
      break; 
    default:
      text = "You stand so still you somehow managed to break the code."
      break;
  }
}


// Resets the story, Josephine
function reset() {
  sessionStorage.clear();
  localStorage.clear();
  setKeysFound(0);
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

//jabari
function changeBackground(Num) {
  if (Num == 1) {
	document.body.style.backgroundImage = "url('hallway.jpg')";
  } else if (Num == 2) {
	document.body.style.backgroundImage = "url('bathroom.jpg')";
  } else if (Num == 3) {
	document.body.style.backgroundImage = "url('livingroom.jpg')";
  } else if (Num == 4) {
	document.body.style.backgroundImage = "url('')";
  } else if (Num == 5) {
	document.body.style.backgroundImage = "url('basement.jpg')";
  } else {
	document.body.style.backgroundImage = "url('kitchen.jpg')"; 
  }
}

// Jabari
function getKeysFound() {
  return parseInt(localStorage.getItem('keysFound')) || 0;
}

// Jabari
function setKeysFound(keysFound) {
  // Store the keysFound value in localStorage
  localStorage.setItem('keysFound', keysFound);
}

// Jabari
function incrementKeysFound() {
  var keysFound = getKeysFound() + 1;
  setKeysFound(keysFound);
  return keysFound;
}

function jumpScare() {
	var img = document.createElement("img");
	img.src = 'jumpscare.jpeg';
	img.id = 'jumpscareImage';
	document.body.appendChild(img);

	// Play sound
	var audio = new Audio('Scream.mp3');
	audio.play();

	setTimeout(() => {
	  var jumpscareImage = document.getElementById('jumpscareImage');
	  jumpscareImage.parentNode.removeChild(jumpscareImage);
	}, 2000);
  }



