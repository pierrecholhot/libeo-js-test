import { makeDrug } from '../src/makeDrug';
import { refreshDrugs } from '../src/refreshDrugs';
import * as RD from '../src/refreshDrug';

describe('refreshDrugs', () => {
  it('should return an array', () => {
    const drug = makeDrug('test', 1, 2);
    const mock = [drug, drug];
    const value = refreshDrugs(mock);
    expect(Array.isArray(value)).toBeTruthy();
  });
  it('should call refreshDrug for each array item', () => {
    const drug = makeDrug('test', 1, 2);
    const mock = [drug, drug];
    RD.refreshDrug = jest.fn();
    refreshDrugs(mock);
    expect(RD.refreshDrug).toHaveBeenCalledTimes(2);
  });
});
