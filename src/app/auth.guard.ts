import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth'; 
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { }

	canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
		return new Promise((resolve, reject) => {
			var t = this;
			var user = firebase.auth().onAuthStateChanged(user => {
				if (user) {
					resolve(true);
				} else {
					this.router.navigate(['/home']);
					reject(false)
				}
			});
		});
	}
}
