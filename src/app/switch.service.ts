import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  #state: boolean = false;
  constructor() { }

  //get state
  get state(): boolean {
    return this.#state;
  }

  //set state
  set state(val: boolean) {
    this.#state = val;
  }
}
