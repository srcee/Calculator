import {Body, Controller, Get, Post} from '@nestjs/common';
import {CalculationService} from './calculation.service';
import {Calculation} from './schemas/calculation.schema';
import {CreateCalculationDto} from './dto/create-calculation.dto';

@Controller('calculation')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Get()
  async getAll(): Promise<Calculation[]> {
    return this.calculationService.getAll();
  }

  @Post()
  async createOne(@Body() createCalculationDto: CreateCalculationDto): Promise<Calculation> {
    const {equation, result} = createCalculationDto;
    return this.calculationService.createOne(equation, result);
  }
}
