import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //About section
        $('.info-about--header').waypoint(function() {
            $('.info-about--header').addClass('fadeInUp');
        }, { offset: '90%' });

        $('.info-about--description').waypoint(function() {
            $('.info-about--description').addClass('fadeInLeft');
        }, { offset: '100%' });

        $('.info-about--image').waypoint(function() {
            $('.info-about--image').addClass('fadeInRight');
        }, { offset: '100%' });

  }

}
