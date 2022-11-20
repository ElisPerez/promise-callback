import './css/style.css';
import { promiseSlow, promiseMedia, promiseFast } from './js/promises';

// promiseSlow.then(console.log); // It’s the same: promiseSlow.then(message => console.log(message));
// promiseMedia.then(console.log);
// promiseFast.then(console.log);

/* Promise.race */
Promise.race([promiseSlow, promiseMedia, promiseFast])
  .then(
    // message => console.log(message)
    console.log
  )
  .catch(console.warm);

// Al ser la promiseFast la que se resuelve primero, ignora por completo las otras 2, así las otras se resuelvan o sean rechazadas.
