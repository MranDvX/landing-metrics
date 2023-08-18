import axios from 'axios'
import { saveToLocalStorage, getFromLocalStorage } from './LocalStorageAdapter'

export async function fetchDollarData () {
  const cacheKey = 'dollar_data'
  const cachedData = getFromLocalStorage(cacheKey)

  if (cachedData) {
    return cachedData
  }

  const response = await axios.get('https://mindicador.cl/api/dolar')
  const rawData = response.data
  saveToLocalStorage(cacheKey, rawData)
  return rawData
}
