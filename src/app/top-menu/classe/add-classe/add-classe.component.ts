import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../../../services/classe.service";
import {Classe} from "../../../domain/classe";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProfService} from "../../../services/prof.service";
import {Prof} from "../../../domain/prof";

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classe = new Classe();
  formAdd: FormGroup;
  selectedPp: string;

  profList: Array<Prof> = new Array<Prof>();
  prof = new Prof();
  profCaract =this.profService.getAllProfs();

  constructor(private fb: FormBuilder, private classeService: ClasseService, private profService: ProfService, private router: Router) {
    this.formAdd = fb.group({
      name: [this.classe.name, Validators.required],
      size: [this.classe.size, Validators.required],
      pp: [this.classe.pp, Validators.required],
    })


  }


  addClasse() {
    if (this.formAdd.valid) {
      this.classeService.addClasse(this.formAdd.value).then(res => {
        console.log(res)
        //si on veut rediriger et/ou envoyer un signal pour actualiser la page
        //this.router.navigate(['/prof']);
        //this.sortie.emit()
      })
    }
  }

  clickProf(){

  }

  ngOnInit() {
  /*  do{
      this.profService.getAllProfs().then(res => {this.profList = res;});
      console.log('on attend');
    } while(this.profList == []);
    //console.log(this.profList[1].firstname)
    for (let prof of this.profList){
      this.profCaract.push({
        id: prof.id,
        firstname: prof.firstname,
        lastname: prof.lastname,
        birthdate: prof.birthdate
      })
    }*/
  }

}
