import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classe} from "../domain/classe";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  //A modifier
  private url: string = "http://localhost:8081/aserver/classes/"

  constructor(private http: HttpClient) { }

  getAllClasses():Promise<Array<Classe>> {
    return this.http.get(this.url).toPromise().then(response => response as Array<Classe>)
  }

  addClasse(classe: Classe): Promise<Classe> {
    return this.http.post(this.url, classe).toPromise().then(response => response as Classe);
  }

  updateClasse(classe: Classe): Promise<Classe> {
    return this.http.put(this.url, classe).toPromise().then(response => response as Classe);
  }

  deleteClasse(id: number): Promise<Classe>{
    return this.http.delete(this.url+id).toPromise().then(response => response as Classe);
  }

  getOneClasse(id : number):Promise<Classe> {
    return this.http.get(this.url+id).toPromise().then(response => response as Classe);
  }
}
