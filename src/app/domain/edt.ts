import {Creneau} from "./creneau";

export class Edt {

  constructor(private _listcreneau?:Array<Creneau>) {}

  get listcreneau(): Array<Creneau> {
    return this._listcreneau;
  }

  set listcreneau(value: Array<Creneau>) {
    this._listcreneau = value;
  }
}
