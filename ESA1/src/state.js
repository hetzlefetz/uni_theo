import { Machine } from './machine';
export const stateType = Object.freeze({
  start: 'start',
  transition: 'transition',
  end: 'end',
});
export const states = Object.freeze([
  {
    node: 'q0',
    type: stateType.start,
    transitions: [
      {
        node: 'q1',
        edge: 'b',
      },
    ],
  },
  {
    node: 'q1',
    type: stateType.transition,
    transitions: [
      {
        node: 'q2',
        edge: 't1',
      },
      {
        node: 'q3',
        edge: 'p1',
      },
    ],
  },
  {
    node: 'q2',
    type: stateType.transition,
    transitions: [
      {
        node: 'q2',
        edge: 's1',
      },
      {
        node: 'q5',
        edge: 'x1',
      },
    ],
  },
  {
    node: 'q3',
    type: stateType.transition,
    transitions: [
      {
        node: 'q3',
        edge: 't2',
      },
      {
        node: 'q4',
        edge: 'v1',
      },
    ],
  },
  {
    node: 'q4',
    type: stateType.transition,
    transitions: [
      {
        node: 'q5',
        edge: 'p2',
      },
      {
        node: 'q6',
        edge: 'v2',
      },
    ],
  },
  {
    node: 'q5',
    type: stateType.transition,
    transitions: [
      {
        node: 'q6',
        edge: 's2',
      },
      {
        node: 'q3',
        edge: 'x2',
      },
    ],
  },
  {
    node: 'q6',
    type: stateType.transition,
    transitions: [
      {
        node: 'q7',
        edge: 'e',
      },
    ],
  },
  {
    node: 'q7',
    type: stateType.end,
    transitions: [],
  },
]);
const validChars = [
  'B',
  'P',
  'S',
  'T',
  'X',
  'S',
  'E',
  'V',
  'P',
  'X',
  'V',
  'T',
  'P',
];
export const makeValidWord = () => {
  var currentState = states.find((x) => x.type == stateType.start);
  var word = '';
  while (currentState.type != stateType.end) {
    console.log(currentState);
    var transition =
      currentState.transitions[
        Math.floor(Math.random() * currentState.transitions.length)
      ];
    if (transition == undefined) {
    }
    word += transition.edge.toUpperCase()[0];
    currentState = states.find((x) => x.node == transition.node);
  }
  return word;
};
export const makeInvalidWord = () => {
  var word = scramble(makeValidWord());
  while (testWord(word)) {
    word = scramble(makeValidWord());
  }
  return word;
};
const scramble = (word) => {
  var out = '';
  var split = word.split('');
  for (var i = 0; i < word.length; i++) {
    var rnd = Math.random();
    if (rnd > 0.9) {
      out += validChars[Math.floor(Math.random() * validChars.length)];
    } else {
      out += split[i];
    }
  }
  return out;
};
export const testWord = (word) => {
  var sm = new Machine(states);
  var word = word.split('');
  var s = sm.nextState();
  sm.setState(s);

  for (var i = 0; i < word.length; i++) {
    try {
      s = sm.nextState(word[i]);
      sm.setState(s);
    } catch {
      return false;
    }
  }
  if (s?.node?.type === stateType.end) {
    return true;
  } else {
    return false;
  }
};
