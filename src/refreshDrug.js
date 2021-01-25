import genericDrug from './drugs/genericDrug';
import dafalgan, { DAFALGAN } from './drugs/dafalgan';
import fervex, { FERVEX } from './drugs/fervex';
import herbalTea, { HERBAL_TEA } from './drugs/herbalTea';
import magicPill, { MAGIC_PILL } from './drugs/magicPill';

export function refreshDrug(payload) {
  const drug = refresh(payload);
  // once the expiration date has passed,
  // benefit degrades twice as fast.
  if (drug.expiresIn <= 0) {
    drug.benefit -= 1;
  }
  // the benefit of an item is never negative.
  if (drug.benefit < 0) {
    drug.benefit = 0;
  }
  // the benefit of an item is never more than 50.
  if (drug.benefit > 50) {
    drug.benefit = 50;
  }
  return drug;
}

function refresh(payload) {
  switch (payload.name) {
    case DAFALGAN:
      return dafalgan(payload);
    case FERVEX:
      return fervex(payload);
    case HERBAL_TEA:
      return herbalTea(payload);
    case MAGIC_PILL:
      return magicPill(payload);
    default:
      return genericDrug(payload);
  }
}
