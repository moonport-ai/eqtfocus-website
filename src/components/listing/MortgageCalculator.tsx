'use client';

import { useState, useMemo } from 'react';

interface MortgageCalculatorProps {
  listPrice: string | number;
}

export default function MortgageCalculator({ listPrice }: MortgageCalculatorProps) {
  const price = typeof listPrice === 'string' ? parseFloat(listPrice) : listPrice;

  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyPayment = useMemo(() => {
    const downPayment = price * (downPaymentPercent / 100);
    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) return loanAmount / numPayments;

    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return payment;
  }, [price, downPaymentPercent, interestRate, loanTerm]);

  return (
    <div className="bg-white border border-brand-light-gray rounded-lg p-6 mt-6">
      <h3 className="font-heading text-lg text-brand-dark-gray mb-4">Mortgage Calculator</h3>
      <div className="w-10 h-px bg-brand-black mb-5" />

      <div className="space-y-4">
        <div>
          <label className="font-body text-xs text-brand-medium-gray uppercase tracking-wider mb-1.5 block">
            Down Payment ({downPaymentPercent}%)
          </label>
          <input
            type="range"
            min={5}
            max={50}
            step={5}
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full accent-brand-black"
          />
          <div className="flex justify-between font-body text-xs text-brand-medium-gray mt-1">
            <span>5%</span>
            <span className="font-medium text-brand-dark-gray">
              ${(price * downPaymentPercent / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>
            <span>50%</span>
          </div>
        </div>

        <div>
          <label className="font-body text-xs text-brand-medium-gray uppercase tracking-wider mb-1.5 block">
            Interest Rate ({interestRate}%)
          </label>
          <input
            type="range"
            min={2}
            max={12}
            step={0.25}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-brand-black"
          />
          <div className="flex justify-between font-body text-xs text-brand-medium-gray mt-1">
            <span>2%</span>
            <span>12%</span>
          </div>
        </div>

        <div>
          <label className="font-body text-xs text-brand-medium-gray uppercase tracking-wider mb-1.5 block">
            Loan Term
          </label>
          <div className="flex gap-2">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-2 rounded text-sm font-body transition-colors ${
                  loanTerm === term
                    ? 'bg-brand-black text-white'
                    : 'bg-white border border-brand-light-gray text-brand-dark-gray hover:border-brand-black'
                }`}
              >
                {term} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-brand-light-gray">
        <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">
          Estimated Monthly Payment
        </p>
        <p className="font-heading text-3xl text-brand-dark-gray mt-1">
          ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          <span className="font-body text-sm text-brand-medium-gray">/mo</span>
        </p>
        <p className="font-body text-xs text-brand-medium-gray mt-2">
          Principal & interest only. Does not include taxes, insurance, or HOA.
        </p>
      </div>
    </div>
  );
}
