import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RoomService} from "../../../services/room.service";
import {Room} from "../../../domain/room";

@Component({
  selector: 'app-modify-room',
  templateUrl: './modify-room.component.html',
  styleUrls: ['./modify-room.component.css']
})
export class ModifyRoomComponent implements OnInit {

  @Input() room = new Room();
  formAdd: FormGroup;
  roomId: number;

  constructor(private fb: FormBuilder, private roomService: RoomService, private router: Router) {
    this.roomId = this.room.id;
    this.roomService.getOneRoom(this.roomId).then(res => {
      this.room = res;
    })
    this.formAdd = fb.group({
      name: [this.room.name, Validators.required],
      capacity: [this.room.capacity, Validators.required],
    })
  }

  deleteRoom(){
    this.roomService.deleteRoom(this.roomId).then(res => {
        console.log(res)
      }
    )
  }

  updateRoom(){
    if(this.formAdd.valid){
      this.room = this.formAdd.value
      this.room.id = this.roomId
      this.roomService.updateRoom(this.room).then(res => {
        console.log(res)
      })
    }
  }

  ngOnInit() {
  }

}
