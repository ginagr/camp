import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
	selector: 'summer-programs',
	templateUrl: './summer-programs.component.html',
	styleUrls: ['./summer-programs.component.css']
})
export class SummerProgramsComponent implements OnInit {
	lastShowId = 'list-children';
	lastShowLabel = 'children';

	constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

	ngOnInit() {
	}

	changeTab(id, label) {
		if (isPlatformBrowser(this.platformId)) {
			document.getElementById(this.lastShowId).style.display = 'none';
			document.getElementById(this.lastShowLabel).classList.remove('selected');
			document.getElementById(id).style.display = 'block';
			document.getElementById(label).classList.add('selected');
			this.lastShowId = id;
			this.lastShowLabel = label;
		}
	}

}
