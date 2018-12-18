import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  registerForm: FormGroup;

  submitted=false;
  isSuccess=false;

  constructor(private userservice: UserserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });
  }

  // Simpler alias for the form
  get f() { return this.registerForm.controls; }

signingInUser: User = <User>{mailUser:"", password:""};
connectedUser: User = <User>{idUser:0, prenomUser:"", nomUser:"", urlPhotoProfil:"", mailUser:"", password:""};

  onSignIn() {
    this.submitted=true;

    if (this.registerForm.invalid) {
      return;
    }
    else {
      
      this.signingInUser.mailUser = this.f.email.value;
      this.signingInUser.password = this.f.password.value;
      
      this.userservice.signUser(this.signingInUser).subscribe(isSuccess => this.isSuccess=isSuccess);
      
      //console.log(this.isSuccess);

      if(this.isSuccess===true) {
        this.userservice.getUser(this.signingInUser.mailUser).subscribe(connectedUser => this.connectedUser=connectedUser);
        window.location.assign("http://localhost:4200/home");
      }

      //console.log(this.connectedUser.mailUser);
      //console.log(this.connectedUser.password);

    }
    
    }

}
