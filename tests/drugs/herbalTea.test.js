import herbalTea from '../../src/drugs/herbalTea';

describe('herbalTea', () => {
  it('should increase in benefit as its expiration date approaches', () => {
    const drug = herbalTea({ expiresIn: 20, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 19, benefit: 11 });
  });
  it('should increase benefit twice as fast after the expiration date', () => {
    const drug = herbalTea({ expiresIn: 0, benefit: 10 });
    expect(drug).toEqual({ expiresIn: -1, benefit: 12 });
  });
});
