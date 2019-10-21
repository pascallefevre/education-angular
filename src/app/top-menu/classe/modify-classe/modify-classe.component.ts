import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClasseService} from "../../../services/classe.service";
import {Classe} from "../../../domain/classe";
import {Prof} from "../../../domain/prof";
import {ProfService} from "../../../services/prof.service";

@Component({
  selector: 'app-modify-classe',
  templateUrl: './modify-classe.component.html',
  styleUrls: ['./modify-classe.component.css']
})
export class ModifyClasseComponent implements OnInit {

  @Input() classe = new Classe();
  formAdd: FormGroup;
  classeId: number;
  profList: Array<Prof> = new Array<Prof>();
  profCaract = this.profService.getAllProfs();
  classeList: Array<Classe> = new Array<Classe>();
  selectedPp: string;

  constructor(private fb: FormBuilder, private classeService: ClasseService, private profService: ProfService, private router: Router) {
    this.classeId = this.classe.id;
    this.classeService.getOneClasse(this.classeId).then(res => {
      this.classe = res;
    })
    this.formAdd = fb.group({
      name: [this.classe.name, Validators.required],
      size: [this.classe.size, Validators.required],
      pp: [this.classe.pp, Validators.required],
    })
    this.profService.getAllProfs().then(res => {this.profList = res})
  }

  deleteClasse(){
    this.classeService.deleteClasse(this.classeId).then(res => {
        console.log(res)
      }
    )
  }

  updateClasse(){
    if(this.formAdd.valid){
      this.classe = this.formAdd.value
      this.classe.id = this.classeId
      this.classeService.updateClasse(this.classe).then(res => {
        console.log(res)
      })
    }
  }

  ngOnInit() {
   /* for (let prof of this.profList){
      this.profCaract.push({
        id: prof.id,
        firstname: prof.firstname,
        lastname: prof.lastname,
        birthdate: prof.birthdate
      })
    }*/
  }

}
