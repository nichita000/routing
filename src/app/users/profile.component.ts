import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    profile #{{id}}
  `
})
export class ProfileComponent {

  id: string;

  constructor(
    private _route: ActivatedRoute,
  ) {
    this.id = this._route.snapshot.params['id'];
  }
}
