import { Component, OnInit } from '@angular/core';
import {Prof} from "../../../domain/prof";
import {ProfService} from "../../../services/prof.service";

@Component({
  selector: 'app-show-prof',
  templateUrl: './show-prof.component.html',
  styleUrls: ['./show-prof.component.css']
})
export class ShowProfComponent implements OnInit {

  profList: Array<Prof> = new Array<Prof>();

  constructor(private profService: ProfService) {
    this.profService.getAllProfs().then(res => {this.profList = res;})
    console.log(this.profList)
  }

  ngOnInit() {
  }

}
