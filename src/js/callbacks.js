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

// La funcion "callback" es definida por la funcion que llamó a esta funcion "searchHero". "searchHero" solamente debe de llamar el callback al final con los argumentos definidos (error, hero)
export const searchHero = (heroID, callback) => {
  const hero = heroes[heroID];

  if (hero) {
    callback(null, hero);
  } else {
    const error = `No existe hero con el ID ${heroID}`;
    callback(error, null);
  }
};
