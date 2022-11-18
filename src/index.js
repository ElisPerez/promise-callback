import './css/style.css';
import { searchHero } from './js/callbacks';

const hero1 = 'cap';

searchHero(hero1, (error, hero) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Callback llamado, Hero:', hero);
  }
});

console.log('End of the program');
