import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  registerForm: FormGroup;
  applyMsg = 'Apply!';
  education = [{ name: '', field: '', degree: '' }];
  employment = [{
    employer: '', address: '', city: '', state: '',
    zip: '', duties: '', leaving: '', supervisor: '', contact: '', duration: ''
  }];

  constructor(private fb: FormBuilder, private db: AngularFirestore, private titleService: Title) {
    this.titleService.setTitle('Join the Camp It Up! Team');
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phone: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactTime: ['', Validators.required],
      programStaffDir: [''],
      programDir: [''],
      citDir: [''],
      snrcounselor: [''],
      jrcounselor: [''],
      specialist: [''],
      cit: [''],
      other: [''],
      childAttend: ['false', Validators.required],
      attendCampYears: ['0', Validators.required],
      campTypeFamily: [''],
      campTypeOvernight: [''],
      campTypeDayCamp: [''],
      attendCIU: ['false', Validators.required],
      campStaff: ['false', Validators.required],
      arts: [''],
      sports: [''],
      outdoor: [''],
      performing: [''],
      nature: [''],
      water: [''],
      otherSkills: [''],
      artsCert: [''],
      sportsCert: [''],
      outdoorCert: [''],
      performingCert: [''],
      natureCert: [''],
      waterCert: [''],
      otherSkillsCert: [''],
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: [''],
      refName1: ['', Validators.required],
      refRelation1: ['', Validators.required],
      refPhone1: ['', Validators.required],
      refEmail1: ['', [Validators.required, Validators.email]],
      refName2: ['', Validators.required],
      refRelation2: ['', Validators.required],
      refPhone2: ['', Validators.required],
      refEmail2: ['', [Validators.required, Validators.email]],
      refName3: ['', Validators.required],
      refRelation3: ['', Validators.required],
      refPhone3: ['', Validators.required],
      refEmail3: ['', [Validators.required, Validators.email]],
      pronouns: [''],
      prefname: ['']
    });
  }

  addEducation() {
    this.education.push({ name: '', field: '', degree: '' });
  }

  deleteEducation(index: number) {
    this.education.splice(index, 1);
  }

  addEmployment() {
    this.employment.push({
      employer: '', address: '', city: '', state: '',
      zip: '', duties: '', leaving: '', supervisor: '', contact: '', duration: ''
    });
  }

  deleteEmployment(index: number) {
    this.employment.splice(index, 1);
  }

  tryRegister() {
    this.applyMsg = 'Saving...';
    if (!this.registerForm.invalid) {
      const application = this.registerForm.value;
      application['timestamp'] = new Date();
      application['employment'] = this.employment;
      application['education'] = this.education;
      this.db.collection('applications').add({ ...application })
        .then(() => {
          alert('Thank you for applying, we have successfully saved your application and will get back to you soon!');
          this.createForm();
        }).catch(err => {
          console.error('Error saving application: ', err);
          alert('Something went wrong saving your application, please try again or email info@campitup.org.');
        });
    } else {
      alert('Looks like you didn\'t fill in all of the sections, please finish then try again.' +
        'If you think this is a mistake, please email the Director at info@campitup.org');
    }
  }
}
