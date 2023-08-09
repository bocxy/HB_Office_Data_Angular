import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { CircleOfficeService } from 'src/app/services/circle-office.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-circle-office',
  templateUrl: './add-circle-office.component.html',
  styleUrls: ['./add-circle-office.component.css']
})
export class AddCircleOfficeComponent {

  myForm: FormGroup;

  constructor(private circleOfficeService: CircleOfficeService,private http: HttpClient, private formBuilder: FormBuilder, ) {

    this.myForm = this.formBuilder.group({
      v_Circle_Code: '',
      v_Circle_Name: '',
      v_Type_Of_Circle: '',
      v_Circle_Place: '',
      v_Address: '',
      n_Pincode: '',
      n_Phone: '',
      v_Email: '',
    });
  }

  saveCircleOffice(): void {

    const formValue = this.myForm.value;
    this.circleOfficeService.saveCircleOffice(formValue).subscribe(
      (response) => {
        console.log('Saved Circle Office:', response);
        alert('The Circle data was added successfully!');
        window.location.reload();
      },
      (error) => {
        console.error('Error while saving Circle Office:', error);
      }
    );
  }

}
