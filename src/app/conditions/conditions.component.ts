import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-conditions',
	templateUrl: './conditions.component.html',
	styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

	constructor(private titleService: Title ) {
		this.titleService.setTitle('Camp It Up! Conditions');
	}

	ngOnInit() {
	}

}
