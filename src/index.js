import { KeysData } from './js/keys.js';
import { Keyboard } from './js/CreateKeyboard.js';

const virtualKeyboard = new Keyboard(KeysData);
virtualKeyboard.createKeyboard();