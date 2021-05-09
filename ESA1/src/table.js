import React from 'react';
export const StateTable = ({ currentState }) => {
  var currentActive = currentState?.node.node + currentState?.edge?.edge;
  console.log(currentActive);
  return (
    <table id="stateTable">
      <thead>
        <tr>
          <th>Q</th>
          <th>Σ</th>
          <th>*Q</th>
        </tr>
      </thead>
      <tbody>
        <tr className={currentActive == 'q1b' ? 'active' : ''}>
          <td>
            →Q<sub>0</sub>
          </td>
          <td>B</td>
          <td>
            Q<sub>1</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q2t1' ? 'active' : ''}>
          <td>
            Q<sub>1</sub>
          </td>
          <td>T</td>
          <td>
            Q<sub>2</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q3p1' ? 'active' : ''}>
          <td>
            Q<sub>1</sub>
          </td>
          <td>P</td>
          <td>
            Q<sub>3</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q2s1' ? 'active' : ''}>
          <td>
            Q<sub>2</sub>
          </td>
          <td>S</td>
          <td>
            Q<sub>2</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q5x1' ? 'active' : ''}>
          <td>
            Q<sub>2</sub>
          </td>
          <td>X</td>
          <td>
            Q<sub>5</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q3t2' ? 'active' : ''}>
          <td>
            Q<sub>3</sub>
          </td>
          <td>T</td>
          <td>
            Q<sub>3</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q4v1' ? 'active' : ''}>
          <td>
            Q<sub>3</sub>
          </td>
          <td>V</td>
          <td>
            Q<sub>4</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q6v2' ? 'active' : ''}>
          <td>
            Q<sub>4</sub>
          </td>
          <td>V</td>
          <td>
            Q<sub>6</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q5p2' ? 'active' : ''}>
          <td>
            Q<sub>4</sub>
          </td>
          <td>P</td>
          <td>
            Q<sub>5</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q6s2' ? 'active' : ''}>
          <td>
            Q<sub>5</sub>
          </td>
          <td>S</td>
          <td>
            Q<sub>6</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q3x2' ? 'active' : ''}>
          <td>
            Q<sub>5</sub>
          </td>
          <td>X</td>
          <td>
            Q<sub>3</sub>
          </td>
        </tr>
        <tr className={currentActive == 'q7e' ? 'active' : ''}>
          <td>
            Q<sub>6</sub>
          </td>
          <td>E</td>
          <td>
            *Q<sub>7</sub>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
