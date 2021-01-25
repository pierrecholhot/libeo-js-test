import { makeDrug } from '../src/makeDrug';

describe('makeDrug', () => {
  it('should return an object', () => {
    const drug = makeDrug('test', 1, 2);
    expect(drug).toEqual({ name: 'test', expiresIn: 1, benefit: 2 });
  });
});
