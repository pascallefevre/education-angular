import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Matiere} from "../domain/matiere";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  //A modifier
  private url: string = "http://localhost:8081/aserver/matieres/"

  constructor(private http: HttpClient) { }

  getAllMatieres():Promise<Array<Matiere>> {
    return this.http.get(this.url).toPromise().then(response => response as Array<Matiere>)
  }

  addMatiere(matiere: Matiere): Promise<Matiere> {
    return this.http.post(this.url, matiere).toPromise().then(response => response as Matiere);
  }

  updateMatiere(matiere: Matiere): Promise<Matiere> {
    return this.http.put(this.url, matiere).toPromise().then(response => response as Matiere);
  }

  deleteMatiere(id: number): Promise<Matiere>{
    return this.http.delete(this.url+id).toPromise().then(response => response as Matiere);
  }

  getOneMatiere(id : number):Promise<Matiere> {
    return this.http.get(this.url+id).toPromise().then(response => response as Matiere);
  }
}
