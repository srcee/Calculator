import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { KeypadNumber, KeypadOperator } from './components/keypad/keypad.enum';
import { CalculatorEquationService } from './services/calculatorEquation.service';
import { UpdateEquationPayload } from './state/calculator.actions';
import { CalculatorApi } from './services/calculator-api.service';
import { calculatorEquationSelector } from './state/calculator.selectors';
import { AppState } from '../types/appState.interface';
import { CalculationPayload } from '../types/calculation.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit, OnDestroy {
  equation$: Observable<string>;
  subscription: Subscription;

  constructor(
    private calculatorEquationService: CalculatorEquationService,
    private calculatorApi: CalculatorApi,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.equation$ = this.store.pipe(select(calculatorEquationSelector));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('window:keydown.enter', ['$event'])
  onEnterKeydownEvent() {
    const updateEquationPayload: UpdateEquationPayload = {
      value: KeypadOperator.Equals,
      isOperator: true,
    };

    // TODO: It's wrong doing it this way. Use Effects.
    let equationBeforeUpdate: string;
    this.equation$.pipe(take(1)).subscribe((value) => {
      equationBeforeUpdate = value;
    });

    // Update the equation and get the value of `this.equation$` after it is updated
    this.calculatorEquationService.updateEquation(updateEquationPayload);
    let equationAfterUpdate: string;
    this.equation$.pipe(take(1)).subscribe((value) => {
      equationAfterUpdate = value;

      // Create the calculation payload with the `equationBeforeUpdate` and `equationAfterUpdate` values.
      const createCalculationPayload: CalculationPayload = {
        equation: equationBeforeUpdate,
        result: equationAfterUpdate,
      };

      // Call the API to create the calculation
      this.calculatorApi
        .createCalculation(createCalculationPayload)
        .subscribe();
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeydownEvent(event: KeyboardEvent) {
    const value = event.key;
    const isOperator = Object.values(KeypadOperator).includes(
      value as unknown as KeypadOperator
    );
    const isNumber = Object.values(KeypadNumber).includes(
      value as unknown as KeypadNumber
    );
    if (isOperator || isNumber) {
      const payload: UpdateEquationPayload = {
        value,
        isOperator,
      };
      this.calculatorEquationService.updateEquation(payload);
    }
  }
}
