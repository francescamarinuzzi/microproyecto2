import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {



  constructor() { }

  /*async onGoogleLogin(){
    try{this.authSvc.loginGoogle();}
    catch(error){console.log(error)}
    
  }*/

  ngOnInit(){
   
  }

  

}


