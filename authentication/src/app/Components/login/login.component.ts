import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toaster: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}
userData:any;
  LoginForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required])),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
  });

  Login() {
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      this.service.GetById(this.LoginForm.value.id).subscribe((res: any) => {
        this.userData = res;
        console.log(res);
        if (res.password == this.LoginForm.value.password) {
          if(this.userData.isActive){
            sessionStorage.setItem('username', this.userData.id);
            sessionStorage.setItem('userRole', this.userData.role);
            this.router.navigate(['']);
          }else{
            this.toaster.error('User is not active');
            return;
          }
          this.toaster.success('Login Successfull');
          this.router.navigate(['']);
        } else {
          this.toaster.error('Invalid Credentials');
        }
      });
    } else {
    }
  }
}
