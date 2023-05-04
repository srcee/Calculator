import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {CalculationRepository} from './calculation.repository';
import {Calculation} from './schemas/calculation.schema';

@Injectable()
export class CalculationService {
  constructor(private readonly calculationRepository: CalculationRepository) {}

  async getAll(): Promise<Calculation[]> {
    return this.calculationRepository.find({});
  }

  async createOne(equation: string, result: string): Promise<Calculation> {
    return this.calculationRepository.create({
      id: uuidv4(),
      equation,
      result,
    });
  }
}
