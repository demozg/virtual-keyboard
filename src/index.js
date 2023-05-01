import { KeysData } from './js/Keys.js';
import { Keyboard } from './js/CreateKeyboard.js';

const virtualKeyboard = new Keyboard(KeysData);
virtualKeyboard.createKeyboard();
virtualKeyboard.keyboardActions();
virtualKeyboard.mouseActions();