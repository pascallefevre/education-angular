import { Component, OnInit } from '@angular/core';
import {Room} from "../../../domain/room";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room = new Room();
  formAdd: FormGroup;

  constructor(private fb: FormBuilder, private roomService: RoomService, private router: Router) {
    this.formAdd = fb.group({
      name: [this.room.name, Validators.required],
      capacity: [this.room.capacity, Validators.required],
    })
  }

  addRoom() {
    console.log(this.formAdd.value);
    if (this.formAdd.valid) {
      this.roomService.addRoom(this.formAdd.value).then(res => {
        console.log(res)
        //si on veut rediriger et/ou envoyer un signal pour actualiser la page
        //this.router.navigate(['/prof']);
        //this.sortie.emit()
      })
    }
  }

  ngOnInit() {
  }

}
