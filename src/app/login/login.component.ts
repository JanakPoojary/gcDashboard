import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  message:string=null;
  constructor(private router: Router) { }
  ngOnInit() {
    
  }
  login(){
    if(this.email=='admin@gmail.com'){
      this.router.navigate(['/home']);
    }else{
      this.message="This is not the correct Admin Email Id";
    }
}

}
