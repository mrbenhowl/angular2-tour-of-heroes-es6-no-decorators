import {Component} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

let componentAnnotation = new Component({
  selector: 'my-hero-detail',
  styleUrls: ['app/hero-detail.component.css'],
  templateUrl: 'app/hero-detail.component.html'
});
export class HeroDetailComponent {

  constructor(heroservice, routeparams) {
    console.log('heroDetailComponent constructor called');
    this.heroservice = heroservice;
    this.routeparams = routeparams;
  }

  ngOnInit(){
    let id = +this.routeparams.get('id');
    this.heroservice.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

  static get parameters(){
    return [[HeroService], [RouteParams]];
  }
}

HeroDetailComponent.annotations = [componentAnnotation];