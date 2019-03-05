import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	constructor(public db: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) { }

	doLogin(value) {
		return new Promise<any>((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(value.email, value.password)
				.then(res => {
				resolve(res);
			}, err => reject(err))
		})
	}

	changePassword(value) {
		return new Promise<any>((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(value.email, value.oldPassword)
				.then(res => {
				firebase.auth().currentUser.updatePassword(value.newPassword).then(_ => {
					resolve(true);
				}).catch(error => {
					alert('Could not update password, please email gina_g_r@yahoo.com');
					reject(false)
				});
			}, err => {
				alert('Could not update password, please email gina_g_r@yahoo.com');
				reject(err);
			});
		});
	}

}
