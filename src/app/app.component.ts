import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, ActivationEnd } from '@angular/router';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Camp It Up!';

	constructor(@Inject(PLATFORM_ID) private platformId: Object, private activatedRoute : ActivatedRoute, private router: Router) {
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

}
