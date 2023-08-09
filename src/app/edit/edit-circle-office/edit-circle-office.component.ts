import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-edit-circle-office',
  templateUrl: './edit-circle-office.component.html',
  styleUrls: ['./edit-circle-office.component.css']
})
export class EditCircleOfficeComponent {

  id: any;
  data: any;
  myForm: FormGroup;
  message = "";
  constructor(private circleOfficeService: CircleOfficeService,private route: ActivatedRoute,private http: HttpClient, private formBuilder: FormBuilder, )
    {
    this.myForm = this.formBuilder.group({
      v_Circle_Code: ['', Validators.required],
      v_Type_Of_Circle: ['', Validators.required],
      v_Circle_Name: ['', Validators.required],
      v_Circle_Place: ['', Validators.required],
      v_Address: ['', Validators.required],
      n_Pincode: ['', Validators.required],
      v_Email: ['', Validators.required],
      n_Phone: ['', Validators.required],
      n_ID:['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getCircleOfficeData(this.id);
      console.log(this.id);
    });
  }
  getCircleOfficeData(id: any) {
    this.circleOfficeService.getCircleOffice(this.id).subscribe(
      (response) => {
        this.data = response.data;
        console.log('Response:', this.data);
        this.myForm.setValue({
          v_Circle_Code: this.data.v_Circle_Code,
          v_Type_Of_Circle: this.data.v_Type_Of_Circle,
          v_Circle_Name: this.data.v_Circle_Name,
          v_Circle_Place: this.data.v_Circle_Place,
          v_Address: this.data.v_Address,
          n_Pincode: this.data.n_Pincode,
          v_Email: this.data.v_Email,
          n_Phone: this.data.n_Phone,
          n_ID:this.id
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  saveCircleOffice() {

    this.myForm.patchValue({ n_ID: this.id });
    console.log(this.myForm.value);
    this.http.post<any>('http://localhost:8080/saveCircleOffice', this.myForm.value, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe(
      (response) => {

        console.log('Response:', response);
        alert('The Circle Data was Updated Successfully!')

      },
      (error) => {
        console.error('Error:', error);

      }
    );

}

}
