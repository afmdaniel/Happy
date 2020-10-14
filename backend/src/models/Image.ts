/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphange => orphange.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
