import {Test} from './Test.model';

export class Cuestionario {
  constructor(
    public id?: number,
    public idCuest?: number,
    public idTest?: number,
    public tiempo?: number,
    public esFactor?: string,
    public test?: Test
  ) {}
}
