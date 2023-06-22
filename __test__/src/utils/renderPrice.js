export const renderPrice = (price = 0) => {
  return Number(price).toLocaleString("id-ID") || 0;
};
