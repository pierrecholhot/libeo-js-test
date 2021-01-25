import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should warn about the deprecated Pharmacy class', () => {
    /* eslint-disable no-console */
    console.warn = jest.fn();
    new Pharmacy([]);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('DEPRECATED'));
    /* eslint-enable no-console */
  });
  it('should warn about the deprecated Drug class', () => {
    /* eslint-disable no-console */
    console.warn = jest.fn();
    new Drug('test', 2, 3);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('DEPRECATED'));
    /* eslint-enable no-console */
  });
  it('should still decrease the benefit and expiresIn', () => {
    const value = new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue();
    const result = [new Drug('test', 1, 2)];
    expect(value).toEqual(result);
  });
});
