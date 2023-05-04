import { Component, Input } from '@angular/core';

import { UpdateEquationPayload } from '../../state/calculator.actions';
import { CalculatorEquationService } from '../../services/calculatorEquation.service';
import { KeypadNumber, KeypadOperator } from '../keypad/keypad.enum';

export interface KeypadButton {
  title: string;
  value: KeypadNumber | KeypadOperator;
  isOperator?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export enum KeypadButtonValue {}

@Component({
  selector: 'app-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.scss'],
})
export class KeypadButtonComponent {
  @Input() buttonConfig: KeypadButton;

  constructor(private calculatorEquationService: CalculatorEquationService) {}

  public onButtonClick(button: KeypadButton) {
    const payload: UpdateEquationPayload = {
      value: button.value,
      isOperator: !!button.isOperator,
    };
    this.calculatorEquationService.updateEquation(payload);
  }
}
