export function dollarFormatter(amount){
    const dollarFormat = amount.toLocaleString('en-CA', {
        style: 'currency',
        currency: 'CAD'
      });
      return dollarFormat
};