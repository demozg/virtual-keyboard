export class Keyboard {
    constructor(keys) {
        this.keys = keys;
        this.keysWrapper = [];
        this.keyboardButtons = [];
        this.doc = [];
        this.textArea = [];
        this.textPosition = 0;
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
        this.keyboard.insertAdjacentHTML('beforeend', '<textarea class="keyboard__textarea" autofocus="true" rows="5"></textarea>');
        this.textArea = document.querySelector('.keyboard__textarea');
        this.keyboard.insertAdjacentHTML('beforeend', '<div class="keyboard__wrapper"></div>');
        this.keyboard.insertAdjacentHTML('beforeend', '<div class="keyboard__text">For change language press Ctrl + Shift</div>');
        this.keysWrapper = document.querySelector('.keyboard__wrapper');
        this.keys.forEach(key => {
            if (key.keyCode === 'Backquote' || key.keyCode === 'Tab' || key.keyCode === 'CapsLock' || key.keyCode === 'ShiftLeft' || key.keyCode === 'ControlLeft') {
                this.keysWrapper.insertAdjacentHTML('beforeend', '<div class="keyboard__row"></div>');
                this.keyboardRow = document.querySelector('.keyboard__row:last-child');
            }
            this.keyboardRow.insertAdjacentHTML('beforeend', `<div class="keyboard__btn" data-keyCode="${key.keyCode}">${key[`char${this.language}`]}</div>`);
        });
        this.keyboardButtons = document.querySelectorAll('.keyboard__btn');
    }
}