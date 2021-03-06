import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {



  constructor(private authSvc: AuthService,public afAuth: AngularFireAuth) { }

  /*async onGoogleLogin(){
    try{this.authSvc.loginGoogle();}
    catch(error){console.log(error)}
    
  }*/

  ngOnInit(){
   
  }

  

}


