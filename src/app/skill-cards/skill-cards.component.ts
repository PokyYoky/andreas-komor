import { Component, OnInit } from '@angular/core';
import { skills } from '../skills';

@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.scss']
})
export class SkillCardsComponent implements OnInit {
  skills = skills;

  constructor() { }

  ngOnInit(): void {
  }

}
