function execCmd(command) {
  document.execCommand(command, false, null);
}

function changeFontSize() {
  var size = prompt("Enter a size (1-7)", "");
  if (size && !isNaN(size) && size >= 1 && size <= 7) {
    document.execCommand('fontSize', false, size);
  } else {
    alert("Please enter a valid font size (1-7).");
  }
}

function changeBackground() {
  var color = prompt("Enter a color", "");
  if (color) {
    document.execCommand('backColor', false, color);
  } else {
    alert("Please enter a valid color.");
  }
}

function insertImage() {
  var url = prompt("Enter the image URL", "");
  if (url) {
    document.execCommand('insertImage', false, url);
  } else {
    alert("Please enter a valid image URL.");
  }
}

function saveAs() {
  // You can implement the save functionality here
  alert("Save functionality not implemented yet.");
}

function startDictation() {
  // You can implement speech recognition functionality here
  alert("Speech recognition functionality not implemented yet.");
}
