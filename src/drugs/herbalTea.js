export const HERBAL_TEA = 'Herbal Tea';

// "herbal tea" actually increases in benefit the older it gets.
// should increase benefit twice as fast after the expiration date.
export default function update(payload) {
  const drug = { ...payload };
  drug.expiresIn -= 1;
  drug.benefit += 1;
  if (drug.expiresIn <= 0) drug.benefit += 1;
  return drug;
}
