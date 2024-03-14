export const formatNumber = (numb) => {
  if (!numb) return numb;
  if (typeof numb !== 'number') return numb;
  return numb.toLocaleString('id');
};
