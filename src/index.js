import './css/style.css';
import { getArrayHeroes } from './js/await';

console.time('await');

getArrayHeroes().then((heroes) => {

  console.table(heroes)
  console.timeEnd('await');
}
);
