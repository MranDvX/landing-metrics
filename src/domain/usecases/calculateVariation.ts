export function calculateDailyVariation (serie: any[]) {
  const variations = []
  for (let i = 1; i < serie.length; i++) {
    const variation = serie[i].valor - serie[i - 1].valor
    variations.push({
      fecha: serie[i].fecha,
      variation: variation
    })
  }
  return variations
}
