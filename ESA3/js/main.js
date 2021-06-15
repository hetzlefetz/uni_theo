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
var stepWord = 'foo';

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
          intro: 'Intro für den Arithmetik Validator',
        },
        {
          element: document.querySelector('#btn-genValid'),
          intro: 'Generiert eine valide Artithmetik',
        },
        {
          element: document.querySelector('#btn-genInvalid'),
          intro: 'Generiert eine invalide Artithmetik',
        },
        {
          element: document.querySelector('#input'),
          intro: 'Hier kann ein zu validierender Ausdruck angegeben werden',
        },
        {
          element: document.querySelector('#btn-play'),
          intro: 'Startet das automatische validieren der Arithmetik',
        },
        {
          element: document.querySelector('#btn-pause'),
          intro:
            'Pausiert die Validierung. Zum erneuten starten einfach Play drücken',
        },
        {
          element: document.querySelector('#btn-step'),
          intro: 'Startet das schrittweise validieren der Arithmetik',
        },
        {
          element: document.querySelector('#btn-cancel'),
          intro:
            'Bricht das validieren ab und versetzt die Applikation in den Initialzustand',
        },
        {
          element: document.querySelector('#drp-speed'),
          intro: 'Hier kann die Animationsgeschwindigkeit gewählt werden',
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
          element: document.querySelector('#graph'),
          intro: 'Der Kellerautomat als Graph',
        },
        {
          element: document.querySelector('#output-table'),
          intro: 'Hier kann die generierung schrittweise nachvollzogen werden',
        },
        {
          element: document.querySelector('#cellar-table'),
          intro: 'Hier kann der aktuelle zustand des Kellers gesehen werden',
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
  appState = 'RUNNING';
  setupButtonStates();

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
  appState = 'STOPPED';
  setupButtonStates(true);
}
var lastStepNode = 'q1';
var lastStepEdge = '';

function stepClick() {
  if (appState == 'STOPPED') {
    appState = 'STEP';
    setupButtonStates();
    var input = document.getElementById('input_expression').value;
    aut = new Automaton(input);
    resetColors();
    document.getElementById('node_q1').classList.toggle('green');
  }

  var res = aut.nextState();

  document.getElementById('node_' + lastStepNode).classList.toggle('green');
  if (lastStepEdge.length > 0) {
    document.getElementById('t_' + lastStepEdge).classList.toggle('green');
    document.getElementById('r_' + lastStepEdge).classList.toggle('green');
  }

  lastStepNode = aut.currentState.name;
  lastStepEdge = res.rule;

  document.getElementById('node_' + lastStepNode).classList.toggle('green');
  if (lastStepEdge.length > 0) {
    console.log('r_' + lastStepEdge);

    document.getElementById('t_' + lastStepEdge).classList.toggle('green');
    document.getElementById('r_' + lastStepEdge).classList.toggle('green');
  }
  var fin = false;
  if (aut.word.length == 0) {
    fin = aut.finished();
  } else {
    return;
  }

  if (fin) {
    document.getElementById('input_expression').value = '';
    alert('Erfolgreich beendet');

    document.getElementById('node_' + lastStepNode).classList.add('green');
    document
      .getElementById('t_' + lastStepEdge)
      .classList.add('green', 'pulsing');
    document
      .getElementById('r_' + lastStepEdge)
      .classList.add('green', 'pulsing');
    lastStepEdge = '';
    lastStepNode = 'q1';
    appState = 'STOPPED';
    setupButtonStates(true);
  } else {
    alert('Mit fehler beendet!');
    document.getElementById('input_expression').value = '';
    document.getElementById('node_' + lastStepNode).classList.add('red');
    if (lastStepEdge.length > 0) {
      document
        .getElementById('t_' + lastStepEdge)
        .classList.add('red', 'pulsing');
      document
        .getElementById('r_' + lastStepEdge)
        .classList.add('red', 'pulsing');
    }
    lastStepEdge = '';
    lastStepNode = 'q1';
    appState = 'STOPPED';
    setupButtonStates(true);
  }
}

/*
 
*/
async function genValid() {
  appState = 'RUNNING';
  setupButtonStates();
  currentState = initialState;
  while (!isTerminal(currentState)) {
    currentState = nextState(currentState);
    if (currentState.length > 10000) {
      alert('Maximale länge überschritten');
      break;
    }
  }

  document.getElementById('input_expression').value = currentState;
  appState = 'STOPPED';
  setupButtonStates(true);
}

function genInvalid() {
  pauseRequested = false;
  appState = 'RUNNING';
  setupButtonStates();
  currentState = initialState;
  while (!isTerminal(currentState)) {
    currentState = nextState(currentState);
    if (currentState.length > 10000) {
      alert('Maximale länge überschritten');
      break;
    }
  }
  if (currentState.length == 1) {
    currentState = '-';
  } else {
    currentState = removeByIndex(
      currentState,
      getRandomIntInclusive(0, currentState.length - 1),
    );
  }
  document.getElementById('input_expression').value = currentState;
  appState = 'STOPPED';
  setupButtonStates(true);
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
  appState = 'STOPPED';
  setupButtonStates();
};
