import { FormType } from '../entities/form.entity';

export class CreateFormDto {
  name: string;
  type: FormType;
  mandatory: boolean;
  placeholder: string;
  sources: string[];
}
