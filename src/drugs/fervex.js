export const FERVEX = 'Fervex';

// "fervex", like "herbal tea", increases in benefit as its expiration date approaches.
// benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days
// or less but benefit drops to 0 after the expiration date.
export default function update(payload) {
  const drug = { ...payload };
  drug.expiresIn -= 1;
  if (drug.expiresIn <= 0) {
    drug.benefit = 0;
  } else if (drug.expiresIn <= 5) {
    drug.benefit += 3;
  } else if (drug.expiresIn <= 10) {
    drug.benefit += 2;
  } else {
    drug.benefit += 1;
  }
  return drug;
}
