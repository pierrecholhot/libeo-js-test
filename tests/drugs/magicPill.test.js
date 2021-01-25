import magicPill from '../../src/drugs/magicPill';

describe('magicPill', () => {
  it('should not affect the benefit nor expiresIn', () => {
    const base = { expiresIn: 20, benefit: 10 };
    const drug = magicPill(base);
    expect(drug).toEqual(base);
  });
  it('should not expire below zero', () => {
    const drug = magicPill({ expiresIn: -5, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 0, benefit: 10 });
  });
});
