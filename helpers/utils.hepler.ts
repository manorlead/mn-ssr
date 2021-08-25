export const parsePrice = (price?: string): string =>
  price ? `${price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : '0'
