/**
 * A file used to manage possible settings for this chrome extension. The
 * settings only consist of styling options, and are stored with the Chrome
 * Storage API.
 * @module settings
 * @author laguirre <aguirreluis1234@gmail.com>
 */


/*
 * Constants defining default styling and what colors are used in each style
 * option.
 * @constant
 * @readonly
 */
const DEFAULT_STYLE = 'style1.css';
const DEFAULT_SETTINGS = {style: DEFAULT_STYLE};
const VALID_STYLES = Object.freeze({
  'style1.css': ['#455368', '#a7aeb8', '#f1f1f1', '#8d9299', '#f57e72', 'white'],
  'style2.css': ['white', '#80808c', 'white', '#b4b4ba', '#ff5264', '#605d6f'],
  'style3.css': ['#293035', 'white', '#273036', '#8d9396', '#1f9bcf', 'white'],
  'style4.css': ['#f5f5f7', '#2c383e', 'white', '#7c8489', '#1f9bcf', 'white'],
  'style5.css': ['#333333', 'white', '#292929', 'white', '#252525', '#449c88'],
  'style6.css': ['#333333', 'white', '#f2f2f2', '#797979', '#8fd1c7', '#42bfb9'],
  'style7.css': ['white', '#9596a1', '#4b4c60', 'white', '#5e5f70', '#ff3c6b'],
});



/**
 * Finds the current settings for the extension using the Chrome Storage API.
 * If an error occurs, then an Error object and the DEFAULT_SETTINGS are
 * passed to the callback
 * @param {function(Error, Object)} callback a callback function that takes
 * an error object and the settings object.
 */
function retrieveSettings(callback) {
  chrome.storage.local.get(DEFAULT_SETTINGS, data => {
    if (chrome.runtime.error) {
      callback(new Error('Unable to retrieve user settings, using default'),
        DEFAULT_SETTINGS);
    }

    if (!VALID_STYLES.hasOwnProperty(data.style)) data = DEFAULT_SETTINGS;
    callback(undefined, data);
  });
}

/**
 * Saves the current settings of the extension using the Chrome Storage API.
 * @param {object} settings the settings to save
 * @param {function(Error, Object)} callback a callback function that takes
 * an error object and the input settings object.
  */
function saveSettings(settings, callback) {
  chrome.storage.local.set(settings, () => {
    if (chrome.runtime.error) {
      callback(new Error('Unable to save Settings'), settings);
      return;
    }
    callback(null, settings);
  });
}


module.exports = {
  saveSettings: saveSettings,
  retrieveSettings: retrieveSettings,
  DEFAULT_SETTINGS: DEFAULT_SETTINGS,
  DEFAULT_STYLE: DEFAULT_STYLE,
  VALID_STYLES: VALID_STYLES,
};
