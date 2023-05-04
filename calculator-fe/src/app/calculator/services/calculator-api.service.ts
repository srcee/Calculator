import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../../api/base-api.service';
import {
  Calculation,
  CalculationPayload,
} from 'src/app/types/calculation.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorApi extends BaseApi {
  private readonly baseEndpoint: string = 'calculation';

  constructor(http: HttpClient) {
    // TODO: move the backend URI to .env
    super(http, 'http://localhost:5000/api');
  }

  getCalculations(): Observable<Calculation[]> {
    return this.get<Calculation[]>(this.baseEndpoint);
  }

  createCalculation(calculation: CalculationPayload): Observable<Calculation> {
    return this.post<Calculation>(this.baseEndpoint, calculation);
  }
}
