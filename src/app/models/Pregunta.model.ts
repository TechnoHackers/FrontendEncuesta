import {Cuestionario} from './Cuestionario.model';

export class Pregunta {
  constructor(
    public idPreg?: number,
    public idCues?: number,
    public nomPre?: any,
    public a1?: any,
    public a2?: any,
    public a3?: any,
    public a4?: any,
    public a5?: any,
    public a6?: any,
    public cuestionario?: Cuestionario,
    public nombreCuestionario?: string
  )
  {}

}
