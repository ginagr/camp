import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	actives = [ false, false, false, false, false, false, false ];
	old = 0;

	constructor() { 
		$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
		$('#cssmenu #menu-button').on('click', function(){
			var menu = $(this).next('ul');
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			} else {
				menu.addClass('open');
			}
		});
	}

	ngOnInit() {
	}

	changeActive(active) {
		this.actives[this.old] = false;
		this.actives[active] = true;
		this.old = active;
	}

}
