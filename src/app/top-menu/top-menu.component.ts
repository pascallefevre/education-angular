import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu,[app-top-menu]',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  items = [
    {
      label: 'Calendrier', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Afficher le calendrier', routerLink: ['/calendar/show']}]
          },
        ],
      ]
    },
    {
      label: 'Créneau horaire', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Ajouter un créneau', routerLink: ['/creneau/add']}]
          },
        ],
      ]
    },
    {
      label: 'Classe', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Ajouter une classe', routerLink: ['/classe/add']}]
          },
          {
            items: [{label: 'Afficher les classes', routerLink: ['/classe/show']}]
          }
        ]
      ]
    },
    {
      label: 'Professeurs', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Ajouter un professeur', routerLink: ['/prof/add']}]
          },
          {
            items: [{label: 'Afficher les professeurs', routerLink: ['/prof/show']}]
          }
        ],
      ]
    },
    {
      label: 'Matières', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Ajouter une matière', routerLink: ['/matiere/add']}]
          },
          {
            items: [{label: 'Afficher les matières', routerLink: ['/matiere/show']}]
          }
        ],
      ]
    },
    {
      label: 'Salles', icon: 'fa fa-fw fa-check',
      items: [
        [
          {
            items: [{label: 'Ajouter une salle', routerLink: ['/salle/add']}]
          },
          {
            items: [{label: 'Afficher les salle', routerLink: ['/salle/show']}]
          }
        ],
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
