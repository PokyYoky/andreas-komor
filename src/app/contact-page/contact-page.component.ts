import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('fieldName') fieldName!: ElementRef;
  @ViewChild('fieldEmail') fieldEmail!: ElementRef;
  @ViewChild('fieldMessage') fieldMessage!: ElementRef;
  @ViewChild('btnSend') btnSend!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {
    console.log('Sending email', this.myForm);

    let fdName = this.fieldName.nativeElement;
    let fdMail = this.fieldEmail.nativeElement;
    let fdMessage = this.fieldMessage.nativeElement;
    let btnSend = this.btnSend.nativeElement;

    this.disableElements(fdName, fdMail, fdMessage, btnSend);

    //send a mail
    let fData = new FormData();
    fData.append('name', fdName.value);
    fData.append('email', fdMail.value);
    fData.append('message', fdMessage.value);

    await fetch('https://andreas-komor.developerakademie.net/MailEngine/send_mail.php',
      {
        method: 'POST',
        body: fData 
      }
    );

    //user message


    this.enableElements(fdName, fdMail, fdMessage, btnSend);
  }


  disableElements(fdName: any, fdMail: any, fdMessage: any, btnSend: any): void {
    fdName.disabled = true;
    fdMail.disabled = true;
    fdMessage.disabled = true;
    btnSend.disabled = true;
  }

  enableElements(fdName: any, fdMail: any, fdMessage: any, btnSend: any): void {
    fdName.disabled = false;
    fdMail.disabled = false;
    fdMessage.disabled = false;
    btnSend.disabled = false;
  }
}