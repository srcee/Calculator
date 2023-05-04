import { CalculationRepository } from './calculation.repository';
import { Calculation } from './schemas/calculation.schema';
export declare class CalculationService {
    private readonly calculationRepository;
    constructor(calculationRepository: CalculationRepository);
    getAll(): Promise<Calculation[]>;
    createOne(equation: string, result: string): Promise<Calculation>;
}
