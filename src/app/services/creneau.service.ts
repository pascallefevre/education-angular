import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classe} from "../domain/classe";
import {Creneau} from "../domain/creneau";

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  //A modifier
  private url: string = "http://localhost:8081/aserver/creneaux/"

  constructor(private http: HttpClient) { }

  getAllCreneaux():Promise<Array<Creneau>> {
    return this.http.get(this.url).toPromise().then(response => response as Array<Creneau>)
  }

  addCreneau(creneau: Creneau): Promise<Creneau> {
    return this.http.post(this.url, creneau).toPromise().then(response => response as Creneau);
  }

  deleteCreneau(id: number): Promise<Creneau>{
    return this.http.delete(this.url+id).toPromise().then(response => response as Creneau);
  }

  getOneCreneau(id : number):Promise<Creneau> {
    return this.http.get(this.url+id).toPromise().then(response => response as Creneau);
  }
}
