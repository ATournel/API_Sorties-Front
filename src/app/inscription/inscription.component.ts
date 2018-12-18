import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  user: User = <User>{prenomUser:"", nomUser:"", urlPhotoProfil:"", mailUser:"", password:""};
  registerForm: FormGroup;

  submitted=false;
  isSuccess=false;

  constructor(private userservice: UserserviceService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });
  } 

   // Simpler alias for the form
   get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted=true;

    // stops here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else {
      
      this.user.prenomUser = this.f.prenom.value;
      this.user.nomUser = this.f.nom.value;
      this.user.urlPhotoProfil = "https://podmagnolia.pl/wieniawskiego/wp-content/uploads/sites/2/2017/04/avatar.png";
      this.user.mailUser = this.f.email.value;
      this.user.password = this.f.password.value;
          
      this.userservice.createUser(this.user).subscribe();
      this.isSuccess=true;
      this.registerForm.reset();
      this.submitted=false;

    }

  }
}
  


