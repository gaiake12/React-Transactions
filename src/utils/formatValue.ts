const formatValue = (value: number): string =>
  new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export default formatValue;
