import { makeDrug } from './src/makeDrug';
import { refreshDrugs } from './src/refreshDrugs';

export class Drug {
  constructor(...args) {
    // eslint-disable-next-line
    console.warn(`DEPRECATED: Drug(), use makeDrug(${args}) instead`);
    return makeDrug.call(this, ...args);
  }
}

export class Pharmacy {
  constructor(drugs) {
    // eslint-disable-next-line
    console.warn(`DEPRECATED: Pharmacy(), use refreshDrugs(drugs) instead`);
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = refreshDrugs(this.drugs);
    return this.drugs;
  }
}
