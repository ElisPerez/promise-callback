import './css/style.css';
import { getArrayHeroes } from './js/await';

getArrayHeroes().then(console.table);
