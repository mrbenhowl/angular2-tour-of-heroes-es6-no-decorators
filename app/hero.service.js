import {heroes} from './mock-heroes';

export class HeroService {
  getHeroes() {
    return Promise.resolve(heroes);
  }

  getHero(id) {
    return Promise.resolve(heroes)
      .then(heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}