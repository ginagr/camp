import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
	selector: 'winter-programs',
	templateUrl: './winter-programs.component.html',
	styleUrls: ['./winter-programs.component.css'],
})
export class WinterProgramsComponent {
	lastShowId = 'list-children';
	lastShowLabel = 'children';

	constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			// Client only code.
		}
		if (isPlatformServer(this.platformId)) {
			// Server only code.
		}
	}

	changeTab(id, label) {
		//		$('#' + this.lastShowId).css('display', 'none');
		//		$('#' + this.lastShowLabel).removeClass('selected');
		//		$('#' + id).css('display', 'block');
		//		$('#' + label).addClass('selected');

		document.getElementById(this.lastShowId).style.display = 'none';
		document.getElementById(this.lastShowLabel).classList.remove('selected');
		document.getElementById(id).style.display = 'block';
		document.getElementById(label).classList.add('selected');
		this.lastShowId = id;
		this.lastShowLabel = label;
	}
}
