import { guardedExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { NIAVS } from './data';
import { Niavs } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  niavs = NIAVS;

  shouldShow = false;

  score = 50;

  s = true;

  show() {
    this.s = !this.s
    return false;
  }
  onToggle() {
    this.shouldShow = !this.shouldShow;
    return false;
  }

  grade() {
    return this.score / 10;
  }

  checknav: Niavs | null = null;

  oncss(n: Niavs) {
    this.checknav = n;
    if (this.checknav.active) {
      n.active = false;
    } else {
      n.active = true;
    }
  }
}


