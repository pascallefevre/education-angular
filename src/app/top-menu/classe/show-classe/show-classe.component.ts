import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../../../services/classe.service";
import {Classe} from "../../../domain/classe";
import {Prof} from "../../../domain/prof";

@Component({
  selector: 'app-show-classe',
  templateUrl: './show-classe.component.html',
  styleUrls: ['./show-classe.component.css']
})
export class ShowClasseComponent implements OnInit {

  classeList: Array<Classe> = new Array<Classe>();

  constructor(private classeService: ClasseService) {
    this.classeService.getAllClasses().then(res => {this.classeList = res;})
  }

  ngOnInit() {
  }

}
