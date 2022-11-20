import './css/style.css';
import { searchHero, searchHeroAsync } from './js/promises';

searchHero('cap')
  .then(hero => console.log(hero))
  .catch(console.warn);

searchHeroAsync('iron2')
  .then(hero => console.log(hero))
  .catch(console.warn) // Lanza Error porque iron2 no existe en la db.
