import { calculateDailyVariation } from '@/domain/usecases/calculateVariation';

describe('calculateVariation', () => {

  it('should not return an empty list when provided with data', () => {
    const sampleData = [
      { fecha: '2021-01-01', valor: 10 },
      { fecha: '2021-01-02', valor: 12 }
    ];

    const result = calculateDailyVariation(sampleData);

    expect(result).not.toHaveLength(0);
  });
});
