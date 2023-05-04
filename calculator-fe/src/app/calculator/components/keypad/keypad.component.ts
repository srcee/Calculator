import { Component } from '@angular/core';
import { KeypadButton } from '../keypad-button/keypad-button.component';
import { KeypadNumber, KeypadOperator } from './keypad.enum';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent {
  keypadButtons: KeypadButton[] = [
    {
      title: 'C',
      value: KeypadOperator.Delete,
      isOperator: true,
      size: 'medium',
    },
    { title: '←', value: KeypadOperator.Backspace, isOperator: true },
    { title: '÷', value: KeypadOperator.Division, isOperator: true },
    { title: '7', value: KeypadNumber.Seven },
    { title: '8', value: KeypadNumber.Eight },
    { title: '9', value: KeypadNumber.Nine },
    { title: '×', value: KeypadOperator.Multiplication, isOperator: true },
    { title: '4', value: KeypadNumber.Four },
    { title: '5', value: KeypadNumber.Five },
    { title: '6', value: KeypadNumber.Six },
    { title: '-', value: KeypadOperator.Subtraction, isOperator: true },
    { title: '1', value: KeypadNumber.One },
    { title: '2', value: KeypadNumber.Two },
    { title: '3', value: KeypadNumber.Three },
    { title: '+', value: KeypadOperator.Addition, isOperator: true },
    { title: '0', value: KeypadNumber.Zero, size: 'medium' },
    { title: '.', value: KeypadOperator.DecimalPoint },
    { title: '=', value: KeypadOperator.Equals, isOperator: true },
  ];
}
