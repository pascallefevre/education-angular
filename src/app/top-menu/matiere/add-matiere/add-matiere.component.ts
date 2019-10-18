import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Matiere} from "../../../domain/matiere";
import {Router} from "@angular/router";
import {MatiereService} from "../../../services/matiere.service";

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  matiere = new Matiere();
  formAdd: FormGroup;

  constructor(private fb: FormBuilder, private matService: MatiereService, private router: Router) {
    this.formAdd = fb.group({
      name: [this.matiere.name, Validators.required],
      color: [this.matiere.color, Validators.required],
    })
  }

  addMatiere() {
    console.log(this.formAdd.value);
    if (this.formAdd.valid) {
      this.matService.addMatiere(this.formAdd.value).then(res => {
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
