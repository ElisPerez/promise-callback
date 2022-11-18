import './css/style.css';
import { searchHero } from './js/callbacks';

const hero1 = 'cap'

searchHero(hero1, (hero) => {
  console.log('Callback llamado', hero);
})

console.log('End of the program');