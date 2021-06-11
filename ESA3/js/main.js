var appStates = {
  PAUSED: 'PAUSED',
  RUNNING: 'RUNNING',
  STEP: 'STEP',
  STOPPED: 'STOPPED',
};
var speed = {
  Langsam: '5000',
  Normal: '1000',
  Schnell: '500',
};
var appState = appStates.STOPPED;
var currentSpeed = speed.Normal;

const initialState = Object.freeze('F');
var currentState = initialState;
var pauseRequested = false;
var currentStep = 0;
const states = Object.freeze({
  S: {
    followers: ['FOF', 'A', 'Z'],
  },
  Z: {
    followers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  O: {
    followers: ['+', '-', '*', '/'],
  },
  A: {
    followers: ['(F)'],
  },
});

async function tourClick() {
  introJs()
    .setOptions({
      steps: [
        {
          intro: 'Intro für den Arithmetik Generator',
        },
        {
          element: document.querySelector('#btn-play'),
          intro: 'Startet das automatische generieren der Arithmetik',
        },
        {
          element: document.querySelector('#btn-pause'),
          intro:
            'Pausiert die generierung. Zum erneuten starten einfach Play drücken',
        },
        {
          element: document.querySelector('#btn-step'),
          intro: 'Startet das schrittweise generieren der Arithmetik',
        },
        {
          element: document.querySelector('#btn-cancel'),
          intro:
            'Bricht das generieren ab und versetzt die Applikation in den Initialzustand',
        },
        {
          element: document.querySelector('#drp-speed'),
          intro: 'Hier kann die Animationsgeschwindigkeit gewähltwerden',
        },
        {
          element: document.querySelector('#btn-genInvalid'),
          intro:
            'Generiert einen ungüligen ausdruck indem ein gültiger ausdruck generiert wird und ein zeichen gelöscht wird',
        },
        {
          element: document.querySelector('#btn-tour'),
          intro: 'Startet dieses Tutorial',
        },
        {
          element: document.querySelector('#btn-doc'),
          intro: 'Weiterführende informationen zu dieser Anwendung',
        },
        {
          element: document.querySelector('#output'),
          intro:
            'Hier erscheint der generierte ausdruck / werden status informationen angezeigt',
        },
        {
          element: document.querySelector('#output-table'),
          intro: 'Hier kann die generierung schrittweise nachvollzogen werden',
        },
        {
          element: document.querySelector('#grammar'),
          intro: 'Die Grammatik die dieser anwendung zu Grunde liegt',
        },
      ],
    })
    .start();
}
var aut = null;
async function playClick() {
  pauseRequested = false;
  var lastNode = 'q1';
  var lastEdge = '';

  setupButtonStates('RUNNING');

  resetColors();
  var input = document.getElementById('input_expression').value;
  aut = new Automaton(input);
  var fin = false;

  document
    .getElementById('node_' + aut.currentState.name)
    .classList.toggle('green');
  var res = aut.nextState();
  while (res.result && fin == false) {
    await new Promise((r) =>
      setTimeout(r, document.getElementById('drp-speed').value),
    );
    document.getElementById('node_' + lastNode).classList.toggle('green');
    if (lastEdge.length > 0) {
      document.getElementById('t_' + lastEdge).classList.toggle('green');
      document.getElementById('r_' + lastEdge).classList.toggle('green');
      console.log('r_' + lastEdge);
    }

    lastNode = aut.currentState.name;
    lastEdge = res.rule;
    console.log(lastEdge);
    document.getElementById('node_' + lastNode).classList.toggle('green');
    if (lastEdge.length > 0) {
      console.log('r_' + lastEdge);

      document.getElementById('t_' + lastEdge).classList.toggle('green');
      document.getElementById('r_' + lastEdge).classList.toggle('green');
    }
    if (aut.finished()) fin = true;
    res = aut.nextState();
  }
  if (fin) {
    document.getElementById('node_' + lastNode).classList.add('green');
    document.getElementById('t_' + lastEdge).classList.add('green', 'pulsing');
    document.getElementById('r_' + lastEdge).classList.add('green', 'pulsing');
  } else {
    document.getElementById('node_' + lastNode).classList.add('red');
    if (lastEdge.length > 0) {
      document.getElementById('t_' + lastEdge).classList.add('red', 'pulsing');
      document.getElementById('r_' + lastEdge).classList.add('red', 'pulsing');
    }
  }

  setupButtonStates('STOPPED');
}
async function stepClick() {}

/*
 
*/
async function genValid() {
  setupButtonStates('RUNNING');
  currentState = initialState;
  while (!isTerminal(currentState)) {
    currentState = nextState(currentState);
    if (currentState.length > 10000) {
      alert('Maximale länge überschritten');
      break;
    }

    console.log(currentState);
  }
  console.log('done');
  document.getElementById('input_expression').value = currentState;
  setupButtonStates('STOPPED', true);
}

function genInvalid() {
  pauseRequested = false;
  setupButtonStates('RUNNING');
  currentState = initialState;
  while (!isTerminal(currentState)) {
    currentState = nextState(currentState);
    if (currentState.length > 10000) {
      alert('Maximale länge überschritten');
      break;
    }
  }
  console.log('done');

  if (currentState.length == 1) {
    currentState = '-';
  } else {
    currentState = removeByIndex(
      currentState,
      getRandomIntInclusive(0, currentState.length - 1),
    );
  }
  document.getElementById('input_expression').value = currentState;
  setupButtonStates('STOPPED', true);
}

function isTerminal(value) {
  if (value.includes('A')) return false;
  if (value.includes('F')) return false;
  if (value.includes('Z')) return false;

  return true;
}
function nextState(state) {
  state = state.replaceAll('F', () => {
    if (state.length > 100) {
      return 'Z';
    }
    followers = shuffle(states.S.followers);
    return followers[0];
  });

  state = state.replaceAll('O', () => {
    followers = shuffle(states.O.followers);
    return followers[0];
  });

  state = state.replaceAll('A', () => {
    followers = shuffle(states.A.followers);
    return followers[0];
  });

  state = state.replaceAll('Z', () => {
    var val = getRandomIntInclusive(0, 9);
    return val;
  });

  return state;
}

window.onload = (event) => {
  setupButtonStates('STOPPED');
};
