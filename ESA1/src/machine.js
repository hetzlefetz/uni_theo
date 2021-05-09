import { stateType } from './state';

export class Machine {
  currentState = null;
  states = null;

  constructor(states) {
    this.states = states;
  }

  initialState = () => {
    return {
      node: this.states.find((x) => x.type == stateType.start),
      edge: null,
    };
  };

  nextState = (c) => {
    if (this.currentState == null) {
      //If we are in the intial state check if c is a valid start state
      if (c?.toLowerCase() == 'b') {
        this.currentState = this.initialState();
      } else {
        return null;
      }
    }
    var edge = this.currentState.node.transitions.find(
      (x) => x.edge[0].toLowerCase() == c.toLowerCase(),
    ); //find the next state based on the current state
    if (edge) {
      //found a valid edge
      return {
        node: this.states.find((x) => x.node == edge.node),
        edge: edge,
      };
    } else {
      //didnt find anything
      return null;
    }
  };
  setState = (s) => (this.currentState = s);
}
