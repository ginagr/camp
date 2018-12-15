import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationExtras } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	actives = [ false, false, false, false, false, false, false ];
	old = 0;

	constructor(private router: Router) { 
	}

	ngOnInit() {
	}

	changeActive(active) {
		var url = this.router.url.split('/')[1];
//		console.log(url);
//		if ()
		this.actives[this.old] = false;
		this.actives[active] = true;
		this.old = active;
	}

	reloadWeather () {
		setTimeout(function(){window.location.reload(); }, 100);
	}
}
