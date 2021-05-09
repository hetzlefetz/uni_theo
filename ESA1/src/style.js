import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #stateTable {
    border-collapse: collapse;
    font-size:12px;
    width:100%
  }
  #stateTable th {
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
  #stateTable td, #stateTable th {
    border: 1px solid #ddd;
    padding: 4px;
   
  }
  &.active {
    background:#4CAF50;
   
  }
  &.active-error {
    background:#f00;
   
  }
  .input-group {
    color: #333;
    float: left;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    margin: 0 20px 10px;
    width: 200px;
  }
  
  label {
    display: block;
    margin-bottom: 2px;
  }
  
  input[type=text] {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 13px;
    height: 33px;
    margin: 0;
    padding: 0 0 0 15px;
    width: 100%;
  }
  
  .error-message {
    color: #cc0033;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0 0;
  }
  
  .input-group .error-message {
    display: none;
  }
  
  
  /* Error Styling */
  
  .error label {
    color: #cc0033;
  }
  
  .error input[type=text] {
    background-color: #fce4e4;
    border: 1px solid #cc0033;
    outline: none;
  }
  
  .error .error-message {
    display: inline-block;
  }
  
`;

export const Mainframe = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: sans-serif;
  width: 100vw;
  height: 100vw;
`;

export const ButtonPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 25px;
`;
export const GraphPanel = styled.div`
  width: 75%;

  padding: 25px;
`;

export const TablePanel = styled.div`
  width: 25%;

  padding: 25px;
  font-size: 12px;
`;
export const InputPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 100%;
  align-items: center;
`;
