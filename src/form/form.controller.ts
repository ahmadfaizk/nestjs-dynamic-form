import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Response } from './response/response';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Body() createFormDto: CreateFormDto) {
    const response = new Response(
      true,
      'Success create new form',
      await this.formService.create(createFormDto),
    );
    return response;
  }

  @Get()
  async findAll() {
    const response = new Response(
      true,
      'Success get all form',
      await this.formService.findAll(),
    );
    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = new Response(
      true,
      'Success get form',
      await this.formService.findOne(+id),
    );
    return response;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    const response = new Response(
      true,
      'Success update form',
      await this.formService.update(+id, updateFormDto),
    );
    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.formService.remove(+id);
    const response = new Response(true, 'Success delete form', null);
    return response;
  }
}
