import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import $ from 'jquery';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	i = 0;
	txt = [
		"  is a LGBTIQA+ family vacation",
		" is for families like yours",
		" a place to be yourself",
		" Summer Dates: July 27 - August 4, 2019", 
	];
	index = 0;
	speed = 50;
	timeouts = [];

	slides = [
		'./assets/front-image-2.jpg',
		'./assets/front-image-3.jpg',
		'./assets/front-image-4.jpg',
		'./assets/centralcamp.jpg',
		'./assets/emptytent.jpg'
	];
	gallery = [
		'./assets/gallery-1.jpg',
		'./assets/gallery-2.jpg',
		'./assets/gallery-3.jpg',
		'./assets/gallery-4.jpg',
		'./assets/gallery-5.jpg',
		'./assets/gallery-6.jpg',
		'./assets/gallery-7.jpg',
		'./assets/gallery-8.jpg'
	]
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {   }

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			var $videoSrc;  
			$('.video-btn').click(function() {
				$videoSrc = $(this).data("src");
				var url = $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1";
				$("#video").attr('src', url); 
			});
			$('.close').click(function () {
				$("#video").attr('src', $videoSrc); 
			});
			$(".carousel.lazy").on("slide", function(ev) {
				console.log('in');
				var lazy = $(ev.relatedTarget).find("img[data-src]");
				lazy.attr("src", lazy.data('src'));
				lazy.removeAttr("data-src");
			});
			$('.carousel.lazy').on('slide.bs.carousel', function () {
				console.log("Slide Event");
				//console.log('slid event');
			});
			setTimeout(this.typeWriter.bind(this), 1000);
		}
	}

	ngOnDestroy() {
		if (this.timeouts.length > 0) {
			console.log('clearing timeouts');
			for (var t of this.timeouts) {
				clearTimeout(t);
			}
		}
	}

	typeWriter() {
		if (this.i < this.txt[this.index].length) {
			var t = this;
			$('.type').each(function() {
				$(this).append(t.txt[t.index].charAt(t.i));
			});
			this.i++;
			this.timeouts[0] = setTimeout(this.typeWriter.bind(this), this.speed);
		} else {
			this.i = 0;
			this.timeouts[1] = setTimeout(this.deleteWriter.bind(this), 2000);
		}
	}

	deleteWriter() {
		if (this.i < this.txt[this.index].length) {
			$('.type').each(function() {
				$(this).html($(this).html().slice(0, -1));
			});
			this.i++;
			this.timeouts[2] = setTimeout(this.deleteWriter.bind(this), this.speed);
		} else if (this.index == this.txt.length-1) {
			this.index = 0;
			this.i = 0;
			this.timeouts[3] = setTimeout(this.typeWriter.bind(this), 1500);
		} else {
			this.index++;
			this.i = 0;
			this.timeouts[4] = setTimeout(this.typeWriter.bind(this), 1500);
		}
	}
}
