import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
	selector: 'app-campaign',
	templateUrl: './campaign.component.html',
	styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

	constructor(private titleService: Title) {
		this.titleService.setTitle('Join the CAMPaign!');
	}

	ngOnInit() {
	}

}
