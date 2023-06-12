import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toaster:ToastrService, private service:AuthService, private router:Router) { }

  registrationForm = this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),
    name:this.builder.control('',Validators.compose([Validators.required])),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male',Validators.compose([Validators.required])),
    role:this.builder.control(''),
    isActive:this.builder.control(false,Validators.compose([Validators.required])),
  })

Registration(){
  if(this.registrationForm.valid){
    console.log(this.registrationForm.value);
    this.service.Create(this.registrationForm.value).subscribe((res:any)=>{
      console.log(res);
      this.toaster.success('User Created Successfully');
      this.router.navigate(['/login']);
    },(err:any)=>{
      console.log(err);
      this.toaster.error('Something went wrong');
    })
  }else{
this.toaster.warning('Please fill all the fields');
  }
}
}
