import { IDataAPIPort } from '@/ports/IDataAPIPort'
import { calculateDailyVariation } from '@/domain/usecases/calculateVariation'

export async function fetchAndProcessDollarData (apiAdapter: IDataAPIPort) {
  const rawData = await apiAdapter.fetchDollarData()
  return calculateDailyVariation(rawData.serie)
}
