import axios from 'axios'
import { fetchDollarData } from '@/adapters/DataAPIAdapter'
import { saveToLocalStorage, getFromLocalStorage } from '@/adapters/LocalStorageAdapter'

jest.mock('axios');
jest.mock('@/adapters/LocalStorageAdapter', () => ({
  getFromLocalStorage: jest.fn(),
  saveToLocalStorage: jest.fn()
}));

describe('saveToLocalStorage', () => {
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('saves data to local storage when fetching from the API', async () => {
        const mockApiResponse = { data: { serie: [{ fecha: '2023-08-19', valor: 861 }] } };
        const cacheKey = 'dollar_data';
      
        // Mocking local storage to return null
        (getFromLocalStorage as jest.Mock).mockReturnValueOnce(null);
        
        // Mocking axios to return our mock API response
        (axios.get as jest.Mock).mockResolvedValueOnce(mockApiResponse);
      
        await fetchDollarData();
      
        expect(saveToLocalStorage).toHaveBeenCalledWith(cacheKey, mockApiResponse.data);
      });
  
  });
  