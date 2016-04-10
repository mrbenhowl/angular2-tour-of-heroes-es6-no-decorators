import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroDetailComponent} from 'app/hero-detail.component';
import {HeroService} from 'app/hero.service.js';

let componentAnnotation = new Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: ['app/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
});
export class HeroesComponent {

  constructor(heroService, router) {
      this.heroes = [];
      this.selectedHero = undefined;
      this.heroService = heroService;
      this.router = router;
  };

  onSelect(hero) {
    console.log('hello');
    this.selectedHero = hero;
  };

  getHeroes() {
     var that = this;
      this.heroService.getHeroes()
      .then(function(heroes){
         that.heroes = heroes;
      });
  };

  ngOnInit() {
    this.getHeroes()
  };

  gotoDetail(){
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this.router.navigate(link);
  };

  static get parameters() {
    console.log('static get parameters() from heroes.component');
    return [[HeroService], [Router]];
  };
}

HeroesComponent.annotations = [componentAnnotation];
// because this relies on the service from AppComponent, that component has HeroService as a 'provider'
