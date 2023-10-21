import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function handleBillChange(value) {
    setBill(value);
  }

  function handleTip() {
    setPercentage((val) => val);
  }

  function handleReset() {
    setBill(0);
    setPercentage("0");
  }

  return (
    <div>
      <BillInput bill={bill} onBillChange={handleBillChange} />
      <PercentageSelect
        percentage={percentage}
        onPercentageChange={setPercentage}
      />
      <Output bill={bill} percentage={percentage} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <p>
        How much was the bill?
        <span>
          <input
            type="text"
            value={bill}
            onChange={(e) => onBillChange(e.target.value)}
          />
        </span>
      </p>
    </div>
  );
}

function PercentageSelect({ percentage, onPercentageChange }) {
  return (
    <div>
      <p>
        How did you like the service?
        <span>
          <select
            value={percentage}
            onChange={(e) => onPercentageChange(e.target.value)}
          >
            <option value="0">Dissastified (0%)</option>
            <option value="5">It was Ok (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </span>
      </p>
    </div>
  );
}

function Output({ bill, percentage }) {
  const tip = Math.round((bill * percentage) / 100);
  const totalPayment = Number(bill) + tip;
  return (
    <div>
      <h2>
        You pay ${totalPayment} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
