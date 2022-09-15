import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {
  @Input() userMessage: string = ''; 
  @Input() loadUserMessage: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
