import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

const Counter = () => {
  const {
    counterValue,
    incrementAction,
    decrementAction,
    incrementByAmountAction,
    incrementAsync,
  } = useCounter();

  const [amount, setAmount] = useState<number | string>(0);
  return (
    <div>
      <p>Counter: {counterValue}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter your number"
      />
      <button type="button" onClick={incrementAction}>
        Increment
      </button>
      <button type="button" onClick={decrementAction}>
        Decrement
      </button>
      <button
        type="button"
        onClick={() => incrementByAmountAction(Number(amount))}
      >
        Increment By Amount
      </button>
      <button type="button" onClick={incrementAsync}>
        Increment Async
      </button>
    </div>
  );
};

export default Counter;
