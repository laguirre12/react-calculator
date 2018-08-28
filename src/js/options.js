/**
 * Manipulates the DOM and creates dynamic
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const settings = require('./settings');
require('../css/options.css');

// TODO(la): show success and failure messages to the user
function failure(msg) { console.log('failure: ', msg); }
function success(msg) { console.log('success: ', msg); }



/**
 * Updates the options display to show the given style and it's color scheme.
 * @param {string} style The style to display
 */
function setCurrentStyle(style) {
  document.querySelector(`input[name="style"][value="${style}"]`).checked = true;
  const colorSquares = document.querySelectorAll('.color-square');
  const colors = settings.VALID_STYLES[style];
  colorSquares.forEach((square, index) => {
    square.style.backgroundColor = colors[index];
  });
}

/**
 * Returns the value of the currently chosen radio button.
 * @return {string} the currently chosen style
 */
function getCurrentStyle() {
  const node = document.querySelector('input[name="style"]:checked');
  if (node == null) return 'style1.css';
  return node.value;
}


document.addEventListener('DOMContentLoaded', () => {
  settings.retrieveSettings((err, data) => {
    if (err) failure(err.message);
    setCurrentStyle(data.style);
  });

  const save = document.querySelector('#save');
  const reset = document.querySelector('#reset');
  const radio = document.querySelectorAll('input[name="style"]');

  // reset button
  reset.addEventListener('click', () => setCurrentStyle('style1.css'));

  // update color palette display when switching styles
  radio.forEach(r => {
    r.addEventListener('click', () => setCurrentStyle(getCurrentStyle()));
  });

  // save button
  save.addEventListener('click', () => {
    settings.saveSettings({style : getCurrentStyle()}, err => {
      if (err) failure(err.message);
      else success('Succesfully saved settings');
    });
  });
});
