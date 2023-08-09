import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-view-head-office',
  templateUrl: './view-head-office.component.html',
  styleUrls: ['./view-head-office.component.css']
})
export class ViewHeadOfficeComponent {

  id:any;
  data:any;
  constructor(private circleOfficeService: CircleOfficeService,private route: ActivatedRoute,private http: HttpClient, private formBuilder: FormBuilder, ) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getHeadOfficeData(this.id);
      console.log(this.id)
    });


  }
  getHeadOfficeData(id: any) {
    this.circleOfficeService.getHeadOffice(this.id).subscribe(
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
