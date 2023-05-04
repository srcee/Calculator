import {
  CalculatorStateActionsUnion,
  CalculatorStateAction,
} from './calculator.actions';

const initialState = '0';

export const calculatorEquationReducer = (
  state = initialState,
  action: CalculatorStateActionsUnion
) => {
  switch (action.type) {
    case CalculatorStateAction.UpdateEquation: {
      const { value, isOperator } = action.payload;
      const isDoubleOperator = isOperator && isLastValueOperator(state);
      const updatedState = isDoubleOperator ? trimLastValue(state) : state;
      if (state === initialState) {
        return value;
      }

      return updatedState + value;
    }

    case CalculatorStateAction.ClearEquation: {
      return initialState;
    }

    case CalculatorStateAction.Backspace: {
      const updatedState = trimLastValue(state);
      if (!updatedState) {
        return initialState;
      }

      return updatedState;
    }

    case CalculatorStateAction.DecimalPoint: {
      if (isValidDecimalPoint(state)) {
        return state + action.payload.value;
      }

      return state;
    }

    case CalculatorStateAction.Equals: {
      const equation = isLastValueOperator(state)
        ? trimLastValue(state)
        : state;

      return String(eval(equation || initialState));
    }

    default: {
      return state;
    }
  }
};

const trimLastValue = (state: string): string => {
  return state.substring(0, state.length - 1);
};
const isLastValueOperator = (state: string): boolean => {
  return isNaN(Number(state.slice(-1)));
};
const isValidDecimalPoint = (state: string): boolean => {
  const lastDecimalPointIndex = state.lastIndexOf('.');
  const hasEndingOperator = isLastValueOperator(state);
  // Check if every value after the last decimal point is a Number, which would lead to double decimal point e.g. (11.1)-not valid (11.1+1)-valid
  const isDoubleDecimalPoint =
    lastDecimalPointIndex !== -1 &&
    state
      .split('')
      .splice(lastDecimalPointIndex + 1)
      .every(Number);

  const isValidDecimalPoint = !hasEndingOperator && !isDoubleDecimalPoint;

  return isValidDecimalPoint;
};
