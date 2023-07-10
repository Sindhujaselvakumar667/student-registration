import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('look_up')
export class AcademyLookup {
  @PrimaryColumn('int')
  id: number;

  @Column('text')
  lookupName: string;

  @Column('json')
  lookupData: Record<string, any>;
}
