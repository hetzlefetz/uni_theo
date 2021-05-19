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
  var result = '';
  var cont = true;
  while (cont) {
    result += nextState(currentState);
    cont = !isTerminal(result);
  }
  console.log(result);
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
        return Math.floor(Math.random() * states.Z.followers.length);
      }
      return next;
    }
    case 'Z': {
      return Math.floor(Math.random() * states.Z.followers.length);
    }
    case 'O': {
      return Math.floor(Math.random() * states.O.followers.length);
    }
    case 'A': {
      return (
        '(' +
        nextState(currentState.substring(1, currentState.length - 1)) +
        ')'
      );
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
