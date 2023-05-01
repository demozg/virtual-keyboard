/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Keys.js */ \"./src/js/Keys.js\");\n/* harmony import */ var _js_ClassKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ClassKeyboard.js */ \"./src/js/ClassKeyboard.js\");\n\n\n\nconst virtualKeyboard = new _js_ClassKeyboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_js_Keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvirtualKeyboard.createKeyboard();\nvirtualKeyboard.keyboardActions();\nvirtualKeyboard.mouseActions();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/ClassKeyboard.js":
/*!*********************************!*\
  !*** ./src/js/ClassKeyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Keyboard {\r\n  constructor(keys) {\r\n    this.keys = keys;\r\n    this.keysWrapper = [];\r\n    this.keyboardButtons = [];\r\n    this.body = [];\r\n    this.textArea = [];\r\n    this.language = 'En';\r\n    this.shift = '';\r\n    this.getLocalStorage();\r\n  }\r\n\r\n  setLocalStorage() {\r\n    localStorage.setItem('keyboardLanguage', this.language);\r\n  }\r\n\r\n  getLocalStorage() {\r\n    if (localStorage.getItem('keyboardLanguage') !== 'undefined') {\r\n      this.language = localStorage.getItem('keyboardLanguage') || 'En';\r\n    }\r\n  }\r\n\r\n  createKeyboard() {\r\n    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class=\"container\"></div>');\r\n    this.keyboard = document.querySelector('.container');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<h1 class=\"keyboard__title\">Virtual Keyboard</h1>');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<textarea class=\"keyboard__textarea\" autofocus=\"true\" rows=\"5\"></textarea>');\r\n    this.textArea = document.querySelector('.keyboard__textarea');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<div class=\"keyboard__wrapper\"></div>');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<p class=\"keyboard__text\">Press Ctrl + Shift for change language</p>');\r\n    this.keysWrapper = document.querySelector('.keyboard__wrapper');\r\n    this.keys.forEach((key) => {\r\n      if (key.keyCode === 'Backquote' || key.keyCode === 'Tab' || key.keyCode === 'CapsLock' || key.keyCode === 'ShiftLeft' || key.keyCode === 'ControlLeft') {\r\n        this.keysWrapper.insertAdjacentHTML('beforeend', '<div class=\"keyboard__row\"></div>');\r\n        this.keyboardRow = document.querySelector('.keyboard__row:last-child');\r\n      }\r\n      this.keyboardRow.insertAdjacentHTML('beforeend', `<div class=\"keyboard__btn\" data-keyCode=\"${key.keyCode}\">${key[`char${this.language}`]}</div>`);\r\n    });\r\n    this.keyboardButtons = document.querySelectorAll('.keyboard__btn');\r\n  }\r\n\r\n  keysByShift() {\r\n    this.shift = 'Shift';\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  keysWithoutShift() {\r\n    this.shift = '';\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  changeLanguage() {\r\n    if (this.language === 'En') {\r\n      this.language = 'Blr';\r\n    } else {\r\n      this.language = 'En';\r\n    }\r\n    this.changeKeyboardKeys();\r\n    this.setLocalStorage();\r\n  }\r\n\r\n  changeKeyboardKeys() {\r\n    this.keyboardButtons.forEach((button) => {\r\n      // eslint-disable-next-line no-param-reassign\r\n      button.innerText = this.keys.find((event) => event.keyCode === button.dataset.keycode)[`char${this.language}${this.shift}`];\r\n    });\r\n  }\r\n\r\n  addPressedKey(code) {\r\n    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);\r\n    if (pressedKey) {\r\n      pressedKey.classList.add('active');\r\n    }\r\n  }\r\n\r\n  removePressedKey(code) {\r\n    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);\r\n    if (pressedKey) {\r\n      pressedKey.classList.remove('active');\r\n    }\r\n  }\r\n\r\n  inputText(keyCode) {\r\n    const selection = this.textArea.selectionStart;\r\n    const symbols = this.textArea.value;\r\n    this.textArea.focus();\r\n    let blank;\r\n    switch (keyCode) {\r\n      case 'Backspace':\r\n        this.addBackspace();\r\n        return;\r\n      case 'Enter':\r\n        blank = '\\n';\r\n        break;\r\n      case 'Tab':\r\n        blank = '\\t';\r\n        break;\r\n      case 'CapsLock':\r\n        blank = '';\r\n        this.addCapsLock();\r\n        break;\r\n      case 'Shift':\r\n        blank = '';\r\n        break;\r\n      case 'Ctrl':\r\n        blank = '';\r\n        break;\r\n      case 'MetaLeft':\r\n        blank = '';\r\n        break;\r\n      case 'Alt':\r\n        blank = '';\r\n        break;\r\n      default:\r\n        blank = keyCode;\r\n    }\r\n    this.textArea.value = symbols.slice(0, selection) + blank + symbols.slice(selection);\r\n    this.textArea.selectionStart = selection + 1;\r\n    this.textArea.selectionEnd = selection + 1;\r\n  }\r\n\r\n  addCapsLock() {\r\n    if (this.shift === '') {\r\n      this.shift = 'Shift';\r\n      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.add('active');\r\n    } else {\r\n      this.shift = '';\r\n      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.remove('active');\r\n    }\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  addBackspace() {\r\n    const selection = this.textArea.selectionStart;\r\n    if (selection === 0) {\r\n      return;\r\n    }\r\n    const symbols = this.textArea.value;\r\n    this.textArea.value = symbols.slice(0, selection - 1) + symbols.slice(selection);\r\n    this.textArea.selectionStart = selection - 1;\r\n    this.textArea.selectionEnd = selection - 1;\r\n  }\r\n\r\n  keyboardActions() {\r\n    this.body = document.querySelector('body');\r\n    this.body.addEventListener('keydown', (event) => {\r\n      this.addPressedKey(event.code);\r\n      if (event.key === 'Shift') {\r\n        this.keysByShift();\r\n      }\r\n      event.preventDefault();\r\n    });\r\n    this.body.addEventListener('keyup', (event) => {\r\n      if (event.key === 'Shift') {\r\n        this.keysWithoutShift();\r\n      }\r\n      if ((event.key === 'Shift' && event.ctrlKey)) {\r\n        this.changeLanguage();\r\n      }\r\n      this.removePressedKey(event.code);\r\n      this.inputText(this.keys.find((e) => e.keyCode === event.code)[`char${this.language}${this.shift}`]);\r\n      event.preventDefault();\r\n    });\r\n  }\r\n\r\n  mouseActions() {\r\n    this.keysWrapper.addEventListener('mousedown', (event) => {\r\n      event.target.addEventListener('mouseout', (e) => {\r\n        this.removePressedKey(e.target.dataset.keycode);\r\n      });\r\n      if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {\r\n        this.keysByShift();\r\n      }\r\n      this.addPressedKey(event.target.dataset.keycode);\r\n      if (event.target.classList.contains('keyboard__btn')) {\r\n        this.inputText(event.target.textContent);\r\n      }\r\n      event.preventDefault();\r\n    });\r\n    this.keysWrapper.addEventListener('mouseup', (event) => {\r\n      if (event.target.classList.contains('keyboard__btn')) {\r\n        if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {\r\n          this.keysWithoutShift();\r\n        }\r\n        this.removePressedKey(event.target.dataset.keycode);\r\n      }\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/ClassKeyboard.js?");

/***/ }),

/***/ "./src/js/Keys.js":
/*!************************!*\
  !*** ./src/js/Keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst KeysData = [\n  {\n    keyCode: 'Backquote',\n    charEn: '`',\n    charEnShift: '~',\n    charBlr: 'ё',\n    charBlrShift: 'Ё',\n  },\n  {\n    keyCode: 'Digit1',\n    charEn: '1',\n    charEnShift: '!',\n    charBlr: '1',\n    charBlrShift: '!',\n  },\n  {\n    keyCode: 'Digit2',\n    charEn: '2',\n    charEnShift: '@',\n    charBlr: '2',\n    charBlrShift: '\\\\',\n  },\n  {\n    keyCode: 'Digit3',\n    charEn: '3',\n    charEnShift: '#',\n    charBlr: '3',\n    charBlrShift: '№',\n  },\n  {\n    keyCode: 'Digit4',\n    charEn: '4',\n    charEnShift: '$',\n    charBlr: '4',\n    charBlrShift: ';',\n  },\n  {\n    keyCode: 'Digit5',\n    charEn: '5',\n    charEnShift: '%',\n    charBlr: '5',\n    charBlrShift: '%',\n  },\n  {\n    keyCode: 'Digit6',\n    charEn: '6',\n    charEnShift: '^',\n    charBlr: '6',\n    charBlrShift: ':',\n  },\n  {\n    keyCode: 'Digit7',\n    charEn: '7',\n    charEnShift: '&',\n    charBlr: '7',\n    charBlrShift: '?',\n  },\n  {\n    keyCode: 'Digit8',\n    charEn: '8',\n    charEnShift: '*',\n    charBlr: '8',\n    charBlrShift: '*',\n  },\n  {\n    keyCode: 'Digit9',\n    charEn: '9',\n    charEnShift: '(',\n    charBlr: '9',\n    charBlrShift: '(',\n  },\n  {\n    keyCode: 'Digit0',\n    charEn: '0',\n    charEnShift: ')',\n    charBlr: '0',\n    charBlrShift: ')',\n  },\n  {\n    keyCode: 'Minus',\n    charEn: '-',\n    charEnShift: '_',\n    charBlr: '-',\n    charBlrShift: '_',\n  },\n  {\n    keyCode: 'Equal',\n    charEn: '=',\n    charEnShift: '+',\n    charBlr: '=',\n    charBlrShift: '+',\n  },\n  {\n    keyCode: 'Backspace',\n    charEn: 'Backspace',\n    charEnShift: 'Backspace',\n    charBlr: 'Backspace',\n    charBlrShift: 'Backspace',\n  },\n  {\n    keyCode: 'Tab',\n    charEn: 'Tab',\n    charEnShift: 'Tab',\n    charBlr: 'Tab',\n    charBlrShift: 'Tab',\n  },\n  {\n    keyCode: 'KeyQ',\n    charEn: 'q',\n    charEnShift: 'Q',\n    charBlr: 'й',\n    charBlrShift: 'Й',\n  },\n  {\n    keyCode: 'KeyW',\n    charEn: 'w',\n    charEnShift: 'W',\n    charBlr: 'ц',\n    charBlrShift: 'Ц',\n  },\n  {\n    keyCode: 'KeyE',\n    charEn: 'e',\n    charEnShift: 'E',\n    charBlr: 'у',\n    charBlrShift: 'У',\n  },\n  {\n    keyCode: 'KeyR',\n    charEn: 'r',\n    charEnShift: 'R',\n    charBlr: 'к',\n    charBlrShift: 'К',\n  },\n  {\n    keyCode: 'KeyT',\n    charEn: 't',\n    charEnShift: 'T',\n    charBlr: 'е',\n    charBlrShift: 'Е',\n  },\n  {\n    keyCode: 'KeyY',\n    charEn: 'y',\n    charEnShift: 'Y',\n    charBlr: 'н',\n    charBlrShift: 'Н',\n  },\n  {\n    keyCode: 'KeyU',\n    charEn: 'u',\n    charEnShift: 'U',\n    charBlr: 'г',\n    charBlrShift: 'Г',\n  },\n  {\n    keyCode: 'KeyI',\n    charEn: 'i',\n    charEnShift: 'I',\n    charBlr: 'ш',\n    charBlrShift: 'Ш',\n  },\n  {\n    keyCode: 'KeyO',\n    charEn: 'o',\n    charEnShift: 'O',\n    charBlr: 'ў',\n    charBlrShift: 'Ў',\n  },\n  {\n    keyCode: 'KeyP',\n    charEn: 'p',\n    charEnShift: 'P',\n    charBlr: 'з',\n    charBlrShift: 'З',\n  },\n  {\n    keyCode: 'BracketLeft',\n    charEn: '[',\n    charEnShift: '{',\n    charBlr: 'х',\n    charBlrShift: 'Х',\n  },\n  {\n    keyCode: 'BracketRight',\n    charEn: ']',\n    charEnShift: '}',\n    charBlr: \"'\",\n    charBlrShift: \"'\",\n  },\n  {\n    keyCode: 'Backslash',\n    charEn: '\\\\',\n    charEnShift: '|',\n    charBlr: '\\\\',\n    charBlrShift: '/',\n  },\n  {\n    keyCode: 'CapsLock',\n    charEn: 'CapsLock',\n    charEnShift: 'CapsLock',\n    charBlr: 'CapsLock',\n    charBlrShift: 'CapsLock',\n  },\n  {\n    keyCode: 'KeyA',\n    charEn: 'a',\n    charEnShift: 'A',\n    charBlr: 'ф',\n    charBlrShift: 'Ф',\n  },\n  {\n    keyCode: 'KeyS',\n    charEn: 's',\n    charEnShift: 'S',\n    charBlr: 'ы',\n    charBlrShift: 'Ы',\n  },\n  {\n    keyCode: 'KeyD',\n    charEn: 'd',\n    charEnShift: 'D',\n    charBlr: 'в',\n    charBlrShift: 'В',\n  },\n  {\n    keyCode: 'KeyF',\n    charEn: 'f',\n    charEnShift: 'F',\n    charBlr: 'а',\n    charBlrShift: 'А',\n  },\n  {\n    keyCode: 'KeyG',\n    charEn: 'g',\n    charEnShift: 'G',\n    charBlr: 'п',\n    charBlrShift: 'П',\n  },\n  {\n    keyCode: 'KeyH',\n    charEn: 'h',\n    charEnShift: 'H',\n    charBlr: 'р',\n    charBlrShift: 'Р',\n  },\n  {\n    keyCode: 'KeyJ',\n    charEn: 'j',\n    charEnShift: 'J',\n    charBlr: 'о',\n    charBlrShift: 'О',\n  },\n  {\n    keyCode: 'KeyK',\n    charEn: 'k',\n    charEnShift: 'K',\n    charBlr: 'л',\n    charBlrShift: 'Л',\n  },\n  {\n    keyCode: 'KeyL',\n    charEn: 'l',\n    charEnShift: 'L',\n    charBlr: 'д',\n    charBlrShift: 'Д',\n  },\n  {\n    keyCode: 'Semicolon',\n    charEn: ';',\n    charEnShift: ':',\n    charBlr: 'ж',\n    charBlrShift: 'Ж',\n  },\n  {\n    keyCode: 'Quote',\n    charEn: \"'\",\n    charEnShift: '\\\\',\n    charBlr: 'э',\n    charBlrShift: 'Э',\n  },\n  {\n    keyCode: 'Enter',\n    charEn: 'Enter',\n    charEnShift: 'Enter',\n    charBlr: 'Enter',\n    charBlrShift: 'Enter',\n  },\n  {\n    keyCode: 'ShiftLeft',\n    charEn: 'Shift',\n    charEnShift: 'Shift',\n    charBlr: 'Shift',\n    charBlrShift: 'Shift',\n  },\n  {\n    keyCode: 'KeyZ',\n    charEn: 'z',\n    charEnShift: 'Z',\n    charBlr: 'я',\n    charBlrShift: 'Я',\n  },\n  {\n    keyCode: 'KeyX',\n    charEn: 'x',\n    charEnShift: 'X',\n    charBlr: 'ч',\n    charBlrShift: 'Ч',\n  },\n  {\n    keyCode: 'KeyC',\n    charEn: 'c',\n    charEnShift: 'C',\n    charBlr: 'с',\n    charBlrShift: 'С',\n  },\n  {\n    keyCode: 'KeyV',\n    charEn: 'v',\n    charEnShift: 'V',\n    charBlr: 'м',\n    charBlrShift: 'М',\n  },\n  {\n    keyCode: 'KeyB',\n    charEn: 'b',\n    charEnShift: 'B',\n    charBlr: 'і',\n    charBlrShift: 'І',\n  },\n  {\n    keyCode: 'KeyN',\n    charEn: 'n',\n    charEnShift: 'N',\n    charBlr: 'т',\n    charBlrShift: 'Т',\n  },\n  {\n    keyCode: 'KeyM',\n    charEn: 'm',\n    charEnShift: 'M',\n    charBlr: 'ь',\n    charBlrShift: 'Ь',\n  },\n  {\n    keyCode: 'Comma',\n    charEn: ',',\n    charEnShift: '<',\n    charBlr: 'б',\n    charBlrShift: 'Б',\n  },\n  {\n    keyCode: 'Period',\n    charEn: '.',\n    charEnShift: '>',\n    charBlr: 'ю',\n    charBlrShift: 'Ю',\n  },\n  {\n    keyCode: 'Slash',\n    charEn: '/',\n    charEnShift: '?',\n    charBlr: '.',\n    charBlrShift: ',',\n  },\n  {\n    keyCode: 'ArrowUp',\n    charEn: '↑',\n    charEnShift: '↑',\n    charBlr: '↑',\n    charBlrShift: '↑',\n  },\n  {\n    keyCode: 'ShiftRight',\n    charEn: 'Shift',\n    charEnShift: 'Shift',\n    charBlr: 'Shift',\n    charBlrShift: 'Shift',\n  },\n  {\n    keyCode: 'ControlLeft',\n    charEn: 'Ctrl',\n    charEnShift: 'Ctrl',\n    charBlr: 'Ctrl',\n    charBlrShift: 'Ctrl',\n  },\n  {\n    keyCode: 'MetaLeft',\n    charEn: '',\n    charEnShift: '',\n    charBlr: '',\n    charBlrShift: '',\n  },\n  {\n    keyCode: 'AltLeft',\n    charEn: 'Alt',\n    charEnShift: 'Alt',\n    charBlr: 'Alt',\n    charBlrShift: 'Alt',\n  },\n  {\n    keyCode: 'Space',\n    charEn: ' ',\n    charEnShift: ' ',\n    charBlr: ' ',\n    charBlrShift: ' ',\n  },\n  {\n    keyCode: 'AltRight',\n    charEn: 'Alt',\n    charEnShift: 'Alt',\n    charBlr: 'Alt',\n    charBlrShift: 'Alt',\n  },\n  {\n    keyCode: 'ControlRight',\n    charEn: 'Ctrl',\n    charEnShift: 'Ctrl',\n    charBlr: 'Ctrl',\n    charBlrShift: 'Ctrl',\n  },\n  {\n    keyCode: 'ArrowLeft',\n    charEn: '←',\n    charEnShift: '←',\n    charBlr: '←',\n    charBlrShift: '←',\n  },\n  {\n    keyCode: 'ArrowDown',\n    charEn: '↓',\n    charEnShift: '↓',\n    charBlr: '↓',\n    charBlrShift: '↓',\n  },\n  {\n    keyCode: 'ArrowRight',\n    charEn: '→',\n    charEnShift: '→',\n    charBlr: '→',\n    charBlrShift: '→',\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeysData);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/Keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;