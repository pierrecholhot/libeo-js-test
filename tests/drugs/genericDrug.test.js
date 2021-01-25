import genericDrug from '../../src/drugs/genericDrug';

describe('genericDrug', () => {
  it('should lower both values for every drug', () => {
    const drug = genericDrug({ expiresIn: 20, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 19, benefit: 9 });
  });
});
