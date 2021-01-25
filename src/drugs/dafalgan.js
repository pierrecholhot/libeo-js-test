export const DAFALGAN = 'Dafalgan';

// "dafalgan" degrades in benefit twice as fast as normal drugs.
export default function update(payload) {
  const drug = { ...payload };
  drug.expiresIn -= 1;
  drug.benefit -= 2;
  return drug;
}
