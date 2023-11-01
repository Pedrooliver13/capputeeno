export const formatCurrency = (valueInCents?: number | string): string => {
  const formattedValue = Number(valueInCents) / 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(formattedValue || 0);
};
