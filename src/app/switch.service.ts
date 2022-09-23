import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  state: boolean = false;
  constructor() { }

  //get state
  get status(): boolean {
    return this.state;
  }

  //set state
  set status(val: boolean) {
    this.state = val;
  }
}
