import { Action } from '@ngrx/store';

export enum CalculatorStateAction {
  UpdateEquation = '[Calculator] Update Equation',
  ClearEquation = '[Calculator] Clear Equation',
  Backspace = '[Calculator] Backspace',
  DecimalPoint = '[Calculator] DecimalPoint',
  Equals = '[Calculator] Equals',
}

export interface UpdateEquationPayload {
  value: string;
  isOperator: boolean;
}

export class UpdateEquation implements Action {
  readonly type = CalculatorStateAction.UpdateEquation;

  constructor(public payload: UpdateEquationPayload) {}
}

export class ClearEquation implements Action {
  readonly type = CalculatorStateAction.ClearEquation;
}

export class Backspace implements Action {
  readonly type = CalculatorStateAction.Backspace;
}

export class DecimalPoint implements Action {
  readonly type = CalculatorStateAction.DecimalPoint;

  constructor(public payload: UpdateEquationPayload) {}
}

export class Equals implements Action {
  readonly type = CalculatorStateAction.Equals;
}

export type CalculatorStateActionsUnion =
  | UpdateEquation
  | ClearEquation
  | Backspace
  | DecimalPoint
  | Equals;
