import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}
  async create(createFormDto: CreateFormDto) {
    const form = this.formRepository.create(createFormDto);
    await this.formRepository.save(createFormDto);
    return form;
  }

  async findAll(): Promise<Form[]> {
    return await this.formRepository.find();
  }

  async findOne(id: number): Promise<Form> {
    return this.formRepository.findOne(id);
  }

  async update(id: number, updateFormDto: UpdateFormDto) {
    await this.formRepository.update({ id }, updateFormDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.formRepository.delete(id);
  }
}
