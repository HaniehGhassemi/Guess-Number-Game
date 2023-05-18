import { Module } from '@nestjs/common';
import { GuessNumberController } from './guess-number.controller';
import { GuessNumberService } from './guess-number.service';

@Module({
  controllers: [GuessNumberController],
  providers: [GuessNumberService]
})
export class GuessNumberModule {}
