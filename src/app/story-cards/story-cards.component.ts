import { Component, OnInit } from '@angular/core';
import { stories } from '../stories';

@Component({
  selector: 'app-story-cards',
  templateUrl: './story-cards.component.html',
  styleUrls: ['./story-cards.component.scss']
})
export class StoryCardsComponent implements OnInit {
  stories = stories; 

  constructor() { }

  ngOnInit(): void {
  }
}