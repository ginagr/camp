import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  timeinterval: any;
  daysSpan: { innerHTML: any; };
  hoursSpan: { innerHTML: string; };
  minutesSpan: { innerHTML: string; };
  secondsSpan: { innerHTML: string; };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // this.updateClock();
      // this.timeinterval = setInterval(this.updateClock, 1000);
    }
  }

  updateClock() {
    const clock = document.getElementById('clockdiv');
    this.daysSpan = clock.querySelector('.days');
    this.hoursSpan = clock.querySelector('.hours');
    this.minutesSpan = clock.querySelector('.minutes');
    this.secondsSpan = clock.querySelector('.seconds');

    const diff = new Date(2020, 6, 25, 0, 0, 0, 0).getTime() - new Date().getTime();
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const t = {
      // 'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };

    this.daysSpan.innerHTML = t.days;
    this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    // if (t.total <= 0) {
    // 	clearInterval(this.timeinterval);
    // }
  }
}
