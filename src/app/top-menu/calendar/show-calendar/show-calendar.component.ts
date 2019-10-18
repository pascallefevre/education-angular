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

  creneauList: Array<Creneau> = new Array<Creneau>();
  events = [
    {
      "title": "All Day Event",
      "start": "2016-01-01"
    },
    {
      "title": "Long Event",
      "start": "2016-01-07",
      "end": "2016-01-10"
    },
    {
      "title": "Repeating Event",
      "start": "2016-01-09T16:00:00"
    },
    {
      "title": "Repeating Event",
      "start": "2016-01-16T16:00:00"
    },
    {
      "title": "Conference",
      "start": "2016-01-11",
      "end": "2016-01-13"
    }
  ];

  options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2019-10-01',
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    }
  };

  constructor(private creneauService: CreneauService) {
    // this.creneauService.getAllCreneaux().then(res => {this.creneauList = res;});
  }

  ngOnInit(){

  }
}
