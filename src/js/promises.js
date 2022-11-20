const heroes = {
  cap: {
    name: 'Captain America',
    power: 'Aguantar inyecciones sin morir',
  },
  iron: {
    name: 'Ironman',
    power: 'Absurda cantidad de dinero',
  },
  spider: {
    name: 'Spiderman',
    power: 'La mejor reacción alergica a la picadura de araña',
  },
};

export const searchHero = heroID => {
  const hero = heroes[heroID];

  // La promesa recibe un callback, ese callback recibe 2 argumento: resolver/rechazar la promesa.
  return new Promise((resolve, reject) => {
    if (hero) {
      setTimeout(() => {
        resolve(hero);
      }, 1000);
    } else {
      reject(`No existe heroe con el id ${heroID}`);
    }
  });
};

export const searchHeroAsync = async heroID => {
  const hero = heroes[heroID];

  if (hero) {
    return hero;
  } else {
    throw Error(`No existe heroe con el id ${heroID}`);
  }
};

const promiseSlow = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise Slow'), 2000);
});

const promiseMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise Media'), 1500);
});

const promiseFast = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise Fast'), 1000);
});

export { promiseSlow, promiseMedia, promiseFast };
