import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var $videoSrc;  
		$('.video-btn').click(function() {
			$videoSrc = $(this).data("src");
			var url = $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1";
			$("#video").attr('src', url); 
		});
		$('.close').click(function () {
			$("#video").attr('src', $videoSrc); 
		});
	}
}
