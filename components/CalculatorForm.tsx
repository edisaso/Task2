"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateMonthlyInstallment } from '../utils/calculator';
import ResultDisplay from './ResultDisplay';

const FormWrapper = styled.div`
  .form-group {
    margin-bottom: 15px;
  }
`;

const CalculatorForm: React.FC = () => {
  const [carType, setCarType] = useState('new');
  const [carValue, setCarValue] = useState(10000);
  const [leasePeriod, setLeasePeriod] = useState(12);
  const [downPayment, setDownPayment] = useState(10);

  const { 
    monthlyInstallment, 
    interestRate, 
    downPayment: downPaymentAmount, 
    totalLeaseCost 
  } = calculateMonthlyInstallment(carValue, leasePeriod, downPayment, carType === 'new');


  return (
    <FormWrapper className='divide-y-2 p-5'>
      <div className='flex text-black gap-5 font-semibold lg:items-center justify-center flex-col items-start lg:flex-row'>
        <div className='pt-5 w-full'>
      <div className="form-group flex flex-col">
        <label>Car Type:</label>
        <select className= 'rounded border-2' value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="new">Brand New</option>
          <option value="used">Used</option>
        </select>
      </div>
      <div className="form-group flex flex-col">
        <label>Car Value (€10,000 - €200,000)</label>
        <input
          className= 'rounded border-2'
          type="number"
          value={carValue}
          min={10000}
          max={200000}
          onChange={(e) => setCarValue(Number(e.target.value))}
        />
        <input
          className='pt-10'
          type="range"
          value={carValue}
          min={10000}
          max={200000}
          onChange={(e) => setCarValue(Number(e.target.value))}
        />
      </div>
      </div>
      <div className='pt-5 w-full'>
      <div className="form-group flex flex-col">
        <label>Lease Period (months):</label>
        <select className= 'rounded border-2' value={leasePeriod} onChange={(e) => setLeasePeriod(Number(e.target.value))}>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
        </select>
      </div>
      <div className="form-group flex flex-col">
        <label>Down Payment (10% - 50%)</label>
        <input
          className= 'rounded border-2'
          type="number"
          value={downPayment}
          min={10}
          max={50}
          step={5}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
        <input
          className='pt-10'
          type="range"
          value={downPayment}
          min={10}
          max={50}
          step={5}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
      </div>
      </div>
      </div>
      <ResultDisplay 
        carValue={carValue} 
        downPayment={downPaymentAmount} 
        monthlyInstallment={monthlyInstallment} 
        interestRate={interestRate} 
        totalLeaseCost={totalLeaseCost} 
      />
    </FormWrapper>
  );
};

export default CalculatorForm;
