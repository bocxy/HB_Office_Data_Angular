import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-edit-division-office',
  templateUrl: './edit-division-office.component.html',
  styleUrls: ['./edit-division-office.component.css']
})
export class EditDivisionOfficeComponent {

  id: any;
  data: any;
  myForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private circleOfficeService: CircleOfficeService,
    private http: HttpClient
  ) {
    this.myForm = this.formBuilder.group({
      v_Division_Code: ['', Validators.required],
      v_Select_Circle: ['', Validators.required],
      v_Division_Name: ['', Validators.required],
      v_Division_Place: ['', Validators.required],
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
      this.getDivisionOfficeData(this.id);
      console.log(this.id);
    });
  }

  getDivisionOfficeData(id: any) {
    this.circleOfficeService.getDivisionOffice(this.id).subscribe(
      (response) => {
        this.data = response.data;
        console.log('Response:', this.data);
        this.myForm.setValue({
          v_Division_Code: this.data.v_Division_Code,
          v_Select_Circle: this.data.v_Select_Circle,
          v_Division_Name: this.data.v_Division_Name,
          v_Division_Place: this.data.v_Division_Place,
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

  saveDivisionsOffice() {

      this.myForm.patchValue({ n_ID: this.id });
      console.log(this.myForm.value);
      this.http.post<any>('http://localhost:8080/saveDivisionsOffice', this.myForm.value, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe(
        (response) => {

          console.log('Response:', response);
          alert('The Division Data was Updated Successfully!')

        },
        (error) => {
          console.error('Error:', error);

        }
      );

  }
}













