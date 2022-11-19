const heroes = {
  cap: {
    name: 'Captain America',
    power: 'Aguantar inyecciones sin morir',
  },
  iro: {
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
      resolve(hero);
    } else {
      reject(`No existe heroe con el id ${heroID}`);
    }
  });
};
