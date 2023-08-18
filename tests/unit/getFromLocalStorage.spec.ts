import axios from 'axios'
import { fetchDollarData } from '@/adapters/DataAPIAdapter'
import { getFromLocalStorage } from '@/adapters/LocalStorageAdapter'

jest.mock('axios');

jest.mock('@/adapters/LocalStorageAdapter', () => ({
  saveToLocalStorage: jest.fn(),
  getFromLocalStorage: jest.fn()
}));

describe('DataAPIAdapter', () => {
  it('retrieves data from local storage when available', async () => {
    const mockData = { serie: [{ fecha: '2023-08-18', valor: 860 }] };

    (getFromLocalStorage as jest.MockedFunction<typeof getFromLocalStorage>).mockReturnValueOnce(mockData);

    const result = await fetchDollarData();

    expect(result).toEqual(mockData);
    expect(axios.get).not.toHaveBeenCalled();
  });

});
