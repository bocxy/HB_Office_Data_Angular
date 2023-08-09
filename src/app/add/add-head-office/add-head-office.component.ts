import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CircleOfficeService } from 'src/app/services/circle-office.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-head-office',
  templateUrl: './add-head-office.component.html',
  styleUrls: ['./add-head-office.component.css']
})
export class AddHeadOfficeComponent {

  myForm: FormGroup;
  constructor(private circleOfficeService: CircleOfficeService,private http: HttpClient, private formBuilder: FormBuilder, ) {

    this.myForm = this.formBuilder.group({
      v_Office_Code: '',
      v_HeadOffice_Name: '',
      v_HeadOffice_Place: '',
      v_Address: '',
      n_Pincode: '',
      n_Phone: '',
      v_Email: '',
    });
  }

  saveHeadOffice(): void {

    const formValue = this.myForm.value;
    this.circleOfficeService.saveHeadOffice(formValue).subscribe(
      (response) => {
        console.log('Saved division Office:', response);
        alert('The Head Office data was added successfully!');
        window.location.reload();
      },
      (error) => {
        console.error('Error while saving Circle Office:', error);
      }
    );
  }

}
