/**
 * A file used to manage possible settings for this chrome extension. The
 * settings only consist of styling options, and are stored with the Chrome
 * Storage API.
 * @module settings
 * @author laguirre <aguirreluis1234@gmail.com>
 */
const chrome = require('./chrome');

/*
 * Constants defining default styling and what colors are used in each style
 * option.
 * @constant
 * @readonly
 */
const DEFAULT_STYLE = 'style 1';
const DEFAULT_SETTINGS = {style: DEFAULT_STYLE};
const STYLES = ['style 1', 'style 2', 'style 3','style 4', 'style 5', 'style 6', 'style 7'];

// TODO(la): keep these values internally and instead create getter functions
// for these values?
const STYLE_FILES = new Map([
  ['style 1', 'style1.css'],
  ['style 2', 'style2.css'],
  ['style 3', 'style3.css'],
  ['style 4', 'style4.css'],
  ['style 5', 'style5.css'],
  ['style 6', 'style6.css'],
  ['style 7', 'style7.css']
]);
const COLOR_SCHEMES = new Map([
  ['style 1', ['#455368','#a7aeb8','#f1f1f1','#8d9299','#f57e72','white']],
  ['style 2', ['white','#80808c','white','#b4b4ba','#ff5264','#605d6f']],
  ['style 3', ['#293035','white','#273036','#8d9396','#1f9bcf','white']],
  ['style 4', ['#f5f5f7','#2c383e','white','#7c8489','#1f9bcf','white']],
  ['style 5', ['#333333','white','#292929','white','#252525','#449c88']],
  ['style 6', ['#333333','white','#f2f2f2','#797979','#8fd1c7','#42bfb9']],
  ['style 7', ['white','#9596a1','#4b4c60','white','#5e5f70','#ff3c6b']]
]);



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

    if (!STYLES.includes(data.style)) data = DEFAULT_SETTINGS;
    callback(null, data);
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
  COLOR_SCHEMES: COLOR_SCHEMES,
  STYLE_FILES: STYLE_FILES,
  STYLES: STYLES,
};
