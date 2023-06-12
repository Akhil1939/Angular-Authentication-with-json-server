import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
    apiUrl:string = 'http://localhost:3000';
    //getAll
    GetAll(){
      return this.http.get(this.apiUrl+'/user');
    }

    //getById
    GetById(id:any){
      return this.http.get(this.apiUrl+'/user/'+id);
    }
    //create
    Create(user:any){
      return this.http.post(this.apiUrl+'/user',user);
    }

    //update
    Update(id:number,user:any){
      return this.http.put(this.apiUrl+'/user/'+id,user);
    }


    //login
    Login(user:any){
      return this.http.post(this.apiUrl+'/user/login',user);
    }

    IsLoggedIn(){
      return !!sessionStorage.getItem('username');
    }

    GetUserRole(){
      return sessionStorage.getItem('userRole');
    }
    GetAllRole(){
      return this.http.get(this.apiUrl+'/role');
    }
}
