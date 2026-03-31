import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private service: StudentService) {
    
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      rollNumber: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numberOfUsers: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });

  }

  submit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);

      this.service.createStudent(this.studentForm.value).subscribe((res: any) => {
        console.log("data sent");
      });

    } else {
      alert("form is not valid");
    }
  }
}