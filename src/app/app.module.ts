import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";
import {Calendar, CalendarModule} from "primeng/calendar";
import {ColorPickerModule} from "primeng/colorpicker";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FullCalendar, FullCalendarModule} from "primeng/fullcalendar";
import {ToastModule} from "primeng/toast";
import {QuillModule} from "ngx-quill";
import {ProfComponent} from "./top-menu/prof/prof.component";
import {ClasseComponent} from "./top-menu/classe/classe.component";
import {MatiereComponent} from "./top-menu/matiere/matiere.component";
import {RoomComponent} from "./top-menu/room/room.component";
import {CalendarComponent} from "./top-menu/calendar/calendar.component";
import {CreneauComponent} from "./top-menu/creneau/creneau.component";
import {AddClasseComponent} from "./top-menu/classe/add-classe/add-classe.component";
import {ModifyClasseComponent} from "./top-menu/classe/modify-classe/modify-classe.component";
import {ShowClasseComponent} from "./top-menu/classe/show-classe/show-classe.component";
import {AddProfComponent} from "./top-menu/prof/add-prof/add-prof.component";
import {ModifyProfComponent} from "./top-menu/prof/modify-prof/modify-prof.component";
import {ShowProfComponent} from "./top-menu/prof/show-prof/show-prof.component";
import {AddMatiereComponent} from "./top-menu/matiere/add-matiere/add-matiere.component";
import {ModifyMatiereComponent} from "./top-menu/matiere/modify-matiere/modify-matiere.component";
import {ShowMatiereComponent} from "./top-menu/matiere/show-matiere/show-matiere.component";
import {AddRoomComponent} from "./top-menu/room/add-room/add-room.component";
import {ModifyRoomComponent} from "./top-menu/room/modify-room/modify-room.component";
import {ShowRoomComponent} from "./top-menu/room/show-room/show-room.component";
import {ShowCalendarComponent} from "./top-menu/calendar/show-calendar/show-calendar.component";
import {AddCreneauComponent} from "./top-menu/creneau/add-creneau/add-creneau.component";
import {
  DataGridModule,
  MegaMenuModule,
  MenuItemContent,
  MessageModule,
  MessagesModule,
  TabMenuModule
} from "primeng/primeng";
import {LeftMenuComponent} from "./left-menu/left-menu.component";
import {TopMenuComponent} from "./top-menu/top-menu.component";


const routes: Routes = [
  {path: 'classe', component: ClasseComponent},
  {path: 'classe/add', component: AddClasseComponent},
  {path: 'classe/modify', component: ModifyClasseComponent},
  {path: 'classe/show', component: ShowClasseComponent},

  {path: 'prof', component: ProfComponent},
  {path: 'prof/add', component: AddProfComponent},
  {path: 'prof/modify', component: ModifyProfComponent},
  {path: 'prof/show', component: ShowProfComponent},

  {path: 'matiere', component: MatiereComponent},
  {path: 'matiere/add', component: AddMatiereComponent},
  {path: 'matiere/modify', component: ModifyMatiereComponent},
  {path: 'matiere/show', component: ShowMatiereComponent},

  {path: 'salle', component: RoomComponent},
  {path: 'salle/add', component: AddRoomComponent},
  {path: 'salle/modify', component: ModifyRoomComponent},
  {path: 'salle/show', component: ShowRoomComponent},

  {path: 'calendar', component: CalendarComponent},
  {path: 'calendar/show', component: ShowCalendarComponent},

  {path: 'creneau', component: CreneauComponent},
  {path: 'creneau/add', component: AddCreneauComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    TopMenuComponent,
    ClasseComponent,
    AddClasseComponent,
    ModifyClasseComponent,
    ShowClasseComponent,
    ProfComponent,
    AddProfComponent,
    ModifyProfComponent,
    ShowProfComponent,
    MatiereComponent,
    AddMatiereComponent,
    ModifyMatiereComponent,
    ShowMatiereComponent,
    RoomComponent,
    AddRoomComponent,
    ModifyRoomComponent,
    ShowRoomComponent,
    CalendarComponent,
    ShowCalendarComponent,
    CreneauComponent,
    AddCreneauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
    ColorPickerModule,
    InputTextModule,
    DropdownModule,
    FullCalendarModule,
    ToastModule,
    TabMenuModule,
    QuillModule,
    MegaMenuModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
