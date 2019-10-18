import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../domain/room";


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  //A modifier
  private url: string = "http://localhost:8081/aserver/rooms/"

  constructor(private http: HttpClient) { }

  getAllRooms():Promise<Array<Room>> {
    return this.http.get(this.url).toPromise().then(response => response as Array<Room>)
  }

  addRoom(room: Room): Promise<Room> {
    return this.http.post(this.url, room).toPromise().then(response => response as Room);
  }

  updateRoom(room: Room): Promise<Room> {
    return this.http.put(this.url, room).toPromise().then(response => response as Room);
  }

  deleteRoom(id: number): Promise<Room>{
    return this.http.delete(this.url+id).toPromise().then(response => response as Room);
  }

  getOneRoom(id : number):Promise<Room> {
    return this.http.get(this.url+id).toPromise().then(response => response as Room);
  }
}
