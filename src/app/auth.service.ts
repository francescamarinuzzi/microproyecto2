import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  
  //async loginGoogle(): Promise<firebase.User | null> {

   // try{
    //  const supplier = new firebase.auth.GoogleAuthProvider();
    //  const resp = this.afAuth.signInWithPopup( new auth.GoogleAuthProvider());

      //if(resp.user){
      //  localStorage.setItem('user', (await resp).user.uid)
        //return (await resp).user;
      //}else{
        //return null
      //}
    //}catch(error){
     // localStorage.removeItem('user')
      //return null}
    
    


}
