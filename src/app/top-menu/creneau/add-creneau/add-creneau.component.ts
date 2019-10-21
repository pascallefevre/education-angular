import { Component, OnInit } from '@angular/core';
import {Creneau} from "../../../domain/creneau";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CreneauService} from "../../../services/creneau.service";
import {Message, MessageService} from 'primeng/api';
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ClasseService} from "../../../services/classe.service";
import {ProfService} from "../../../services/prof.service";
import {MatiereService} from "../../../services/matiere.service";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-add-creneau',
  templateUrl: './add-creneau.component.html',
  styleUrls: ['./add-creneau.component.css'],
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
export class AddCreneauComponent implements OnInit {

  creneau = new Creneau();
  formAdd: FormGroup;
  listCrenaux : Array<Creneau> = new Array<Creneau>();
  error: boolean = false;
  stringError = 'Le créneau a été ajouté.';
  sever = 'success';
  msgs: Message[] = [];


  salles = this.roomService.getAllRooms();
  profs = this.profService.getAllProfs();
  matieres = this.matService.getAllMatieres();
  classes = this.classeService.getAllClasses();

  /*// on récupère les classes
  salles = [
    {name: 'Salle 1', capacity: 12},
    {name: 'Salle 2', capacity: 20}
  ];
  // on récupère les profs
  profs = [
    {firstname: 'tata', lastname: 'tutu'},
    {firstname: 'titi', lastname: 'toto'}
  ];
  //on récupère les matières
  matieres = [
    {name: 'EPS', color: '#ff0000'},
    {name: 'SVT', color: '#0022ff'}
  ];
  // on récupère les salles
  classes = [
    {name: '2nde B', size: 15},
    {name: '1ere A', size: 18}
  ];
  */


  constructor(private fb: FormBuilder, private creneauService: CreneauService, private classeService: ClasseService, private profService : ProfService, private matService : MatiereService, private roomService: RoomService, private router: Router, private messageService: MessageService) {
    this.formAdd = fb.group({
      classe: [this.creneau.classe, Validators.required],
      startdate: [this.creneau.startdate, Validators.required],
      enddate: [this.creneau.enddate, Validators.required],
      prof: [this.creneau.prof, Validators.required],
      matiere: [this.creneau.matiere, Validators.required],
      room: [this.creneau.room, Validators.required],
    })
  }

  addCreneau() {
    console.log(this.formAdd.value.classe == null);
    this.creneauService.getAllCreneaux().then(res => this.listCrenaux = res);
      if (this.formAdd.value.startdate > this.formAdd.value.enddate) {
        console.log('ERREUR 1');
        this.error = true;
        this.stringError = 'La date du début doit être avant la date de fin.';
        this.sever = 'error';
      }
      if (this.formAdd.value.classe == null || this.formAdd.value.startdate == null || this.formAdd.value.enddate == null || this.formAdd.value.prof == null || this.formAdd.value.matiere == null || this.formAdd.value.room == null) {
        console.log(this.formAdd.value.classe + ' ERREUR 0');
        this.error = true;
        this.stringError = 'Merci de remplir tous les champs.';
        this.sever = 'error';
      }
      for (let creneau of this.listCrenaux) {
        if ((this.formAdd.value.enddate > creneau.enddate && creneau.startdate < this.formAdd.value.enddate) || (this.formAdd.value.enddate > creneau.startdate && this.formAdd.value.startdate < creneau.enddate)) {
          if (this.formAdd.value.classe == creneau.classe) {
            this.error = true;
            this.stringError = 'La classe a déjà cours à cette heure.';
            this.sever = 'error';
            console.log('ERREUR 2');
          }
          if (this.formAdd.value.room == creneau.room) {
            this.error = true;
            this.stringError = 'La salle est occupée à cette heure.';
            this.sever = 'error';
            console.log('ERREUR 3');
          }
          if (this.formAdd.value.prof == creneau.prof) {
            this.error = true;
            this.stringError = 'Le professeur a déjà cours à cette heure.';
            this.sever = 'error';
            console.log('ERREUR 4');
          }
        }
      }
      if (this.error === false) {
        this.stringError = 'Le créneau a été ajouté.';
        this.sever = 'success';
        console.log('pas derreur');
        this.creneauService.addCreneau(this.formAdd.value).then(res => {
          console.log(res)
        });
        //si on veut rediriger et/ou envoyer un signal pour actualiser la page
        //this.router.navigate(['/prof']);
        //this.sortie.emit()
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

  ngOnInit() {
  }
}
