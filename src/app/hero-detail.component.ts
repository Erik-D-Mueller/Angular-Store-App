import { Component, Input } from '@angular/core';

import { Hero } from './hero';



// The @Component decorator identifies this as a component and tells Angular to which html template to attach this logic file

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})




export class HeroDetailComponent {
  @Input() hero: Hero;
}
