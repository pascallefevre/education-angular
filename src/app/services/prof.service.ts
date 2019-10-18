import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prof} from "../domain/prof";

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  //A modifier
  private url: string = "http://localhost:8081/aserver/profs/"

  constructor(private http: HttpClient) { }

  getAllProfs():Promise<Array<Prof>> {
    return this.http.get(this.url).toPromise().then(response => response as Array<Prof>)
  }

  addProf(prof: Prof): Promise<Prof> {
    return this.http.post(this.url, prof).toPromise().then(response => response as Prof);
  }

  updateProf(prof: Prof): Promise<Prof> {
    return this.http.put(this.url, prof).toPromise().then(response => response as Prof);
  }

  deleteProf(id: number): Promise<Prof>{
    return this.http.delete(this.url+id).toPromise().then(response => response as Prof);
  }

  getOneProf(id : number):Promise<Prof> {
    return this.http.get(this.url+id).toPromise().then(response => response as Prof);
  }
}
