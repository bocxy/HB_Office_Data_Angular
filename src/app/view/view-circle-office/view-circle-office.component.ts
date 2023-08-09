import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-view-circle-office',
  templateUrl: './view-circle-office.component.html',
  styleUrls: ['./view-circle-office.component.css']
})
export class ViewCircleOfficeComponent {

  id:any;
  data:any;
  constructor(private circleOfficeService: CircleOfficeService,private route: ActivatedRoute,private http: HttpClient, private formBuilder: FormBuilder, ) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getCircleOfficeData(this.id);
      console.log(this.id)
    });


  }
  getCircleOfficeData(id: any) {
    this.circleOfficeService.getCircleOffice(this.id).subscribe(
      (response) => {
this.data=response.data;
        console.log('Response:', response);

      },
      (error) => {

        console.error('Error:', error);

      }
    );
  }



}
