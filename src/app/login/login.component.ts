import { Component } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent {

	loginForm: FormGroup;
	errorMessage: string = '';
	loginMessage = 'Login';

	constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
		this.createForm();
	}

	createForm() {
		this.loginForm = this.fb.group({
			email: ['', Validators.required ],
			password: ['',Validators.required]
		});
	}

	tryLogin(value) {
		this.loginMessage = 'Logging in...';
		this.authService.doLogin(value)
			.then(res => {
			this.router.navigate(['/complete-applications']);
		}, err => {
			console.log(err);
			this.errorMessage = err.message;
			this.loginMessage = 'Login';
		});
	}
}
