export const calculateMonthlyInstallment = (
    carValue: number,
    leasePeriod: number,
    downPaymentPercent: number,
    isNewCar: boolean
  ): { 
    monthlyInstallment: number; 
    interestRate: number; 
    downPayment: number; 
    totalLeaseCost: number; 
  } => {
    const interestRate = isNewCar ? 2.99 : 3.7;
    const downPayment = carValue * (downPaymentPercent / 100);
    const loanAmount = carValue - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = leasePeriod;
  
    // Monthly installment calculation using the annuity formula
    const monthlyInstallment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    // Total lease cost calculation
    const totalLeaseCost = (monthlyInstallment * numberOfPayments) + downPayment;
  
    return { 
      monthlyInstallment, 
      interestRate, 
      downPayment, 
      totalLeaseCost 
    };
  };