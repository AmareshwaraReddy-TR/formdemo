import { Component ,OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';
  registerForm:any=FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder){}

  get f(){return this.registerForm.controls;}

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    if(this.submitted){
      alert("Great!!");
    }
  }
  ngOnInIt(){
    this.registerForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }
}
