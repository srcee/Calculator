import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/types/appState.interface';

import {
  CalculatorStateAction,
  UpdateEquationPayload,
} from '../state/calculator.actions';
import { KeypadOperator } from '../components/keypad/keypad.enum';
import { CalculationPayload } from 'src/app/types/calculation.interface';
import { calculatorEquationSelector } from '../state/calculator.selectors';

@Injectable({
  providedIn: 'root',
})
export class CalculatorEquationService {
  constructor(private store: Store<AppState>) {}

  updateEquation(payload: UpdateEquationPayload) {
    switch (payload.value) {
      case KeypadOperator.Delete: {
        this.store.dispatch({
          type: CalculatorStateAction.ClearEquation,
        });
        break;
      }
      case KeypadOperator.Equals: {
        this.store.dispatch({
          type: CalculatorStateAction.Equals,
        });
        break;
      }
      case KeypadOperator.Backspace: {
        this.store.dispatch({
          type: CalculatorStateAction.Backspace,
        });
        break;
      }
      case KeypadOperator.DecimalPoint: {
        this.store.dispatch({
          type: CalculatorStateAction.DecimalPoint,
          payload,
        });
        break;
      }
      default: {
        this.store.dispatch({
          type: CalculatorStateAction.UpdateEquation,
          payload,
        });
      }
    }
  }
}
