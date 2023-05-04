class Keyboard {
  constructor(keys) {
    this.keys = keys;
    this.keysWrapper = [];
    this.keyboardButtons = [];
    this.body = [];
    this.textArea = [];
    this.language = 'En';
    this.shift = '';
    this.getLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('keyboardLanguage', this.language);
  }

  getLocalStorage() {
    if (localStorage.getItem('keyboardLanguage') !== 'undefined') {
      this.language = localStorage.getItem('keyboardLanguage') || 'En';
    }
  }

  createKeyboard() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="container"></div>');
    this.keyboard = document.querySelector('.container');
    this.keyboard.insertAdjacentHTML('beforeend', '<h1 class="keyboard__title">Virtual Keyboard</h1>');
    this.keyboard.insertAdjacentHTML('beforeend', '<textarea class="keyboard__textarea" autofocus="true" rows="7"></textarea>');
    this.textArea = document.querySelector('.keyboard__textarea');
    this.keyboard.insertAdjacentHTML('beforeend', '<div class="keyboard__wrapper"></div>');
    this.keyboard.insertAdjacentHTML('beforeend', '<p class="keyboard__text">Create for OS Windows</p>');
    this.keyboard.insertAdjacentHTML('beforeend', '<p class="keyboard__text">Press Ctrl + Shift for change language</p>');
    this.keysWrapper = document.querySelector('.keyboard__wrapper');
    this.keys.forEach((key) => {
      if (key.keyCode === 'Backquote' || key.keyCode === 'Tab' || key.keyCode === 'CapsLock' || key.keyCode === 'ShiftLeft' || key.keyCode === 'ControlLeft') {
        this.keysWrapper.insertAdjacentHTML('beforeend', '<div class="keyboard__row"></div>');
        this.keyboardRow = document.querySelector('.keyboard__row:last-child');
      }
      this.keyboardRow.insertAdjacentHTML('beforeend', `<div class="keyboard__btn" data-keyCode="${key.keyCode}">${key[`char${this.language}`]}</div>`);
    });
    this.keyboardButtons = document.querySelectorAll('.keyboard__btn');
  }

  keysByShift() {
    this.shift = 'Shift';
    this.changeKeyboardKeys();
  }

  keysWithoutShift() {
    this.shift = '';
    this.changeKeyboardKeys();
  }

  changeLanguage() {
    if (this.language === 'En') {
      this.language = 'Blr';
    } else {
      this.language = 'En';
    }
    this.changeKeyboardKeys();
    this.setLocalStorage();
  }

  changeKeyboardKeys() {
    this.keyboardButtons.forEach((button) => {
      // eslint-disable-next-line no-param-reassign
      button.innerText = this.keys.find((event) => event.keyCode === button.dataset.keycode)[`char${this.language}${this.shift}`];
    });
  }

  addPressedKey(code) {
    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);
    if (pressedKey) {
      pressedKey.classList.add('active');
    }
  }

  removePressedKey(code) {
    const pressedKey = [...this.keyboardButtons].find((item) => item.dataset.keycode === code);
    if (pressedKey) {
      pressedKey.classList.remove('active');
    }
  }

  inputText(keyCode) {
    const selection = this.textArea.selectionStart;
    const symbols = this.textArea.value;
    this.textArea.focus();
    let blank;
    switch (keyCode) {
      case 'Backspace':
        this.addBackspace();
        return;
      case 'Enter':
        blank = '\n';
        break;
      case 'Tab':
        blank = '\t';
        break;
      case 'CapsLock':
        blank = '';
        this.addCapsLock();
        break;
      case 'Shift':
        blank = '';
        break;
      case 'Ctrl':
        blank = '';
        break;
      case 'MetaLeft':
        blank = '';
        break;
      case 'Alt':
        blank = '';
        break;
      default:
        blank = keyCode;
    }
    this.textArea.value = symbols.slice(0, selection) + blank + symbols.slice(selection);
    this.textArea.selectionStart = selection + 1;
    this.textArea.selectionEnd = selection + 1;
  }

  addCapsLock() {
    if (this.shift === '') {
      this.shift = 'Shift';
      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.add('active');
    } else {
      this.shift = '';
      document.querySelector('.keyboard__btn[data-keycode=CapsLock]').classList.remove('active');
    }
    this.changeKeyboardKeys();
  }

  addBackspace() {
    const selection = this.textArea.selectionStart;
    if (selection === 0) {
      return;
    }
    const symbols = this.textArea.value;
    this.textArea.value = symbols.slice(0, selection - 1) + symbols.slice(selection);
    this.textArea.selectionStart = selection - 1;
    this.textArea.selectionEnd = selection - 1;
  }

  keyboardActions() {
    this.body = document.querySelector('body');
    this.body.addEventListener('keydown', (event) => {
      this.addPressedKey(event.code);
      if (event.key === 'Shift') {
        this.keysByShift();
      }
      event.preventDefault();
    });
    this.body.addEventListener('keyup', (event) => {
      if (event.key === 'Shift') {
        this.keysWithoutShift();
      }
      if ((event.key === 'Shift' && event.ctrlKey)) {
        this.changeLanguage();
      }
      this.removePressedKey(event.code);
      this.inputText(this.keys.find((e) => e.keyCode === event.code)[`char${this.language}${this.shift}`]);
      event.preventDefault();
    });
  }

  mouseActions() {
    this.keysWrapper.addEventListener('mousedown', (event) => {
      event.target.addEventListener('mouseout', (e) => {
        this.removePressedKey(e.target.dataset.keycode);
      });
      if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {
        this.keysByShift();
      }
      this.addPressedKey(event.target.dataset.keycode);
      if (event.target.classList.contains('keyboard__btn')) {
        this.inputText(event.target.textContent);
      }
      event.preventDefault();
    });
    this.keysWrapper.addEventListener('mouseup', (event) => {
      if (event.target.classList.contains('keyboard__btn')) {
        if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {
          this.keysWithoutShift();
        }
        this.removePressedKey(event.target.dataset.keycode);
      }
    });
  }
}
export default Keyboard;
