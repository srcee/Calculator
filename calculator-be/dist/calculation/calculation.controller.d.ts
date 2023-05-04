import { CalculationService } from './calculation.service';
import { Calculation } from './schemas/calculation.schema';
import { CreateCalculationDto } from './dto/create-calculation.dto';
export declare class CalculationController {
    private readonly calculationService;
    constructor(calculationService: CalculationService);
    getAll(): Promise<Calculation[]>;
    createOne(createCalculationDto: CreateCalculationDto): Promise<Calculation>;
}
