import { searchHeroAsync, searchHero } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];
const heroesPromises = heroesIDs.map(searchHero);
// const heroesPromises = heroesIDs.map(id => searchHero(id));

export const getArrayHeroes = async () => {
  return await Promise.all(heroesIDs.map(searchHero));
};

export const getHeroAwait = async id => {
  try {
    const hero = await searchHeroAsync(id);
    return hero;
  } catch (error) {
    // throw error;
    console.log('CATCH!!!');
    // Para no lanzar un error tambien se puede retornar un valor por defecto:
    return {
      name: 'Without name',
      power: 'Without power',
    };
  }
};

/* FOR AWAIT */
export const heroesLoop = async () => {
  console.time('heroesLoop');

  for await (const hero of heroesPromises) {
    console.log(hero);
  }

  // Alternativa 1:
  // const heroes = await Promise.all(heroesPromises);
  // console.log(heroes);
  // heroes.forEach(console.log);

  // Alternativa 2:
  // heroesPromises.forEach(async promise => console.log(await promise));

  console.timeEnd('heroesLoop');
};

/* IF AWAIT */
export const heroesIfAwait = async id => {
  if ((await searchHeroAsync(id)).name === 'Ironman') {
    console.log('Es el heroe plancha');
  } else {
    console.log('buuajajaja');
  }
};
