import { Component } from '@angular/core';
import { Login } from '../login-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  details=new Login("","");
  submit=false;

  onSubmit(){
    this.submit=true;
    this.details.username=this.details.username;
    this.details.password=this.details.password;
    console.log(this.details)
  }
}
