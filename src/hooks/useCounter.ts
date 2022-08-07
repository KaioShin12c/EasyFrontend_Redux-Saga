import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCounterValue,
  increment,
  incrementByAmount,
  decrement,
} from "../pages/Counter/counterSlice";

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(selectCounterValue);

  const incrementAction = () => {
    dispatch(increment());
  };

  const incrementByAmountAction = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  const decrementAction = () => {
    dispatch(decrement());
  };

  const incrementAsync = () => {
    dispatch({ type: "INCREMENT_ASYNC" });
  };

  return {
    counterValue,
    incrementAction,
    incrementByAmountAction,
    decrementAction,
    incrementAsync,
  };
};
