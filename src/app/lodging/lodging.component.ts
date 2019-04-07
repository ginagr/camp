import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-lodging',
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {

	constructor(private titleService: Title ) {
		this.titleService.setTitle('Camp It Up! Housing and Lodging');
	}

	ngOnInit() {
	}

}
