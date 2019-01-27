import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	i = 0;
	txt = [
		"  is for families like yours",
		" is a LGBTQ friendly family vacation",
		" is a place to be yourself",
		" Summer Dates: July 27 - August 4, 2019", 
	];
	first = true;
	index = 0;
	speed = 70;

	constructor() {  
		this.typeWriter();
	}

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

	typeWriter() {
		if (this.i < this.txt[this.index].length) {
			var t = this;
			$('.type').each(function() {
				$(this).append(t.txt[t.index].charAt(t.i));
			});
			//			document.getElementById("type").innerHTML += this.txt[this.index].charAt(this.i);
			this.i++;
			setTimeout(this.typeWriter.bind(this), this.speed);
		} else {
			this.i = 0;
			setTimeout(this.deleteWriter.bind(this), 2000);
		}
	}

	deleteWriter() {
		if (this.i < this.txt[this.index].length) {
			//			$('#type').html
			$('.type').each(function() {
				$(this).html($(this).html().slice(0, -1));
			});
			//			document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, -1);
			this.i++;
			setTimeout(this.deleteWriter.bind(this), this.speed);
		} else if (this.index == this.txt.length-1) {
			this.index = 0;
			this.i = 0;
			this.typeWriter();
		} else {
			this.index++;
			this.i = 0;
			this.typeWriter();
		}
	}


}
