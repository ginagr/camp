import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-complete-applications',
	templateUrl: './complete-applications.component.html',
	styleUrls: ['./complete-applications.component.css']
})
export class CompleteApplicationsComponent implements OnInit {

	applications: any;

	constructor(private router: Router, private db: AngularFirestore, private afAuth: AngularFireAuth) {
		this.db.collection('applications', ref=> ref.orderBy('timestamp', 'desc')).valueChanges()
			.subscribe(doc => { this.applications = doc; });
	}

	ngOnInit() { }
}