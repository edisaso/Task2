import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ResultDisplay: React.FC<{ carValue: number, downPayment: number, monthlyInstallment: number, interestRate: number, totalLeaseCost: number }> = ({ carValue, downPayment, monthlyInstallment, interestRate, totalLeaseCost }) => {

  return (
    <ResultWrapper className='text-black flex flex-col justify-center lg:items-center'>
      <div>
        <div className='flex justify-center items-center pt-5'>
      <h1 className="text-2xl font-bold">Leasing Details</h1>
      </div>
        <div className='flex lg:gap-10 gap-5 pt-5 flex-col lg:flex-row'>
            <div>
        <p><strong>Total Leasing Cost</strong>: €{carValue}</p>
        <p><strong>Down Payment</strong>: €{downPayment.toFixed(2)} ({(downPayment / carValue * 100).toFixed(0)}%)</p>
            </div>
            <div>
        <p><strong>Monthly Installment</strong>: €{monthlyInstallment.toFixed(2)}</p>
        <p><strong>Interest Rate</strong>: {interestRate}%</p>
            </div>
      </div>
      </div>
    </ResultWrapper>
  );
};

export default ResultDisplay;
