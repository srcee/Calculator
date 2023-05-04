import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {Calculation, CalculationSchema} from './schemas/calculation.schema';
import {CalculationService} from './calculation.service';
import {CalculationController} from './calculation.controller';
import {CalculationRepository} from './calculation.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Calculation.name, schema: CalculationSchema}])],
  providers: [CalculationService, CalculationRepository],
  controllers: [CalculationController],
})
export class CalculationModule {}
