import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

	loginMessage = 'Change Password';
	changeForm: FormGroup;

	constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
		this.changeForm = this.fb.group({
			email: ['', Validators.required ],
			oldPassword: ['',Validators.required],
			newPassword: ['',Validators.required]
		});
	}

	changePassword(value) {
		this.authService.changePassword(value)
			.then(res => {
			this.router.navigate(['/complete-applications']);
		}, err => {
			alert('Something went wrong, please email gina_g_r@yahoo.com');
		});
	}

	ngOnInit() {
	}

}
