import { searchHeroAsync } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];

export const getArrayHeroes = async () => {
  const heroesArray = [];

  for (const id of heroesIDs) {
    const hero = await searchHeroAsync(id);
    heroesArray.push(hero);
  }

  return heroesArray;
};
