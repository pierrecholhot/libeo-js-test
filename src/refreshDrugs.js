import { refreshDrug } from './refreshDrug';

export function refreshDrugs(drugs) {
  return drugs.map(refreshDrug);
}
