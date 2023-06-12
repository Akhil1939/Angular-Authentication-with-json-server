import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.css'],
})
export class UpdatePopUpComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private service: AuthService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdatePopUpComponent>
  ) {}

  updateForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.compose([Validators.required])),
    isActive: this.builder.control(false),
  });
  roleList: any;
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res: any) => {
      this.roleList = res;
    });
    if (this.data.id != null && this.data.id != '') {
      this.service.GetById(this.data.id).subscribe((res: any) => {
        this.updateForm.patchValue(res);
      });
    }
  }
  Update() {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.service
        .Update(this.updateForm.value.id, this.updateForm.value)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.dialogRef.close();
            this.toaster.success('User Updated Successfully');
           
          },
          (err: any) => {
            console.log(err);
            this.toaster.error('Something went wrong');
          }
        );
    } else {
    }
  }
}
