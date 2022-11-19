import './css/style.css';
import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';

const hero1 = 'cap';


/* CALLBACKS
the first argument is a string and the callback function as the second argument that will be sent to the searchHero function for it to execute. */
// searchHero(hero1, (error, hero) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Callback llamado, Hero:', hero);
//   }
// });

/* PROMISES */
searchHero(hero1).then(hero => {
  console.log(`Enviando a ${hero.name} a la misión`);
})

console.log('End of the program');
