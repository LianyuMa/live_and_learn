import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  // title = 'Tour of Heroes';
  // hero = 'windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'windstorm',
  // };
  heroes : Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { };

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  // Take it slow
  // getHeroesSlowly() {
  //   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  // }

  // ngOnInit() {
  //   this.getHeroesSlowly();
  // }


  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id }])
  }
}
