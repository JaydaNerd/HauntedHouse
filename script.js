storyText = document.getElementById("storyText");
firstBut = document.getElementById("first");
secBut = document.getElementById("second");
thirdBut = document.getElementById("third");
resetBut = document.getElementById("reset");

text = "";
standStill = 0;
cabinet = 0;


function textChange(curText) {
  switch(curText) {
    case "still":
      still();
      break;

    case "cabinet":
      text = "You open the broken cabinet and found a note inside. It states break the mirror."
      cabinet = 1;
      break;

    case "mirror":
      if(cabinet == 0) {
        text = "You look at yourself in the mirror, you look terrified."
      } else if(cabinet == 1) {
        text = "You look around, finding a hammer. You throw it, breaking the mirror"
      }

      break;

    default:
      break;
  }

  display();
}

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

function setVisibility(reset, others) {
  resetBut.style.visibility = reset;
  firstBut.style.visibility = others;
  secBut.style.visibility = others;
  thirdBut.style.visibility = others;
}

//Resets the story, checks if resets on index
function reset() {
  setVisibility("hidden", "visible");
  text = "You wake up in a strange house. You could here the faint whispers of the wind. You should try to find an exit."
  standStill = 0;
  display();
}


//Displays the text in paragraph
function display() {
  storyText.innerHTML = text;
}