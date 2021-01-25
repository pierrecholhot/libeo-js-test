export const GENERIC_DRUG = 'Generic Drug';

// at the end of each day our system lowers both values for every drug
export default function update(payload) {
  const drug = { ...payload };
  drug.expiresIn -= 1;
  drug.benefit -= 1;
  return drug;
}
