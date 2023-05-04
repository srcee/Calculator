import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppState) => state.calculatorEquation;

export const calculatorEquationSelector = createSelector(
  selectFeature,
  (state: string) => state
);
