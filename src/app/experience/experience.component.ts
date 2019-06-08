import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      //Experience section
      $('.info-experience--header').waypoint(function() {
          $('.info-experience--header').addClass('fadeInUp');
      }, { offset: '90%' });

      $('.info-experience--subheader').waypoint(function() {
          $('.info-experience--subheader').addClass('fadeInDown');
      }, { offset: '90%' });

      $('.info-experience--rbc').waypoint(function() {
          $('.info-experience--rbc').addClass('fadeInUp');
      }, { offset: '100%' });

      $('.info-experience--hsbc').waypoint(function() {
          $('.info-experience--hsbc').addClass('fadeInUp');
      }, { offset: '100%' });

      $('.info-experience--hoc').waypoint(function() {
          $('.info-experience--hoc').addClass('fadeInUp');
      }, { offset: '100%' });

      $('.info-experience--nrc').waypoint(function() {
          $('.info-experience--nrc').addClass('fadeInUp');
      }, { offset: '100%' });
  }

}
