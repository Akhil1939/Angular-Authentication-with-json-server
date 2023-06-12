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

  LoginForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required])),
    password: this.builder.control(
      ',',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
  });

  Login() {
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      this.service.GetById(this.LoginForm.value.id).subscribe((res: any) => {
        console.log(res);
        if (res.password == this.LoginForm.value.password) {
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
