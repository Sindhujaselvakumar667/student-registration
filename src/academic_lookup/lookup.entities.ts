import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('look_up')
export class AcademyLookup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lookupName: string;

  @Column('json')
  lookupData: Record<string, any>;
}
