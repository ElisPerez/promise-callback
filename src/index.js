import './css/style.css';
import { getArrayHeroes } from './js/await';

const heroes = getArrayHeroes();

console.table(heroes);