import {Component, NgModule, OnInit} from '@angular/core';
import {Creneau} from "../../../domain/creneau";
import {CreneauService} from "../../../services/creneau.service";
import {Calendar} from "primeng/calendar";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.css']
})
export class ShowCalendarComponent implements OnInit {

  creList: Array<Creneau> =new Array<Creneau>();
  e: any = [];



  events: any = [ ];

  options = {
    defaultView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2019-10-01',
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    }
  };

  constructor(private creService: CreneauService) {



  }

    loadevents(res:any){
      console.log(res);
      this.events=[];
      for(let elem of res)
      {
        let event=
          {
            title: elem.matiere.name+ ' {' +elem.prof.lastname+ '}in'+ elem.room.name + ':' + elem.classe.name,
            start: elem.startdate,
            end: elem.enddate,
            color: elem.matiere.color
          };

        this.events.push(event);
      }
      console.log("==>",this.events);
    }



  ngOnInit(){
    this.creService.getAllCreneaux().then(res => {this.loadevents(res)});
  }



}
