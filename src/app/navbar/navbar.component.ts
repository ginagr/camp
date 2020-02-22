import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actives = [false, false, false, false, false, false, false, false];
  old = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

  ngOnInit() { }

  changeActive(active) {
    //		var url = this.router.url.split('/')[1];
    if (active == -1) {
      this.actives[this.old] = false;
      this.old = 0;
    } else {
      this.actives[this.old] = false;
      this.actives[active] = true;
      this.old = active;
    }
  }

  reloadWeather() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(function () { window.location.reload(); }, 100);
    }
  }
}
