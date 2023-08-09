import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { CircleOfficeService } from 'src/app/services/circle-office.service';

export interface dataSource {
  N_ID:number,
  v_Division_Code:string,
  v_Division_Name:string,
  v_Division_Place:string,
  v_Address:string,
  n_Pincode:string,
  n_Phone:string,
  v_Email:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home-division.component.html',
  styleUrls: ['./home-division.component.css']
})
export class HomeDivisionComponent {

  id:any;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo','v_Division_Code', 'v_Division_Name', 'v_Division_Place','v_Address','n_Pincode','n_Phone','v_Email','action'];
  @ViewChild('officeSelect') officeSelect!: MatSelect;

  ngAfterViewInit(): void {
    this.officeSelect.value = 'divisionoffice';
  }

  constructor(private circleOfficeService: CircleOfficeService,){
    this.getAllDivisions();
  }
  exportExcel() {

  }

  getAllDivisions() {
    const id = 123;
    this.circleOfficeService.getAllDivisions(id).subscribe(
      (response) => {
        console.log('Response:', response);

        if (response && Array.isArray(response.data)) {
          this.dataSource.data = response.data;
          console.log(this.dataSource.data)
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


    this.circleOfficeService.deleteDivisionOffice(id)
      .subscribe(
        () => {
          alert('The Division office data was Deleted successfully!');
          window.location.reload();

        },
        error => {
          console.log(error);
        });
  }

}
