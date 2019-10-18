import { Component, OnInit } from '@angular/core';
import {Room} from "../../../domain/room";
import {RoomService} from "../../../services/room.service";


@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.css']
})
export class ShowRoomComponent implements OnInit {

  roomList: Array<Room> = new Array<Room>();

  constructor(private roomService: RoomService) {
    this.roomService.getAllRooms().then(res => {this.roomList = res;})
  }

  ngOnInit() {
  }

}
