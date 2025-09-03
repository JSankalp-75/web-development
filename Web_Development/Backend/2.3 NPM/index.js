// var generateName = require('superheroes');


// // import generateName from "superheroes";
// var superheroes = generateName();

// console.log(`I am ${superheroes}.`);


// import superheroes from 'superheroes';

// const name = superheroes.randomSuperhero();

// console.log(`I am ${name}!`);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = fs.readFileSync(path.join(__dirname, '/node_modules/superheroes/superheroes.json'), 'utf-8');
const superheroes = JSON.parse(data);

const random = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${random}!`);
