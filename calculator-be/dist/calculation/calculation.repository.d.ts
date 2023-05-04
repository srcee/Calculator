import { Model, FilterQuery } from 'mongoose';
import { Calculation, CalculationDocument } from './schemas/calculation.schema';
export declare class CalculationRepository {
    private calculationModel;
    constructor(calculationModel: Model<CalculationDocument>);
    find(calculationFilterQUery: FilterQuery<Calculation>): Promise<Calculation[]>;
    create(calculation: Calculation): Promise<Calculation>;
}
