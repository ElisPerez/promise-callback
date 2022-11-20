import { searchHeroAsync } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];

export const getArrayHeroes = () => {
  const heroesArray = [];

  for (const id of heroesIDs) {
    searchHeroAsync(id)
      .then(hero => heroesArray.push(hero));
  }

  setTimeout(() => {
    console.log('from: getArrayHeroes');
    console.table(heroesArray);
  }, 1000);

  return heroesArray;
};
