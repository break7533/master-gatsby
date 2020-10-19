const formatter = Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'EUR',
}).format;

export default function formatMoney(cents) {
  return formatter(cents / 100);
}
