import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes/heroes.component.js';
import {HeroDetailComponent} from './hero-detail.component.js';
import {DashboardComponent} from './dashboard.component.js';
import {HeroService} from './hero.service.js';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

let componentAnnotation = new Component({

  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
});

let routeConfig = new RouteConfig(
  [
    {
      path: '/heroes',
      name: 'Heroes',
      component: HeroesComponent
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true
    },
    {
      path: '/detail/:id',
      name: 'HeroDetail',
      component: HeroDetailComponent
    }
  ]
);

export class AppComponent {

  constructor() {
    this.title = 'Tour of Heroes';
  };

  static get parameters() {
    return [[HeroService], [Router]];
  };

};

AppComponent.annotations = [componentAnnotation, routeConfig];
