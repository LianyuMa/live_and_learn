import Greeting from './Greeting.js';
import DateTime from './DateTime.js';

const h1 = document.querySelector('h1');
h1.textContent = new Greeting();

const h2 = document.querySelector('h2');
h2.textContent = new DateTime();
