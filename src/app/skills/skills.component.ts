import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      //Skills section
      $('.info-skills--header').waypoint(function() {
          $('.info-skills--header').addClass('fadeInUp');
      }, { offset: '90%' });

      $('.info-skills--content').waypoint(function() {
          $('.info-skills--content').addClass('fadeInUp');
      }, { offset: '100%' });

      $('.info-skills--subheader').waypoint(function() {
          $('.info-skills--subheader').addClass('fadeInLeft');
      }, { offset: '100%' });

      $('.info-skills--frontend').waypoint(function() {
          $('.info-skills--frontend').addClass('fadeInLeft');
      }, { offset: '100%' });

      $('.info-skills--backend').waypoint(function() {
          $('.info-skills--backend').addClass('fadeInLeft');
      }, { offset: '100%' });

      $('.info-skills--other').waypoint(function() {
          $('.info-skills--other').addClass('fadeInLeft');
      }, { offset: '100%' });
  }

}
