import { calculateDailyVariation } from '@/domain/usecases/calculateVariation';

describe('calculateVariation', () => {
    it('calculates the variation between two consecutive data points', () => {
        const data = [
            { fecha: '2021-01-01', valor: 10 },
            { fecha: '2021-01-02', valor: 12 }
        ];

        const result = calculateDailyVariation(data);
        expect(result[0].variation).toBe(2);
    });
});
