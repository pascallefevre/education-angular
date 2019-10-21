import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../../../services/classe.service";
import {Classe} from "../../../domain/classe";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProfService} from "../../../services/prof.service";
import {Prof} from "../../../domain/prof";
import {Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }
    `],
  providers: [MessageService]
})
export class AddClasseComponent implements OnInit {

  classe = new Classe();
  formAdd: FormGroup;
  selectedPp: string;

  error: boolean = false;
  stringError = 'La classe a été ajoutée.';
  sever = 'success';
  msgs: Message[] = [];


  profList: Array<Prof> = new Array<Prof>();
  prof = new Prof();
  profCaract = this.profService.getAllProfs();

  constructor(private fb: FormBuilder, private classeService: ClasseService, private profService: ProfService, private router: Router, private messageService: MessageService) {
    this.formAdd = fb.group({
      name: [this.classe.name, Validators.required],
      size: [this.classe.size, Validators.required],
      pp: [this.classe.pp, Validators.required],
    })
  }


  addClasse() {
    if (this.formAdd.value.name == null || this.formAdd.value.size == null || this.formAdd.value.pp == null) {
      this.error = true;
      this.stringError = 'La classe n\'a pas été ajoutée, veuillez remplir tous les champs.';
      this.sever = 'error';
    }
    else {
    this.classeService.addClasse(this.formAdd.value).then(res => {
      console.log(res)
      //si on veut rediriger et/ou envoyer un signal pour actualiser la page
      //this.router.navigate(['/prof']);
      //this.sortie.emit()
    })
  }
    this.addSingle();
    this.error = false;
    console.log('avant');
    this.delay(this.messageService);
  }

  delay(msg: any) {
    setTimeout(function () {
      msg.clear();
      console.log('après');
    }, 3000);
  }

  addSingle() {
    this.messageService.add({severity:this.sever, summary:this.stringError, detail:''});
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
