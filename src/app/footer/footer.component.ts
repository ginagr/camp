import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	timeinterval;
	daysSpan;
	hoursSpan;
	minutesSpan;
	secondsSpan;

	constructor() { 

	}

	ngOnInit() {
		this.updateClock();
		this.timeinterval = setInterval(this.updateClock, 1000);
	}

	updateClock() {
		var clock = document.getElementById('clockdiv');
		this.daysSpan = clock.querySelector('.days');
		this.hoursSpan = clock.querySelector('.hours');
		this.minutesSpan = clock.querySelector('.minutes');
		this.secondsSpan = clock.querySelector('.seconds');

		var diff = new Date(2019, 6, 27, 0, 0, 0, 0).getTime() - new Date().getTime();
		var seconds = Math.floor((diff / 1000) % 60);
		var minutes = Math.floor((diff / 1000 / 60) % 60);
		var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		var t = {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

		this.daysSpan.innerHTML = t.days;
		this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if (t.total <= 0) {
			clearInterval(this.timeinterval);
		}
	}
}
