import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  validationMessages = {
    fullName: {
      required: 'Full Name is required.',
      minlength: 'Full Name must be greater than 2 characters.',
      maxlength: 'Full Name must be less than 10 characters.'
    },
    email: {
      email: 'Email is email.',
      required: 'Email is required.',
      minlength: "min is 2"
    },
    skillName: {
      required: 'Skill Name is required.',
    },
    experienceInYears: {
      required: 'Experience is required.',
    },
    proficiency: {
      required: 'Proficiency is required.',
    },
  };
  formErrors = {
    fullName: '',
    email: '',
    skillName: '',
    experienceInYears: '',
    proficiency: ''
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(2)]],
      skill: this.fb.group({
        skillName: ["", [Validators.required]],
        experienceInYears: ["", Validators.required,],
        proficiency: ["", Validators.required]
      })
    })

    this.employeeForm.valueChanges.subscribe(value => {
      this.logValidationErrors(this.employeeForm)
    })
  }
  loadData() {
    // this.employeeForm.setValue({
    //   fullName: "yahya",
    //   email: "yahya@hotmail.com",
    //   skill: {
    //     skillName: "info",
    //     experienceInYears: "5",
    //     proficiency: "beginner"
    //   }

    // })
    // console.log(this.employeeForm.get('email'));
    // this.logValidationErrors(this.employeeForm);
    // console.log(this.formErrors);
  }
  logValidationErrors(group: FormGroup = this.employeeForm) {
    Object.keys(group.controls).forEach((key => {
      let abstratControl = group.get(key);
      if (abstratControl instanceof FormGroup) {
        this.logValidationErrors(abstratControl);
      } else {
        this.formErrors[key] = ''
        if (abstratControl && !abstratControl.valid && (abstratControl.touched || abstratControl.dirty)) {

          let messages = this.validationMessages[key];
          for (const errorKey in abstratControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }

    }))
  }
  submitform() {
    console.log(this.employeeForm.value.fullName);
  }

}
