import {Component, Input, OnInit} from '@angular/core';
import {Prof} from "../../../domain/prof";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfService} from "../../../services/prof.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-prof',
  templateUrl: './modify-prof.component.html',
  styleUrls: ['./modify-prof.component.css']
})
export class ModifyProfComponent implements OnInit {

  @Input() prof = new Prof();
  formAdd: FormGroup;
  profId: number;

  constructor(private fb: FormBuilder, private profService: ProfService, private router: Router) {
    this.profId = this.prof.id;
    this.profService.getOneProf(this.profId).then(res => {this.prof = res;
    })
    this.formAdd = fb.group({
      firstname: [this.prof.firstname, Validators.required],
      lastname: [this.prof.lastname, Validators.required],
      birthdate: [this.prof.birthdate, Validators.required],
    })
  }

  deleteProf(){
    this.profService.deleteProf(this.profId).then(res => {
        console.log(res)
      }
    )
  }

  updateProf(){
    if(this.formAdd.valid){
      this.prof = this.formAdd.value
      this.prof.id = this.profId
      this.profService.updateProf(this.prof).then(res => {
        console.log(res)
      })
    }
  }

  ngOnInit() {
  }

}
