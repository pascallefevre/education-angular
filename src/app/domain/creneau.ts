import {Prof} from "./prof";
import {Matiere} from "./matiere";
import {Room} from "./room";
import {Classe} from "./classe";

export class Creneau {

  constructor(private _id?: number, private _classe?: Classe, private _startdate?: Date, private _enddate?: Date, private _prof?: Prof, private _matiere?: Matiere, private _room?: Room) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get classe(): Classe {
    return this._classe;
  }

  set classe(value: Classe) {
    this._classe = value;
  }

  get startdate(): Date {
    return this._startdate;
  }

  set startdate(value: Date) {
    this._startdate = value;
  }

  get enddate(): Date {
    return this._enddate;
  }

  set enddate(value: Date) {
    this._enddate = value;
  }

  get prof(): Prof {
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  get room(): Room {
    return this._room;
  }

  set room(value: Room) {
    this._room = value;
  }
}
