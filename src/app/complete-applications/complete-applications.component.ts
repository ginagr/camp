import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complete-applications',
  templateUrl: './complete-applications.component.html',
  styleUrls: ['./complete-applications.component.css']
})
export class CompleteApplicationsComponent implements OnInit {

  applications: any;
  registerForm: FormGroup;
  show = 2020;

  constructor(private db: AngularFirestore, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: [this.mustMatch('password', 'confirmPassword')]
    });

    this.db.collection('applications', ref => ref.orderBy('timestamp', 'desc')).valueChanges()
      .subscribe(doc => { this.applications = doc.slice().reverse(); console.log(this.applications[0].timestamp) });
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
