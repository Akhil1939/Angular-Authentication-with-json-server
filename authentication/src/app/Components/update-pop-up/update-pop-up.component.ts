import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.css']
})

 
export class UpdatePopUpComponent implements OnInit {
  constructor(private builder:FormBuilder, private toaster:ToastrService, private service:AuthService, private router:Router) { }

  updateForm = this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control(''),
    password:this.builder.control(''),
    email:this.builder.control(''),
    gender:this.builder.control('male'),
    role:this.builder.control('', Validators.compose([Validators.required])),
    isActive:this.builder.control(false),
  })
roleList:any;
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res:any)=>{
      this.roleList = res;
    })
  }
  Update(){


  }
}
