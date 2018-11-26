import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
	selector: 'app-pledge-form',
	templateUrl: './pledge-form.component.html',
	styleUrls: ['./pledge-form.component.css']
})
export class PledgeFormComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

	print() {
//		var doc = document.getElementById('pdf');
//		if (typeof doc.print === 'undefined') {    
//			setTimeout(function(){
//				print();
//			}, 1000);
//		} else {
//			doc.print();
//		}
	}

}
