import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, FilterQuery} from 'mongoose';

import {Calculation, CalculationDocument} from './schemas/calculation.schema';

@Injectable()
export class CalculationRepository {
  constructor(@InjectModel(Calculation.name) private calculationModel: Model<CalculationDocument>) {}

  async find(calculationFilterQUery: FilterQuery<Calculation>): Promise<Calculation[]> {
    return this.calculationModel.find(calculationFilterQUery);
  }

  async create(calculation: Calculation): Promise<Calculation> {
    const newCalculation = new this.calculationModel(calculation);

    return newCalculation.save();
  }
}
