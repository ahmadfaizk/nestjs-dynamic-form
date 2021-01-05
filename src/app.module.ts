import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';

@Module({
  imports: [TypeOrmModule.forRoot(), FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
