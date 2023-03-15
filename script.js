let screen = document.getElementById('screen');

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function calculate() {
  screen.value = eval(screen.value);
}
