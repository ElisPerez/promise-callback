import './css/style.css';
import { searchHero } from './js/callbacks';

const hero1 = 'cap';


/* the first argument is a string and the callback
function as the second argument that will be sent to the searchHero function for it to execute. */
searchHero(hero1, (error, hero) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Callback llamado, Hero:', hero);
  }
});

console.log('End of the program');
