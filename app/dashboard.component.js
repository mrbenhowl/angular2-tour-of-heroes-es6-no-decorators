import {Component} from 'angular2/core';
import {HeroService} from './hero.service.js';
import {Router} from 'angular2/router';

let componentAnnotation = new Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html'
});

export class DashboardComponent {

  constructor(heroService, router) {
    this.heroService = heroService;
    this.heroes = [];
    this.router = router;
  };

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  };

  gotoDetail(hero){
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }

  static get parameters() {
    console.log('static get parameters() from dashboard.component');
    return [[HeroService], [Router]];
  };
}

DashboardComponent.annotations = [componentAnnotation];
