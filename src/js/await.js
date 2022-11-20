import { searchHeroAsync, searchHero } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];

export const getArrayHeroes = async () => {
  const heroesArray = [];

  for (const id of heroesIDs) {
    // const hero = await searchHero(id);
    // heroesArray.push(hero);

    heroesArray.push(searchHero(id))
  }

  return await Promise.all(heroesArray);
};
