import fs from 'fs';
import { Drug, Pharmacy } from './pharmacy';

const drugs = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5),
  new Drug('Fervex', 5, 40),
  new Drug('Magic Pill', 15, 40),
];

const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(trial.updateBenefitValue());
}

/* eslint-disable no-console */
fs.writeFile('./output/data.json', JSON.stringify(log), (err) => {
  if (err) {
    console.error('error', err);
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */
