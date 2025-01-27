export const generateCard = (brand: string) => {
  // Generate random card number based on brand
  const generateNumber = () => {
    const prefix = brand === 'visa' ? '4' :
                  brand === 'mastercard' ? '5' :
                  brand === 'amex' ? '3' : '6';
    
    const length = brand === 'amex' ? 15 : 16;
    let number = prefix;
    
    for (let i = 0; i < length - 1; i++) {
      number += Math.floor(Math.random() * 10);
    }
    
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  // Generate random expiry date (within next 5 years)
  const generateExpiry = () => {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = new Date().getFullYear() % 100 + Math.floor(Math.random() * 5);
    return `${month.toString().padStart(2, '0')}/${year}`;
  };

  // Generate random CVV
  const generateCVV = () => {
    const length = brand === 'amex' ? 4 : 3;
    return Array(length).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
  };

  return {
    number: generateNumber(),
    expiry: generateExpiry(),
    cvv: generateCVV(),
  };
};