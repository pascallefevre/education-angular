import { Component, OnInit } from '@angular/core';
import {ProfService} from "../../../services/prof.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prof} from "../../../domain/prof";

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.css']
})
export class AddProfComponent implements OnInit {

  prof = new Prof();
  formAdd: FormGroup;

  constructor(private fb: FormBuilder, private profService: ProfService, private router: Router) {
    this.formAdd = fb.group({
      firstname: [this.prof.firstname, Validators.required],
      lastname: [this.prof.lastname, Validators.required],
      birthdate: [this.prof.birthdate, Validators.required],
    })
  }

  addProf() {
    console.log(this.formAdd.value);
    if(this.formAdd.valid){
      this.profService.addProf(this.formAdd.value).then(res=> {
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
