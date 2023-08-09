import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { CircleOfficeService } from 'src/app/services/circle-office.service';


export interface dataSource {

  v_Office_Code:string,
  v_HeadOffice_Name:string,
  v_HeadOffice_Place:string,
  v_Address:string,
  n_Pincode:string,
  n_Phone:string,
  v_Email:string
}



@Component({
  selector: 'app-home',
  templateUrl: './home-Head.component.html',
  styleUrls: ['./home-Head.component.css']
})
export class HomeHeadComponent {

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo','v_Office_Code', 'v_HeadOffice_Name', 'v_HeadOffice_Place','v_Address','n_Pincode','n_Phone','v_Email','action'];
  @ViewChild('officeSelect') officeSelect!: MatSelect;

  ngAfterViewInit(): void {
    this.officeSelect.value = 'headoffice';
  }

  constructor(private circleOfficeService: CircleOfficeService,){
    this.getAllHeadOffice();
  }
  exportExcel() {

  }

  getAllHeadOffice() {
    const id = 123;
    this.circleOfficeService.getAllHeadOffice(id).subscribe(
      (response) => {
        console.log('Response:', response);

        if (response && Array.isArray(response.data)) {
          this.dataSource.data = response.data;
        } else {
          console.error('Invalid response format or missing data array.');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  Delete(id: number): void {


    this.circleOfficeService.deleteHeadOffice(id)
      .subscribe(
        () => {
          alert('The HeadOffice data was Deleted successfully!');
          window.location.reload();

        },
        error => {
          console.log(error);
        });
  }

}
