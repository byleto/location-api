import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'locations',
})
export class Locations extends Model {
  @Column(DataType.STRING)
    name!: string | '';
  @Column(DataType.STRING)
  latitude: string | undefined;
  @Column(DataType.STRING)
  longitude: string | undefined;
}
