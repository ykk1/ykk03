import { guardedExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { NAVS } from './data';
import { Navs } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navs = NAVS;

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

  checknav: Navs | null = null;

  oncss(n: Navs) {
    this.checknav = n;
    if (this.checknav.active) {
      n.active = false;
    } else {
      n.active = true;
    }
  }
}


