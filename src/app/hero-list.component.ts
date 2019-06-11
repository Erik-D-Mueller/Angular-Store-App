import { Component, OnInit }   from '@angular/core';
import { Hero }                from './hero';
import { HeroService }         from './hero.service';



// This designates this a component and includes some metadata
@Component({
  selector:    'app-hero-list',                 //  This assignes that the components view should be displayed whenever tag "app-hero-list" is found in the html template
  templateUrl: './hero-list.component.html',    // This declares to which HTML template this component should attach
  providers:  [ HeroService ]                   //
})


// We define a component's application logic (what it does to support the view) inside a class. 
// The class interacts with the view through an API of properties and methods

export class HeroListComponent implements OnInit {
  heroes: Hero[];                                         // array of heroes
  selectedHero: Hero;

  constructor(private service: HeroService) { }


  ngOnInit() {
    this.heroes = this.service.getHeroes();  //
  }


  selectHero(hero: Hero) { this.selectedHero = hero; }  //The selectHero() method sets a selectedHero property when the user clicks to choose a hero from that list.
}
