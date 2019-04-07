import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-medical',
	templateUrl: './medical.component.html',
	styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

	constructor(private titleService: Title ) {
		this.titleService.setTitle('Camp It Up! Medical Information');
	}

	ngOnInit() {
	}

}
