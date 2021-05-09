import React from 'react';
import { GraphThingy } from './graph';
import { AppState } from './constants';
import {
  makeInvalidWord,
  makeValidWord,
  states,
  stateType,
  testWord,
} from './state';
import { Machine } from './machine';
import { StateTable } from './table';
import {
  GlobalStyle,
  ButtonPanel,
  Mainframe,
  Content,
  GraphPanel,
  TablePanel,
  InputPanel,
} from './style';
import { Intro } from './intro';

export const Frame = () => {
  const [currentAppState, setCurrentAppState] = React.useState(
    AppState.STOPPED,
  );
  const [currentSMState, setCurrentSMState] = React.useState(null);
  const [currentWord, setCurrentWord] = React.useState('');
  const [inputClass, setInputClass] = React.useState('input-group');
  const [stepsEnabled, setStepsEnabled] = React.useState(false);
  const sm = React.useRef(new Machine(states));
  const currIdx = React.useRef(0);
  const onStart = async () => {
    setCurrentAppState(AppState.RUNNING);
    resetColors();
    sm.current.setState(null);
    var word = currentWord.split('');
    var sleepmod = document.getElementById('speed').value;

    for (var i = 0; i < word.length; i++) {
      resetColors();
      var oldState = sm.currentState;
      var s = sm.current.nextState(word[i]);
      if (s == null) {
        alert('Fehler bei Buchstabe: ' + word[i] + ' an Position:' + i);
        if (oldState) {
          document.getElementById('node_' + oldState.node.node).style.stroke =
            'red';
          break;
        }
      }
      sm.current.setState(s);
      setCurrentSMState(s);
      document.getElementById('node_' + s.node.node).style.stroke = 'green';

      if (s.edge) {
        console.log('edge_' + s.edge.edge.toUpperCase());
        document.getElementById(
          'edge_' + s.edge.edge.toUpperCase(),
        ).style.stroke = 'green';
      }
      await new Promise((r) => setTimeout(r, sleepmod * 1000));
    }
    currIdx.current = 0;
    setCurrentSMState(null);
    setCurrentAppState(AppState.STOPPED);
  };
  const onStop = () => {
    setCurrentWord('');
    setCurrentSMState(null);
    setCurrentAppState(AppState.STOPPED);
    window.location.reload(false);
  };
  const onNext = () => {
    if (currentAppState != AppState.RUNNING_MANUALLY) {
      currIdx.current = 0;
      sm.current.setState(null);
      resetColors();
      setCurrentAppState(AppState.RUNNING_MANUALLY);
    }
    var word = currentWord.split('');
    var oldState = sm.currentState;
    var s = sm.current.nextState(word[currIdx.current]);
    if (s == null) {
      alert(
        'Fehler bei Buchstabe: ' +
          word[currIdx.current] +
          ' an Position:' +
          currIdx.current,
      );
      if (oldState) {
        document.getElementById('node_' + oldState.node.node).style.stroke =
          'red';
        return;
      }
    }
    sm.current.setState(s);
    setCurrentSMState(s);
    document.getElementById('node_' + s.node.node).style.stroke = 'green';

    if (s.edge) {
      console.log('edge_' + s.edge.edge.toUpperCase());
      document.getElementById(
        'edge_' + s.edge.edge.toUpperCase(),
      ).style.stroke = 'green';
    }
    if (s.node.type == stateType.end) {
      alert('Endzustand erreicht!');
      setCurrentAppState(AppState.STOPPED);
      currIdx.current = 0;
    }
    currIdx.current += 1;
  };
  const onHelp = () => {
    setCurrentAppState(AppState.HELP);
    setStepsEnabled(true);
  };
  const resetColors = () => {
    var nodes = document.getElementsByClassName('node');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.stroke = 'black';
    }
    var nodes = document.getElementsByClassName('edge');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.stroke = 'black';
    }
  };
  const generateWord = () => {
    setCurrentSMState(null);
    resetColors();
    setCurrentWord(makeValidWord());
  };
  const generateWrongWord = () => {
    setCurrentSMState(null);
    resetColors();
    setCurrentWord(makeInvalidWord());
  };
  const handleWordChange = (event) => {
    setCurrentSMState(null);
    resetColors();
    setCurrentWord(event.target.value);
  };
  const onTestWord = () => {
    if (testWord(currentWord)) {
      setInputClass('input-group');
    } else {
      setInputClass('input-group error');
    }
  };
  return (
    <Mainframe>
      <GlobalStyle />
      <Intro stepsEnabled={stepsEnabled} setStepsEnabled={setStepsEnabled} />
      <InputPanel className="inputpanel">
        <div className={inputClass}>
          <label htmlFor="word-input">Wort</label>
          <input
            disabled={currentAppState != AppState.STOPPED}
            type="text"
            placeholder="Bitte ein wort eingeben"
            value={currentWord}
            onChange={handleWordChange}
          />
          <div className="error-message">
            Das angegebene Wort ist nicht gültig
          </div>
        </div>
        <button
          disabled={currentAppState != AppState.STOPPED}
          onClick={generateWord}
        >
          Wort generieren
        </button>
        <button
          disabled={currentAppState != AppState.STOPPED}
          onClick={generateWrongWord}
        >
          Falsches wort generieren
        </button>
        <button
          disabled={
            currentAppState != AppState.STOPPED || currentWord.length == 0
          }
          onClick={onTestWord}
        >
          Wort Testen
        </button>
      </InputPanel>
      <Content>
        <TablePanel className="stateTable">
          <StateTable currentState={currentSMState} />
        </TablePanel>
        <GraphPanel className="graph">
          <GraphThingy currentState={(currentAppState, currentSMState)} />
        </GraphPanel>
      </Content>
      <ButtonPanel className="buttonpanel">
        <button
          disabled={
            currentAppState != AppState.STOPPED || currentWord.length == 0
          }
          onClick={onStart}
        >
          Start
        </button>
        <button
          disabled={
            !(
              currentAppState == AppState.RUNNING ||
              currentAppState == AppState.RUNNING_MANUALLY
            )
          }
          onClick={onStop}
        >
          Stop
        </button>
        <button
          disabled={
            currentAppState == AppState.RUNNING || currentWord.length == 0
          }
          onClick={onNext}
        >
          Next
        </button>
        <button onClick={onHelp}>Hilfe</button>
        <label htmlFor="speed">Schneller</label>
        <input
          type="range"
          id="speed"
          min="0"
          max="5"
          defaultValue="1"
          disabled={currentAppState != AppState.STOPPED}
        />
        <label htmlFor="speed">Langsamer</label>
      </ButtonPanel>
    </Mainframe>
  );
};
