import fs from 'fs';
import { Drug, Pharmacy } from './pharmacy';

import { DAFALGAN } from './src/drugs/dafalgan';
import { FERVEX } from './src/drugs/fervex';
import { MAGIC_PILL } from './src/drugs/magicPill';
import { HERBAL_TEA } from './src/drugs/herbalTea';

const drugs = [
  new Drug('Doliprane', 20, 30),
  new Drug(HERBAL_TEA, 10, 5),
  new Drug(FERVEX, 5, 40),
  new Drug(MAGIC_PILL, 15, 40),
  new Drug(DAFALGAN, 15, 40),
];

const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(trial.updateBenefitValue());
}

/* eslint-disable no-console */
fs.writeFile('./output/data.json', JSON.stringify(log, null, 2), err => {
  if (err) {
    console.error('error', err);
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */
