import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
declare var $ :any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var typed = new Typed('#typed', {
          stringsElement: '#welcome-message',
          typeSpeed: 55
      });


    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){

        });
      }

      //Remove up to '#' in the URL, keeps uniform path
      window.location.href.split('#')[0]
    });
  }
}
