import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-add-division-office',
  templateUrl: './add-division-office.component.html',
  styleUrls: ['./add-division-office.component.css']
})
export class AddDivisionOfficeComponent {

  myForm: FormGroup;
  constructor(private circleOfficeService: CircleOfficeService,private http: HttpClient, private formBuilder: FormBuilder, ) {

    this.myForm = this.formBuilder.group({
      v_Division_Code: '',
      v_Division_Name: '',
      v_Select_Circle: '',
      v_Division_Place: '',
      v_Address: '',
      n_Pincode: '',
      n_Phone: '',
      v_Email: '',
    });
  }

  saveDivisionsOffice(): void {

    const formValue = this.myForm.value;
    this.circleOfficeService.saveDivisionsOffice(formValue).subscribe(
      (response) => {
        console.log('Saved division Office:', response);
        alert('The Division data was added successfully!');
        window.location.reload();
      },
      (error) => {
        console.error('Error while saving Circle Office:', error);
      }
    );
  }

}
