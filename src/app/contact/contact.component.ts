import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact/contact.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  model = new Contact('','','');

  constructor() {}

  ngOnInit() {
    $('.info-contact--header').waypoint(function() {
        $('.info-contact--header').addClass('fadeInUp');
    }, { offset: '90%' });

    $('.info-contact--subheader').waypoint(function() {
        $('.info-contact--subheader').addClass('fadeInDown');
    }, { offset: '90%' });

    $('.info-contact--content').waypoint(function() {
        $('.info-contact--content').addClass('fadeInUp');
    }, { offset: '100%' });
  }

  get currentForm() {
    return JSON.stringify(this.model);
  }

  openSidePanel() {
      window.open("mailto:gurveerdhindsa@hotmail.com?cc=&subject=website&body=test");

    //document.getElementById("form").style.width = "700px";
  }

  closeSidePanel() {
    document.getElementById("form").style.width = "0";
  }

  submitForm() {


//    console.log("NAME: ", this.model.name);
//    console.log("EMAIL: ", this.model.email);
//    console.log("DESCRIPTIOn: ", this.model.message);
//
//    fetch('/send', {
//        method: 'POST',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify({
//            name: this.model.name,
//            email: this.model.email,
//            message: this.model.message
//        })
//    })
//    .then((res) => res.json())
//    .then((res) => {
//        console.log("This is the response: ", res);
//    })
//    .catch((err) => {
//        console.error("This is the error: ", err);
//    })
  }
}
