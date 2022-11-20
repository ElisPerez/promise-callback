import './css/style.css';
import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';

const hero1 = 'cap';
const hero2 = 'iron';

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
// searchHero(hero1).then(hero => {
//   console.log(`Enviando a ${hero.name} a la misión`);
// });

/* PROMISES ALL */
//Example 1:
// Promise.all([true, 'hello', 123]).then(array => {
//   console.log('Promise.all:', array);
// })

// Example 2:
// Promise.all([searchHero(hero1), searchHero(hero2)]).then(heroes => {
//   console.log('Heroes:', heroes);
//   console.log(`Enviando a ${heroes[0].name} y a ${heroes[1].name} a la misión`);
// });

// Example 3: Array Destructuring
Promise.all([searchHero(hero1), searchHero(hero2)])
  .then(([hero1, hero2]) => {
    console.log(`Enviando a ${hero1.name} y a ${hero2.name} a la misión`);
  })
  .catch(error => {
    alert(error);
  })
  .finally(() => {
    // No recibe ningun argumento.
    console.log('Finalizó el Promise.all');
  });

// Importante: En Promise.all([...,...]) todas las promesas deben cumplirse, si una falla ejecutará el catch.

console.log(
  'ultima linea de codigo del programa que aparece antes de la Promise, a pesar de estar de ultima'
);
