import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-careers',
	templateUrl: './careers.component.html',
	styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

	constructor(private titleService: Title) {
		this.titleService.setTitle('Join the Camp It Up! Team');
	}

	ngOnInit() {
	}

}
