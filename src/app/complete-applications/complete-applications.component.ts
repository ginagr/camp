import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-complete-applications',
	templateUrl: './complete-applications.component.html',
	styleUrls: ['./complete-applications.component.css']
})
export class CompleteApplicationsComponent implements OnInit {

	applications: any;
	registerForm: FormGroup;

	constructor(private router: Router, private db: AngularFirestore, private afAuth: AngularFireAuth, private fb: FormBuilder) {
		this.registerForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, {
				validator: [this.mustMatch('password', 'confirmPassword')]
			});

		this.db.collection('applications', ref => ref.orderBy('timestamp', 'desc')).valueChanges()
			.subscribe(doc => { this.applications = doc.slice().reverse(); });
	}

	ngOnInit() { }

	tryRegister(value) {
		firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
			.then(_ => alert('added new profile'), err => console.error('error', err));
	}

	mustMatch(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];
			if (matchingControl.errors && !matchingControl.errors.mustMatch) { return; }
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ mustMatch: true });
			} else { matchingControl.setErrors(null); }
		};
	}
}
