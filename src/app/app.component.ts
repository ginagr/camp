import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, ActivationEnd } from '@angular/router';
import { Title }     from '@angular/platform-browser';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(@Inject(PLATFORM_ID) private platformId: Object, private activatedRoute : ActivatedRoute, private router: Router, private titleService: Title ) {
		this.titleService.setTitle('Camp It Up!: A Summer Camp for Queer Families');
		if (isPlatformBrowser(this.platformId)) {
			router.events.forEach((event) => {
				if (event instanceof ActivationEnd) {
					var url = this.router.url.split('/')[1];
					if (!url || url == '') { 
						document.getElementsByTagName('nav')[0].classList.remove('banner-img');
					} else if (!document.getElementsByTagName('nav')[0].classList.contains('banner-img')) {
						document.getElementsByTagName('nav')[0].classList.add('banner-img');
					}
				}
			});
		}
	}

	onActivate(event) {
		let scrollToTop = window.setInterval(() => {
			let pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20); // how far to scroll on each step
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 16);
	}
}
