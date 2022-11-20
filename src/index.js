import './css/style.css';
import { getArrayHeroes, getHeroAwait } from './js/await-handleError';

console.time('await'); // El nombre 'await' en el time es la variable

getHeroAwait('cap2')
  .then(hero => {
    console.log('HERO:', hero);
    console.timeEnd('await'); // en el timeEnd el argumento es la misma que en el time
  })
  .catch(console.warn);
