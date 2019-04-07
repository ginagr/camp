import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
declare var $;

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
		if (isPlatformBrowser(this.platformId)) {
			var $videoSrc = 'https://www.youtube.com/embed/-j9aAV16cFU';  
			$('#videoModal').on('shown.bs.modal', _ => { $("#video").attr('src', `${$videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`) });
			$('#videoModal').on('hide.bs.modal', _ => { $("#video").attr('src', $videoSrc) });
		}
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