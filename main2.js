const intialState = 'S';
var states = ['S+S', 'S', 'S-S', 'S*S', 'S/S', '(S)', 'Z'];

function genValid() {
  var currentState = intialState;

  while (currentState.includes('S')) {
    currentState = currentState.replaceAll('S', () => {
      states = shuffle(states);
      return states[0];
    });
    currentState = currentState.replaceAll('Z', () => {
      return getRandomIntInclusive(0, 9);
    });
    if (currentState.length > 10000) {
      console.log(currentState);
      console.log('Emergency exit');
      break;
    }
  }
  var output = {
    currentState,
    numberOpen: (currentState.match(/\(/g) || []).length,
    numberClosed: (currentState.match(/\)/g) || []).length,
  };
  document.getElementById('output').innerHTML = JSON.stringify(output);
  console.log(currentState);
}

function nextState(currentState) {
  console.log('Before: ' + currentState);

  console.log('After: ' + currentState);
  return currentState;
}
function genStepwise() {
  alert('genStep');
}
function next() {
  alert('next');
}
function genInvalid() {
  alert('genInvalid');
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
