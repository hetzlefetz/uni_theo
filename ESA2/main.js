const intialState = 'S';

var states = {
  S: {
    followers: ['SOS', 'A', 'Z'],
  },
  Z: {
    followers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  O: {
    followers: ['+', '-', '*', '/'],
  },
  A: {
    followers: ['(S)'],
  },
};

function genValid() {
  var currentState = intialState;

  while (!isTerminal(currentState)) {
    currentState = currentState.replaceAll('S', () => {
      followers = shuffle(states.S.followers);
      return followers[0];
    });
    currentState = currentState.replaceAll('O', () => {
      followers = shuffle(states.O.followers);
      return followers[0];
    });
    currentState = currentState.replaceAll('A', () => {
      followers = shuffle(states.A.followers);
      return followers[0];
    });
    currentState = currentState.replaceAll('Z', () => {
      return getRandomIntInclusive(0, 9);
    });
    if (currentState.length > 1000) {
      break;
    }
  }
  var output = {
    currentState,
    numberOpen: (currentState.match(/\(/g) || []).length,
    numberClosed: (currentState.match(/\)/g) || []).length,
    isValid: isTerminal(currentState) && eval(currentState),
  };
  document.getElementById('output').innerHTML = JSON.stringify(output);
}
function isTerminal(value) {
  if (value.includes('A')) return false;
  if (value.includes('S')) return false;
  if (value.includes('Z')) return false;

  return true;
}

function nextState(currentState) {
  switch (currentState) {
    case 'S': {
      var next =
        states.S.followers[
          Math.floor(Math.random() * states.S.followers.length)
        ];
      if (next === 'Z') {
        return states.Z.followers[
          Math.floor(Math.random() * states.Z.followers.length)
        ];
      }
      return next;
    }
    case 'Z': {
      return states.Z.followers[
        Math.floor(Math.random() * states.Z.followers.length)
      ];
    }
    case 'O': {
      return states.O.followers[
        Math.floor(Math.random() * states.O.followers.length)
      ];
    }
    case 'A': {
      if (currentState == 'S') {
        return '(S)';
      }
      ('((Z))');
      return '(' + nextState(currentState) + ')';
    }
    case 'SOS': {
      return nextState('S') + nextState('O') + nextState('S');
    }

    default:
      throw new Error('Oopsie');
  }
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
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
