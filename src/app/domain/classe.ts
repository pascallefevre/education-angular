import {Prof} from "./prof";

export class Classe {

  constructor(private _id?: number, private _name?: string, private _size?: number, private _pp?: Prof) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get pp(): Prof {
    return this._pp;
  }

  set pp(value: Prof) {
    this._pp = value;
  }
}
