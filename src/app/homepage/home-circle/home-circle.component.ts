import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CircleOfficeService } from '../../services/circle-office.service';
import { MatSelect } from '@angular/material/select';

export interface dataSource {

  v_Circle_Code:string,
  v_Circle_Name:string,
  v_Circle_Place:string,
  v_Address:string,
  n_Pincode:string,
  n_Phone:string,
  v_Email:string
}



@Component({
  selector: 'app-home',
  templateUrl: './home-circle.component.html',
  styleUrls: ['./home-circle.component.css']
})
export class HomeCircleComponent {

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['SNo','v_Circle_Code', 'v_Circle_Name', 'v_Circle_Place','v_Address','n_Pincode','n_Phone','v_Email','action'];

  @ViewChild('officeSelect') officeSelect!: MatSelect;

  ngAfterViewInit(): void {
    this.officeSelect.value = 'circleoffice';
  }

  constructor(private circleOfficeService: CircleOfficeService){
    this.getAllCircleOffices();
  }
  exportExcel() {

  }

  getAllCircleOffices() {
    const id = 123;
    this.circleOfficeService.getAllCircleOffices(id).subscribe(
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


      this.circleOfficeService.deleteCircleOffice(id)
        .subscribe(
          () => {
            alert('The Circle office data was Deleted successfully!');
            window.location.reload();

          },
          error => {
            console.log(error);
          });
    }

}
