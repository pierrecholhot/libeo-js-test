import { makeDrug } from '../src/makeDrug';
import { refreshDrug } from '../src/refreshDrug';

import * as dafalgan from '../src/drugs/dafalgan';
import * as fervex from '../src/drugs/fervex';
import * as genericDrug from '../src/drugs/genericDrug';
import * as herbalTea from '../src/drugs/herbalTea';
import * as magicPill from '../src/drugs/magicPill';

describe('refreshDrug', () => {
  it('benefit doubles when expired', () => {
    const test = makeDrug('test', -2, 10);
    const drug = refreshDrug(test);
    expect(drug).toContainEntry(['benefit', 8]);
  });
  it('benefit should not be negative', () => {
    const test = makeDrug('test', 1, -3);
    const drug = refreshDrug(test);
    expect(drug).toContainEntry(['benefit', 0]);
  });
  it('benefit should not exceed 50', () => {
    const test = makeDrug('test', 1, 56);
    const drug = refreshDrug(test);
    expect(drug).toContainEntry(['benefit', 50]);
  });
  it('should target DAFALGAN', () => {
    const spy = jest.spyOn(dafalgan, 'default');
    const test = makeDrug(dafalgan.DAFALGAN, 1, 1);
    refreshDrug(test);
    expect(spy).toHaveBeenCalledWith(test);
  });
  it('should target FERVEX', () => {
    const spy = jest.spyOn(fervex, 'default');
    const test = makeDrug(fervex.FERVEX, 1, 1);
    refreshDrug(test);
    expect(spy).toHaveBeenCalledWith(test);
  });
  it('should target HERBAL_TEA', () => {
    const spy = jest.spyOn(herbalTea, 'default');
    const test = makeDrug(herbalTea.HERBAL_TEA, 1, 1);
    refreshDrug(test);
    expect(spy).toHaveBeenCalledWith(test);
  });
  it('should target MAGIC_PILL', () => {
    const spy = jest.spyOn(magicPill, 'default');
    const test = makeDrug(magicPill.MAGIC_PILL, 1, 1);
    refreshDrug(test);
    expect(spy).toHaveBeenCalledWith(test);
  });
  it('should target GENERIC_DRUG', () => {
    const spy = jest.spyOn(genericDrug, 'default');
    const test = makeDrug(genericDrug.GENERIC_DRUG, 1, 1);
    refreshDrug(test);
    expect(spy).toHaveBeenCalledWith(test);
  });
});
