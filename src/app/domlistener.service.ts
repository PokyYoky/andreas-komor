import { Injectable } from '@angular/core';

//this service listens to DOM
@Injectable({
  providedIn: 'root'
})
export class DOMListenerService {

  constructor() { }

  //returns the smallest of width/height
  get VMin(): number {
    return Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth);
  }

  //returns the largest of width/height
  get VMax(): number {
    return Math.max(document.documentElement.clientHeight, document.documentElement.clientWidth);
  }
}