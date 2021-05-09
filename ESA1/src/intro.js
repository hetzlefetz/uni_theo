import React from 'react';
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

export const Intro = ({ stepsEnabled, setStepsEnabled }) => {
  const steps = [
    {
      element: '.inputpanel',
      intro: 'Hier Kann ein wort Eingegeben, generiert oder getestet werden',
    },
    {
      element: '.stateTable',
      intro: 'Hier bedindet sich die zustands Tabelle',
    },
    {
      element: '.buttonpanel',
      intro: 'Hier kann das eingegebene Wort simuliert werden',
    },
    {
      element: '.graph',
      intro: 'Die graphische darstellung der Reber Grammtik',
    },
  ];

  return (
    <Steps
      enabled={stepsEnabled}
      steps={steps}
      initialStep={0}
      onExit={() => setStepsEnabled(false)}
      options={{
        nextLabel: 'Weiter',
        prevLabel: 'Zurück',
        doneLabel: 'Intro Beenden',
        skipLabel: 'Überspringen',
      }}
    />
  );
};
