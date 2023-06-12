import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { UpdatePopUpComponent } from '../update-pop-up/update-pop-up.component';

@Component({
  selector: 'app-user-lising',
  templateUrl: './user-lising.component.html',
  styleUrls: ['./user-lising.component.css']
})
export class UserLisingComponent {

  constructor(private service:AuthService, private dialog:MatDialog) { 
    this.loadUser();
  }
  displayedColumns: string[] = ['userName', 'name', 'Email','Role', 'Status', 'Actions'];
  userList:any;
  dataSource:any;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


  loadUser(){
    this.service.GetAll().subscribe((res:any)=>{
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  UpdateUser(id:any){

    

  }
  openDialog(id:any) {
   const popup= this.dialog.open(UpdatePopUpComponent, {
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data: {id:id}
    })
    popup.afterClosed().subscribe(res=>{
      this.loadUser();
    }
    )
  }
}
