import fervex from '../../src/drugs/fervex';

describe('fervex', () => {
  it('should increase in benefit as its expiration date approaches', () => {
    const drug = fervex({ expiresIn: 20, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 19, benefit: 11 });
  });
  it('should increase benefit by 2 when there are 10 days or less', () => {
    const drug = fervex({ expiresIn: 10, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 9, benefit: 12 });
  });
  it('should increase benefit by 3 when there are 5 days or less', () => {
    const drug = fervex({ expiresIn: 5, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 4, benefit: 13 });
  });
  it('should drop benefit to 0 after the expiration date', () => {
    const drug = fervex({ expiresIn: 0, benefit: 10 });
    expect(drug).toEqual({ expiresIn: -1, benefit: 0 });
  });
});
