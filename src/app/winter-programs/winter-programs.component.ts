import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'winter-programs',
	templateUrl: './winter-programs.component.html',
	styleUrls: ['./winter-programs.component.css'],
})
export class WinterProgramsComponent {
	lastShowId = 'list-children';
	lastShowLabel = 'children';

	constructor() { }

	ngOnInit() {
	}

	changeTab(id, label) {
		document.getElementById(this.lastShowId).style.display = 'none';
		document.getElementById(this.lastShowLabel).classList.remove('selected');
		document.getElementById(id).style.display = 'block';
		document.getElementById(label).classList.add('selected');
		this.lastShowId = id;
		this.lastShowLabel = label;
	}
}
