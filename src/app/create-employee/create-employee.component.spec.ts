import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let span: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

  });

  xit('check email', () => {
    let email = component.employeeForm.get('email');

    expect(email.errors['required']).toBeTruthy();


    console.log(component.employeeForm);
    email.setValue('a');
    expect(email.errors['minlength']).toBeTruthy();
    expect(email.errors['email']).toBeTruthy();
    email.setValue('acc');
    expect(email.errors['minlength']).toBeFalsy();
    expect(email.errors['email']).toBeTruthy();
    email.setValue('a@hotmail.com');
    expect(email.valid).toBeTruthy();
  })
  xit('check email', () => {

    fixture.detectChanges();

    console.log(fixture.debugElement.query(By.css('#span-fullName')).nativeElement.textContent, "***************************");
    // expect(spn).toContain('required');
  })
  xit('check form', () => {
    expect(component.employeeForm.valid).toBeFalsy();
  })
  xit('ede', () => {
    component.employeeForm.get('email').setValue('e@hotmail.com');
    console.log(component.employeeForm.get('email').value);
    component.employeeForm.get('fullName').setValue('e@ho');
    console.log(component.employeeForm.get('fullName').value);
    component.employeeForm.get('skill').get('skillName').setValue('e@hotmail.com');
    console.log(component.employeeForm.get('skill').get('skillName').value)
    component.employeeForm.get('skill').get('experienceInYears').setValue('experienceInYears');
    console.log(component.employeeForm.get('skill').get('experienceInYears').value);
    component.employeeForm.get('skill').get('proficiency').setValue('beginner');
    console.log(component.employeeForm.get('skill').get('proficiency').value)
    expect(component.employeeForm.valid).toBeTruthy();

  })
  it('ed', () => {
    let email = component.employeeForm.get('email');

    component.employeeForm.get('email').markAsDirty();

    component.logValidationErrors(component.employeeForm);

    expect(component.formErrors.email).toContain('Email is required');
    fixture.detectChanges();
    console.log(fixture.debugElement.query(By.css('#span-email')).nativeElement.textContent);

  })
});

