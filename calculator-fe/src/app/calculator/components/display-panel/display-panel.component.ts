import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/types/appState.interface';

import { calculatorEquationSelector } from '../../state/calculator.selectors';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss'],
})
export class DisplayPanelComponent implements OnInit {
  equation$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.equation$ = this.store.pipe(select(calculatorEquationSelector));
  }
}
