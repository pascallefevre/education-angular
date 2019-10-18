import { Component, OnInit } from '@angular/core';
import {Matiere} from "../../../domain/matiere";
import {MatiereService} from "../../../services/matiere.service";

@Component({
  selector: 'app-show-matiere',
  templateUrl: './show-matiere.component.html',
  styleUrls: ['./show-matiere.component.css']
})
export class ShowMatiereComponent implements OnInit {

  matList: Array<Matiere> = new Array<Matiere>();

  constructor(private matService: MatiereService) {
    this.matService.getAllMatieres().then(res => {this.matList = res;})
  }

  ngOnInit() {
  }

}
