import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

@Component({
  selector: 'app-view-division-office',
  templateUrl: './view-division-office.component.html',
  styleUrls: ['./view-division-office.component.css']
})
export class ViewDivisionOfficeComponent {

  id:any;
  data:any;

  constructor(private circleOfficeService: CircleOfficeService,private route: ActivatedRoute,private http: HttpClient, private formBuilder: FormBuilder, ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getDivisionOfficeData(this.id);
      console.log(this.id)
    });


  }

  getDivisionOfficeData(id: any) {
    this.circleOfficeService.getDivisionOffice(this.id).subscribe(
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
