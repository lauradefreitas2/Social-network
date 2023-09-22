// Este es el punto de entrada de tu aplicacion

import login from './lib/login/index.js';
import home from './lib/home/index.js';
import password from './lib/password/index.js';
import register from './lib/register/index.js';

// import { myFunction } from './lib/index.js';

// myFunction();

const main = document.querySelector('#root');
async function hashVerification() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#password':
      main.appendChild(password());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#home':
      main.appendChild(await home());
      break;
    default:
      main.appendChild(login());
      break;
  }
}
const init = () => {
  window.addEventListener('hashchange', async () => {
    await hashVerification();
  });
};

window.addEventListener('load', async () => {
  await hashVerification();
  init();
});
