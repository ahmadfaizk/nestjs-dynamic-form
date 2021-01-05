import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum FormType {
  Text = 'text',
  TextArea = 'text_area',
  Number = 'number',
  Date = 'date',
  Switch = 'switch',
  Radio = 'radio',
  Dropdown = 'dropdown',
}

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: FormType,
  })
  type: FormType;

  @Column()
  mandatory: boolean;

  @Column()
  placeholder: string;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  sources: string[];
}
