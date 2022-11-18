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

export const searchHero = (heroID, callback) => {
  const hero = heroes[heroID];

  callback(hero);
};
