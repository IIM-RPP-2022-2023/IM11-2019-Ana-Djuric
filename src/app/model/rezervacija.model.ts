import { Film } from "./film.model";
import { Sala } from './sala.model';

export class Rezervacija {
  id!: number;
  brojOsoba!: number;
  cenaKarte!: number;
  datum!: Date;
  placeno!: boolean;
  film!: Film;
  sala!: Sala;
}