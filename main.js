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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Keys.js */ \"./src/js/Keys.js\");\n/* harmony import */ var _js_ClassKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ClassKeyboard.js */ \"./src/js/ClassKeyboard.js\");\n\r\n\r\n\r\nconst virtualKeyboard = new _js_ClassKeyboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_js_Keys_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nvirtualKeyboard.createKeyboard();\r\nvirtualKeyboard.keyboardActions();\r\nvirtualKeyboard.mouseActions();\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/ClassKeyboard.js":
/*!*********************************!*\
  !*** ./src/js/ClassKeyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Keyboard {\r\n  constructor(keys) {\r\n    this.keys = keys;\r\n    this.keysWrapper = [];\r\n    this.keyboardButtons = [];\r\n    this.body = [];\r\n    this.textArea = [];\r\n    this.language = 'En';\r\n    this.shift = '';\r\n    this.getLocalStorage();\r\n  }\r\n\r\n  setLocalStorage() {\r\n    localStorage.setItem('keyboardLanguage', this.language);\r\n  }\r\n\r\n  getLocalStorage() {\r\n    if (localStorage.getItem('keyboardLanguage') !== 'undefined') {\r\n      this.language = localStorage.getItem('keyboardLanguage') || 'En';\r\n    }\r\n  }\r\n\r\n  createKeyboard() {\r\n    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class=\"container\"></div>');\r\n    this.keyboard = document.querySelector('.container');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<h1 class=\"keyboard__title\">Virtual Keyboard</h1>');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<textarea class=\"keyboard__textarea\" autofocus=\"true\" rows=\"7\"></textarea>');\r\n    this.textArea = document.querySelector('.keyboard__textarea');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<div class=\"keyboard__wrapper\"></div>');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<p class=\"keyboard__text\">Create for OS Windows</p>');\r\n    this.keyboard.insertAdjacentHTML('beforeend', '<p class=\"keyboard__text\">Press Ctrl + Shift for change language</p>');\r\n    this.keysWrapper = document.querySelector('.keyboard__wrapper');\r\n    this.keys.forEach((key) => {\r\n      if (key.keyCode === 'Backquote' || key.keyCode === 'Tab' || key.keyCode === 'CapsLock' || key.keyCode === 'ShiftLeft' || key.keyCode === 'ControlLeft') {\r\n        this.keysWrapper.insertAdjacentHTML('beforeend', '<div class=\"keyboard__row\"></div>');\r\n        this.keyboardRow = document.querySelector('.keyboard__row:last-child');\r\n      }\r\n      this.keyboardRow.insertAdjacentHTML('beforeend', `<div class=\"keyboard__btn\" data-keyCode=\"${key.keyCode}\">${key[`char${this.language}`]}</div>`);\r\n    });\r\n    this.keyboardButtons = document.querySelectorAll('.keyboard__btn');\r\n  }\r\n\r\n  keysByShift() {\r\n    this.shift = 'Shift';\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  keysWithoutShift() {\r\n    this.shift = '';\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  changeLanguage() {\r\n    if (this.language === 'En') {\r\n      this.language = 'Blr';\r\n    } else {\r\n      this.language = 'En';\r\n    }\r\n    this.changeKeyboardKeys();\r\n    this.setLocalStorage();\r\n  }\r\n\r\n  changeKeyboardKeys() {\r\n    this.keyboardButtons.forEach((button) => {\r\n      // eslint-disable-next-line no-param-reassign\r\n      button.innerText = this.keys.find((event) => event.keyCode === button.dataset.keycode)[`char${this.language}${this.shift}`];\r\n    });\r\n  }\r\n\r\n  addPressedKey(code) {\r\n    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);\r\n    if (pressedKey) {\r\n      pressedKey.classList.add('active');\r\n    }\r\n  }\r\n\r\n  removePressedKey(code) {\r\n    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);\r\n    if (pressedKey) {\r\n      pressedKey.classList.remove('active');\r\n    }\r\n  }\r\n\r\n  inputText(keyCode) {\r\n    const selection = this.textArea.selectionStart;\r\n    const symbols = this.textArea.value;\r\n    this.textArea.focus();\r\n    let blank;\r\n    switch (keyCode) {\r\n      case 'Backspace':\r\n        this.addBackspace();\r\n        return;\r\n      case 'Enter':\r\n        blank = '\\n';\r\n        break;\r\n      case 'Tab':\r\n        blank = '\\t';\r\n        break;\r\n      case 'CapsLock':\r\n        blank = '';\r\n        this.addCapsLock();\r\n        break;\r\n      case 'Shift':\r\n        blank = '';\r\n        break;\r\n      case 'Ctrl':\r\n        blank = '';\r\n        break;\r\n      case 'MetaLeft':\r\n        blank = '';\r\n        break;\r\n      case 'Alt':\r\n        blank = '';\r\n        break;\r\n      default:\r\n        blank = keyCode;\r\n    }\r\n    this.textArea.value = symbols.slice(0, selection) + blank + symbols.slice(selection);\r\n    this.textArea.selectionStart = selection + 1;\r\n    this.textArea.selectionEnd = selection + 1;\r\n  }\r\n\r\n  addCapsLock() {\r\n    if (this.shift === '') {\r\n      this.shift = 'Shift';\r\n      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.add('active');\r\n    } else {\r\n      this.shift = '';\r\n      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.remove('active');\r\n    }\r\n    this.changeKeyboardKeys();\r\n  }\r\n\r\n  addBackspace() {\r\n    const selection = this.textArea.selectionStart;\r\n    if (selection === 0) {\r\n      return;\r\n    }\r\n    const symbols = this.textArea.value;\r\n    this.textArea.value = symbols.slice(0, selection - 1) + symbols.slice(selection);\r\n    this.textArea.selectionStart = selection - 1;\r\n    this.textArea.selectionEnd = selection - 1;\r\n  }\r\n\r\n  keyboardActions() {\r\n    this.body = document.querySelector('body');\r\n    this.body.addEventListener('keydown', (event) => {\r\n      this.addPressedKey(event.code);\r\n      if (event.key === 'Shift') {\r\n        this.keysByShift();\r\n      }\r\n      event.preventDefault();\r\n    });\r\n    this.body.addEventListener('keyup', (event) => {\r\n      if (event.key === 'Shift') {\r\n        this.keysWithoutShift();\r\n      }\r\n      if ((event.key === 'Shift' && event.ctrlKey)) {\r\n        this.changeLanguage();\r\n      }\r\n      this.removePressedKey(event.code);\r\n      this.inputText(this.keys.find((e) => e.keyCode === event.code)[`char${this.language}${this.shift}`]);\r\n      event.preventDefault();\r\n    });\r\n  }\r\n\r\n  mouseActions() {\r\n    this.keysWrapper.addEventListener('mousedown', (event) => {\r\n      event.target.addEventListener('mouseout', (e) => {\r\n        this.removePressedKey(e.target.dataset.keycode);\r\n      });\r\n      if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {\r\n        this.keysByShift();\r\n      }\r\n      this.addPressedKey(event.target.dataset.keycode);\r\n      if (event.target.classList.contains('keyboard__btn')) {\r\n        this.inputText(event.target.textContent);\r\n      }\r\n      event.preventDefault();\r\n    });\r\n    this.keysWrapper.addEventListener('mouseup', (event) => {\r\n      if (event.target.classList.contains('keyboard__btn')) {\r\n        if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {\r\n          this.keysWithoutShift();\r\n        }\r\n        this.removePressedKey(event.target.dataset.keycode);\r\n      }\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/ClassKeyboard.js?");

/***/ }),

/***/ "./src/js/Keys.js":
/*!************************!*\
  !*** ./src/js/Keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst KeysData = [\r\n  {\r\n    keyCode: 'Backquote',\r\n    charEn: '`',\r\n    charEnShift: '~',\r\n    charBlr: 'ё',\r\n    charBlrShift: 'Ё',\r\n  },\r\n  {\r\n    keyCode: 'Digit1',\r\n    charEn: '1',\r\n    charEnShift: '!',\r\n    charBlr: '1',\r\n    charBlrShift: '!',\r\n  },\r\n  {\r\n    keyCode: 'Digit2',\r\n    charEn: '2',\r\n    charEnShift: '@',\r\n    charBlr: '2',\r\n    charBlrShift: '\\\\',\r\n  },\r\n  {\r\n    keyCode: 'Digit3',\r\n    charEn: '3',\r\n    charEnShift: '#',\r\n    charBlr: '3',\r\n    charBlrShift: '№',\r\n  },\r\n  {\r\n    keyCode: 'Digit4',\r\n    charEn: '4',\r\n    charEnShift: '$',\r\n    charBlr: '4',\r\n    charBlrShift: ';',\r\n  },\r\n  {\r\n    keyCode: 'Digit5',\r\n    charEn: '5',\r\n    charEnShift: '%',\r\n    charBlr: '5',\r\n    charBlrShift: '%',\r\n  },\r\n  {\r\n    keyCode: 'Digit6',\r\n    charEn: '6',\r\n    charEnShift: '^',\r\n    charBlr: '6',\r\n    charBlrShift: ':',\r\n  },\r\n  {\r\n    keyCode: 'Digit7',\r\n    charEn: '7',\r\n    charEnShift: '&',\r\n    charBlr: '7',\r\n    charBlrShift: '?',\r\n  },\r\n  {\r\n    keyCode: 'Digit8',\r\n    charEn: '8',\r\n    charEnShift: '*',\r\n    charBlr: '8',\r\n    charBlrShift: '*',\r\n  },\r\n  {\r\n    keyCode: 'Digit9',\r\n    charEn: '9',\r\n    charEnShift: '(',\r\n    charBlr: '9',\r\n    charBlrShift: '(',\r\n  },\r\n  {\r\n    keyCode: 'Digit0',\r\n    charEn: '0',\r\n    charEnShift: ')',\r\n    charBlr: '0',\r\n    charBlrShift: ')',\r\n  },\r\n  {\r\n    keyCode: 'Minus',\r\n    charEn: '-',\r\n    charEnShift: '_',\r\n    charBlr: '-',\r\n    charBlrShift: '_',\r\n  },\r\n  {\r\n    keyCode: 'Equal',\r\n    charEn: '=',\r\n    charEnShift: '+',\r\n    charBlr: '=',\r\n    charBlrShift: '+',\r\n  },\r\n  {\r\n    keyCode: 'Backspace',\r\n    charEn: 'Backspace',\r\n    charEnShift: 'Backspace',\r\n    charBlr: 'Backspace',\r\n    charBlrShift: 'Backspace',\r\n  },\r\n  {\r\n    keyCode: 'Tab',\r\n    charEn: 'Tab',\r\n    charEnShift: 'Tab',\r\n    charBlr: 'Tab',\r\n    charBlrShift: 'Tab',\r\n  },\r\n  {\r\n    keyCode: 'KeyQ',\r\n    charEn: 'q',\r\n    charEnShift: 'Q',\r\n    charBlr: 'й',\r\n    charBlrShift: 'Й',\r\n  },\r\n  {\r\n    keyCode: 'KeyW',\r\n    charEn: 'w',\r\n    charEnShift: 'W',\r\n    charBlr: 'ц',\r\n    charBlrShift: 'Ц',\r\n  },\r\n  {\r\n    keyCode: 'KeyE',\r\n    charEn: 'e',\r\n    charEnShift: 'E',\r\n    charBlr: 'у',\r\n    charBlrShift: 'У',\r\n  },\r\n  {\r\n    keyCode: 'KeyR',\r\n    charEn: 'r',\r\n    charEnShift: 'R',\r\n    charBlr: 'к',\r\n    charBlrShift: 'К',\r\n  },\r\n  {\r\n    keyCode: 'KeyT',\r\n    charEn: 't',\r\n    charEnShift: 'T',\r\n    charBlr: 'е',\r\n    charBlrShift: 'Е',\r\n  },\r\n  {\r\n    keyCode: 'KeyY',\r\n    charEn: 'y',\r\n    charEnShift: 'Y',\r\n    charBlr: 'н',\r\n    charBlrShift: 'Н',\r\n  },\r\n  {\r\n    keyCode: 'KeyU',\r\n    charEn: 'u',\r\n    charEnShift: 'U',\r\n    charBlr: 'г',\r\n    charBlrShift: 'Г',\r\n  },\r\n  {\r\n    keyCode: 'KeyI',\r\n    charEn: 'i',\r\n    charEnShift: 'I',\r\n    charBlr: 'ш',\r\n    charBlrShift: 'Ш',\r\n  },\r\n  {\r\n    keyCode: 'KeyO',\r\n    charEn: 'o',\r\n    charEnShift: 'O',\r\n    charBlr: 'ў',\r\n    charBlrShift: 'Ў',\r\n  },\r\n  {\r\n    keyCode: 'KeyP',\r\n    charEn: 'p',\r\n    charEnShift: 'P',\r\n    charBlr: 'з',\r\n    charBlrShift: 'З',\r\n  },\r\n  {\r\n    keyCode: 'BracketLeft',\r\n    charEn: '[',\r\n    charEnShift: '{',\r\n    charBlr: 'х',\r\n    charBlrShift: 'Х',\r\n  },\r\n  {\r\n    keyCode: 'BracketRight',\r\n    charEn: ']',\r\n    charEnShift: '}',\r\n    charBlr: \"'\",\r\n    charBlrShift: \"'\",\r\n  },\r\n  {\r\n    keyCode: 'Backslash',\r\n    charEn: '\\\\',\r\n    charEnShift: '|',\r\n    charBlr: '\\\\',\r\n    charBlrShift: '/',\r\n  },\r\n  {\r\n    keyCode: 'CapsLock',\r\n    charEn: 'CapsLock',\r\n    charEnShift: 'CapsLock',\r\n    charBlr: 'CapsLock',\r\n    charBlrShift: 'CapsLock',\r\n  },\r\n  {\r\n    keyCode: 'KeyA',\r\n    charEn: 'a',\r\n    charEnShift: 'A',\r\n    charBlr: 'ф',\r\n    charBlrShift: 'Ф',\r\n  },\r\n  {\r\n    keyCode: 'KeyS',\r\n    charEn: 's',\r\n    charEnShift: 'S',\r\n    charBlr: 'ы',\r\n    charBlrShift: 'Ы',\r\n  },\r\n  {\r\n    keyCode: 'KeyD',\r\n    charEn: 'd',\r\n    charEnShift: 'D',\r\n    charBlr: 'в',\r\n    charBlrShift: 'В',\r\n  },\r\n  {\r\n    keyCode: 'KeyF',\r\n    charEn: 'f',\r\n    charEnShift: 'F',\r\n    charBlr: 'а',\r\n    charBlrShift: 'А',\r\n  },\r\n  {\r\n    keyCode: 'KeyG',\r\n    charEn: 'g',\r\n    charEnShift: 'G',\r\n    charBlr: 'п',\r\n    charBlrShift: 'П',\r\n  },\r\n  {\r\n    keyCode: 'KeyH',\r\n    charEn: 'h',\r\n    charEnShift: 'H',\r\n    charBlr: 'р',\r\n    charBlrShift: 'Р',\r\n  },\r\n  {\r\n    keyCode: 'KeyJ',\r\n    charEn: 'j',\r\n    charEnShift: 'J',\r\n    charBlr: 'о',\r\n    charBlrShift: 'О',\r\n  },\r\n  {\r\n    keyCode: 'KeyK',\r\n    charEn: 'k',\r\n    charEnShift: 'K',\r\n    charBlr: 'л',\r\n    charBlrShift: 'Л',\r\n  },\r\n  {\r\n    keyCode: 'KeyL',\r\n    charEn: 'l',\r\n    charEnShift: 'L',\r\n    charBlr: 'д',\r\n    charBlrShift: 'Д',\r\n  },\r\n  {\r\n    keyCode: 'Semicolon',\r\n    charEn: ';',\r\n    charEnShift: ':',\r\n    charBlr: 'ж',\r\n    charBlrShift: 'Ж',\r\n  },\r\n  {\r\n    keyCode: 'Quote',\r\n    charEn: \"'\",\r\n    charEnShift: '\\\\',\r\n    charBlr: 'э',\r\n    charBlrShift: 'Э',\r\n  },\r\n  {\r\n    keyCode: 'Enter',\r\n    charEn: 'Enter',\r\n    charEnShift: 'Enter',\r\n    charBlr: 'Enter',\r\n    charBlrShift: 'Enter',\r\n  },\r\n  {\r\n    keyCode: 'ShiftLeft',\r\n    charEn: 'Shift',\r\n    charEnShift: 'Shift',\r\n    charBlr: 'Shift',\r\n    charBlrShift: 'Shift',\r\n  },\r\n  {\r\n    keyCode: 'KeyZ',\r\n    charEn: 'z',\r\n    charEnShift: 'Z',\r\n    charBlr: 'я',\r\n    charBlrShift: 'Я',\r\n  },\r\n  {\r\n    keyCode: 'KeyX',\r\n    charEn: 'x',\r\n    charEnShift: 'X',\r\n    charBlr: 'ч',\r\n    charBlrShift: 'Ч',\r\n  },\r\n  {\r\n    keyCode: 'KeyC',\r\n    charEn: 'c',\r\n    charEnShift: 'C',\r\n    charBlr: 'с',\r\n    charBlrShift: 'С',\r\n  },\r\n  {\r\n    keyCode: 'KeyV',\r\n    charEn: 'v',\r\n    charEnShift: 'V',\r\n    charBlr: 'м',\r\n    charBlrShift: 'М',\r\n  },\r\n  {\r\n    keyCode: 'KeyB',\r\n    charEn: 'b',\r\n    charEnShift: 'B',\r\n    charBlr: 'і',\r\n    charBlrShift: 'І',\r\n  },\r\n  {\r\n    keyCode: 'KeyN',\r\n    charEn: 'n',\r\n    charEnShift: 'N',\r\n    charBlr: 'т',\r\n    charBlrShift: 'Т',\r\n  },\r\n  {\r\n    keyCode: 'KeyM',\r\n    charEn: 'm',\r\n    charEnShift: 'M',\r\n    charBlr: 'ь',\r\n    charBlrShift: 'Ь',\r\n  },\r\n  {\r\n    keyCode: 'Comma',\r\n    charEn: ',',\r\n    charEnShift: '<',\r\n    charBlr: 'б',\r\n    charBlrShift: 'Б',\r\n  },\r\n  {\r\n    keyCode: 'Period',\r\n    charEn: '.',\r\n    charEnShift: '>',\r\n    charBlr: 'ю',\r\n    charBlrShift: 'Ю',\r\n  },\r\n  {\r\n    keyCode: 'Slash',\r\n    charEn: '/',\r\n    charEnShift: '?',\r\n    charBlr: '.',\r\n    charBlrShift: ',',\r\n  },\r\n  {\r\n    keyCode: 'ArrowUp',\r\n    charEn: '↑',\r\n    charEnShift: '↑',\r\n    charBlr: '↑',\r\n    charBlrShift: '↑',\r\n  },\r\n  {\r\n    keyCode: 'ShiftRight',\r\n    charEn: 'Shift',\r\n    charEnShift: 'Shift',\r\n    charBlr: 'Shift',\r\n    charBlrShift: 'Shift',\r\n  },\r\n  {\r\n    keyCode: 'ControlLeft',\r\n    charEn: 'Ctrl',\r\n    charEnShift: 'Ctrl',\r\n    charBlr: 'Ctrl',\r\n    charBlrShift: 'Ctrl',\r\n  },\r\n  {\r\n    keyCode: 'MetaLeft',\r\n    charEn: '',\r\n    charEnShift: '',\r\n    charBlr: '',\r\n    charBlrShift: '',\r\n  },\r\n  {\r\n    keyCode: 'AltLeft',\r\n    charEn: 'Alt',\r\n    charEnShift: 'Alt',\r\n    charBlr: 'Alt',\r\n    charBlrShift: 'Alt',\r\n  },\r\n  {\r\n    keyCode: 'Space',\r\n    charEn: ' ',\r\n    charEnShift: ' ',\r\n    charBlr: ' ',\r\n    charBlrShift: ' ',\r\n  },\r\n  {\r\n    keyCode: 'AltRight',\r\n    charEn: 'Alt',\r\n    charEnShift: 'Alt',\r\n    charBlr: 'Alt',\r\n    charBlrShift: 'Alt',\r\n  },\r\n  {\r\n    keyCode: 'ControlRight',\r\n    charEn: 'Ctrl',\r\n    charEnShift: 'Ctrl',\r\n    charBlr: 'Ctrl',\r\n    charBlrShift: 'Ctrl',\r\n  },\r\n  {\r\n    keyCode: 'ArrowLeft',\r\n    charEn: '←',\r\n    charEnShift: '←',\r\n    charBlr: '←',\r\n    charBlrShift: '←',\r\n  },\r\n  {\r\n    keyCode: 'ArrowDown',\r\n    charEn: '↓',\r\n    charEnShift: '↓',\r\n    charBlr: '↓',\r\n    charBlrShift: '↓',\r\n  },\r\n  {\r\n    keyCode: 'ArrowRight',\r\n    charEn: '→',\r\n    charEnShift: '→',\r\n    charBlr: '→',\r\n    charBlrShift: '→',\r\n  },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeysData);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/Keys.js?");

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