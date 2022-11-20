import { searchHeroAsync } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];

export const getArrayHeroes = () => {
  const heroesArray = [];

  for (const id of heroesIDs) {
    searchHeroAsync(id)
      .then(hero => heroesArray.push(hero))
  }

  return heroesArray;
};
