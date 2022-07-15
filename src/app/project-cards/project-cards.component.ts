import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit {
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
