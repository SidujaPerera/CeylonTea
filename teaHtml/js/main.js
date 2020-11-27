// Get the modal black tea
var modalBlack = document.getElementById("myModalBlack");

// Get the button that opens the modal
var btnBlack = document.getElementById("blackRead");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnBlack.onclick = function() {
  modalBlack.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBlack.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBlack) {
    modalBlack.style.display = "none";
  }
}



// Get the modal green tea
var modalGreen = document.getElementById("myModalGreen");

// Get the button that opens the modal
var btnGreen = document.getElementById("greenRead");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnGreen.onclick = function() {
  modalGreen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalGreen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalGreen) {
    modalGreen.style.display = "none";
  }
}


// Get the modal herbal tea
var modalHerbal = document.getElementById("myModalHerbal");

// Get the button that opens the modal
var btnHerbal = document.getElementById("herbalRead");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnHerbal.onclick = function() {
  modalHerbal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHerbal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHerbal) {
    modalHerbal.style.display = "none";
  }
}

// Get the modal orange tea
var modalOrange = document.getElementById("myModalOrange");

// Get the button that opens the modal
var btnOrange = document.getElementById("orangeRead");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btnOrange.onclick = function() {
  modalOrange.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOrange.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOrange) {
    modalOrange.style.display = "none";
  }
}