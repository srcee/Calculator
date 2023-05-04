import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {CalculationModule} from './calculation/calculation.module';

@Module({
  // TODO: move the MONGODB_URI to environment variable
  imports: [MongooseModule.forRoot('mongodb://mongodb:27017/calculator'), CalculationModule],
})
export class AppModule {}
