import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { DisplayPanelComponent } from './components/display-panel/display-panel.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { StoreModule } from '@ngrx/store';
import { calculatorEquationReducer } from './state/calculator.reducer';

@NgModule({
  declarations: [
    CalculatorComponent,
    DisplayPanelComponent,
    KeypadComponent,
    KeypadButtonComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('calculatorEquation', calculatorEquationReducer),
  ],
})
export class CalculatorModule {}
