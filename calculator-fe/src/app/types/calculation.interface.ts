export interface Calculation {
  id: string;
  equation: string;
  result: string;
}

export interface CalculationPayload extends Omit<Calculation, 'id'> {}
