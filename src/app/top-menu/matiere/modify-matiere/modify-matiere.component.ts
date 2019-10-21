import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Matiere} from "../../../domain/matiere";
import {MatiereService} from "../../../services/matiere.service";

@Component({
  selector: 'app-modify-matiere',
  templateUrl: './modify-matiere.component.html',
  styleUrls: ['./modify-matiere.component.css']
})
export class ModifyMatiereComponent implements OnInit {

  @Input() matiere = new Matiere();
  formAdd: FormGroup;
  matId: number;
  color: String = '{{matiere.color}}'

  constructor(private fb: FormBuilder, private matService: MatiereService, private router: Router) {
    this.matId = this.matiere.id;
    this.matService.getOneMatiere(this.matId).then(res => {
      this.matiere = res;
    })
    this.formAdd = fb.group({
      name: [this.matiere.name, Validators.required],
      color: [this.matiere.color, Validators.required],
    })
  }

  deleteMatiere(){
    this.matService.deleteMatiere(this.matId).then(res => {
        console.log(res)
      }
    )
  }

  updateMatiere(){
    if(this.formAdd.valid){
      this.matiere = this.formAdd.value
      this.matiere.id = this.matId
      this.matService.updateMatiere(this.matiere).then(res => {
        console.log(res)
      })
    }
  }

  ngOnInit() {
  }

}
