import dafalgan from '../../src/drugs/dafalgan';

describe('dafalgan', () => {
  it('should degrade in benefit twice as fast as normal drugs', () => {
    const drug = dafalgan({ expiresIn: 10, benefit: 10 });
    expect(drug).toEqual({ expiresIn: 9, benefit: 8 });
  });
});
