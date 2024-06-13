# Car Leasing Calculator

## Overview

This project is a user-friendly car leasing calculator developed using Next.js. It allows potential customers to estimate their monthly leasing costs by inputting relevant details such as car type, car value, lease period, and down payment. The application dynamically calculates and displays the leasing cost, down payment, monthly installment, and applicable interest rate.

## Features

- **Responsive Design**: Ensures compatibility across various devices.
- **Dynamic Calculation**: Automatically updates results based on user inputs.
- **User Inputs**:
  - Car type (brand new or used)
  - Car value (€10,000 to €200,000)
  - Lease period (12 to 60 months, in 12-month increments)
  - Down payment (10% to 50% of the car value)
- **Output Results**:
  - Total leasing cost
  - Down payment amount and percentage
  - Monthly installment
  - Interest rate

## Business Rules

- **Interest Rates**:
  - Brand new cars: 2.99% annual interest rate.
  - Used cars: 3.7% annual interest rate.

## Installation and Setup

1. **Clone the repository**:
   git clone https://github.com/yourusername/car-leasing-calculator.git
   cd car-leasing-calculator

2. **Install dependencies**:
    npm install

3. **Run the development server**:
    npm run dev

4. **Open your browser and navigate to**:
    http://localhost:3000

**Usage**
-Select the car type (Brand New or Used).
-Enter the car value using the number input or range slider.
-Select the lease period in months using the number input or range slider.
-Adjust the down payment percentage using the range slider.
-View the dynamically updated leasing cost, down payment, monthly installment, and interest rate.

## Code Overview
*Calculator Logic (utils/calculator.ts)*
Handles the core calculation of monthly installment, total lease cost, and down payment based on user inputs.

*Form Component (components/CalculatorForm.tsx)*
Captures user inputs and displays the form elements for car type, car value, lease period, and down payment.

*Result Display Component (components/ResultDisplay.tsx)*
Displays the calculated results including total lease cost, down payment, monthly installment, and interest rate.

*Global Styles (app/global.css)*
Defines global CSS styles using styled-components to ensure consistent styling across the application.

*Main Page (app/page.tsx)*
Serves as the entry point of the application, integrating the form and result display components.