import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	constructor(private titleService: Title) {
		this.titleService.setTitle('Meet the Camp It Up! Board of Directors');
	}

	ngOnInit() {
	}

}
