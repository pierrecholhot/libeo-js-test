export const MAGIC_PILL = 'Magic Pill';

// "magic pill" never expires nor decreases in benefit.
export default function update(payload) {
  const drug = { ...payload };
  if (drug.expiresIn < 0) drug.expiresIn = 0;
  return drug;
}
