/**
 * Adds the disabled class to elements identified by id
 * @param  {...string} ids
 */
function disableElement(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).classList.add('disabled');
    document.getElementById(id).disabled = true;
  });
}

/**
 * Remove the disabled class to elements identified by id
 * @param  {...string} ids
 */
function enableElement(...ids) {
  ids.forEach((id) => {
    document.getElementById(id).classList.remove('disabled');
    document.getElementById(id).disabled = false;
  });
}
/**
 * Performs a fisher yates shuffle of a given array
 * @param {any[]} array
 * @returns the shuffled array
 */
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

/**
 * Gets a random number in the range of R=[min,max]
 * @param {number} min
 * @param {number} max
 * @returns a random number
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function resetColors() {
  var x = document.getElementsByClassName('green');
  for (var i = 0; i < x.length; i++) {
    x.item(i).classList.remove('green');
  }

  x = document.getElementsByClassName('red');
  for (var i = 0; i < x.length; i++) {
    x.item(i).classList.remove('red');
  }
  clearTable();
}

const checkInput = () => {
  var input = document.getElementById('input_expression');
  var foo = '-';
  if (input.value.match('[0-9()+*' + foo + '/.]')) {
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
};
function isTerminal(value) {
  if (value.includes('A')) return false;
  if (value.includes('F')) return false;
  if (value.includes('Z')) return false;

  return true;
}
/**
 * Sets up the buttons according to the current app state
 */
const setupButtonStates = (forceEnable) => {
  switch (appState) {
    case appStates.PAUSED:
      enableElement('btn-play', 'btn-cancel');
      disableElement(
        'btn-pause',
        'btn-step',
        'drp-speed',
        'btn-genInvalid',
        'btn-genValid',
        'btn-tour',
        'btn-doc',
        'input_expression',
      );
      break;
    case appStates.RUNNING:
      enableElement('btn-pause', 'btn-cancel');
      disableElement(
        'input_expression',
        'btn-play',
        'btn-step',
        'drp-speed',
        'btn-genInvalid',
        'btn-genValid',
        'btn-tour',
        'btn-doc',
      );
      break;
    case appStates.STEP:
      enableElement('btn-cancel', 'btn-step');
      disableElement(
        'input_expression',
        'btn-play',
        'btn-pause',
        'drp-speed',
        'btn-genInvalid',
        'btn-genValid',
        'btn-tour',
        'btn-doc',
      );
      break;
    case appStates.STOPPED:
      if (
        forceEnable ||
        (document.getElementById('input_expression').value.length > 0 &&
          checkInput())
      ) {
        enableElement('btn-play', 'btn-step');
      } else {
        disableElement('btn-play', 'btn-step');
      }
      enableElement(
        'btn-cancel',
        'input_expression',
        'drp-speed',
        'btn-genInvalid',
        'btn-genValid',
        'btn-tour',
        'btn-doc',
      );
      disableElement('btn-pause');
      break;
  }
};

/**
 * Gets a random number in the range of R=[min,max]
 * @param {number} min
 * @param {number} max
 * @returns a random number
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function removeByIndex(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}
function insertRow() {
  var table = document.getElementById('cellar-table');
  var row = table.insertRow();
  var cell0 = row.insertCell(0);
  cell0.innerHTML = 'X';
}
function deleteRow() {
  var table = document.getElementById('cellar-table');
  var rowCount = table.rows.length;
  table.deleteRow(rowCount - 1);
}
function clearTable() {
  var node = document.getElementById('cellar-table-body');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}
function tryAddClass(elementId, ...classes) {
  var elem = document.getElementById(elementId);
  if (elem) {
    elem.classList.add(...classes);
  }
}
