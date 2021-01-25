import { makeDrug } from './src/makeDrug';
import { refreshDrugs } from './src/refreshDrugs';

export class Drug {
  constructor(...args) {
    console.warn(`DEPRECATED: Drug(), use makeDrug(${args}) instead`);
    return makeDrug.call(this, ...args);
  }
}

export class Pharmacy {
  constructor(drugs) {
    console.warn(`DEPRECATED: Pharmacy(), use refreshDrugs(${drugs}) instead`);
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = refreshDrugs(this.drugs);
    return this.drugs;
  }
}
