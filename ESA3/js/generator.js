class Generator {
  states = Object.freeze({
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
  initialState = Object.freeze('F');

  generateValid = () => {
    var currentState = this.initialState;
    while (!isTerminal(currentState)) {
      currentState = this.nextState(currentState);
      if (currentState.length > 10000) {
        alert('Maximale länge überschritten');
        break;
      }
    }
    return currentState;
  };
  generateInvalid = () => {
    var word = this.generateValid();
    while (word.length < 4) {
      word = this.generateValid();
    }
    var index = Math.floor(Math.random() * word.length);
    return removeByIndex(word, index);
  };

  nextState = (state) => {
    state = state.replaceAll('F', () => {
      if (state.length > 100) {
        return 'Z';
      }
      var followers = shuffle(this.states.S.followers);
      return followers[0];
    });

    state = state.replaceAll('O', () => {
      var followers = shuffle(this.states.O.followers);
      return followers[0];
    });

    state = state.replaceAll('A', () => {
      var followers = shuffle(this.states.A.followers);
      return followers[0];
    });

    state = state.replaceAll('Z', () => {
      var val = getRandomIntInclusive(0, 9);
      return val;
    });

    return state;
  };
}
