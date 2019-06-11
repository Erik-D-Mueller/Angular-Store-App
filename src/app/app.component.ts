
// This is the root component called "App.Component".
// This component represents the entire application visually, all other componenets are a child of this.
// It does not appear to have a connected class-logic piece the way that sub-components do, perhaps it's not required.
// The .ts file extension is for typescript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hero-list></app-hero-list>
    <app-sales-tax></app-sales-tax>
  `
})
export class AppComponent { }
