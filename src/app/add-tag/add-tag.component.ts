import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { DataserviceService } from '../services/dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from '../models/user';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  constructor(private userservice: UserserviceService, private dataservice: DataserviceService, private formBuilder: FormBuilder, private router: Router) { }

  connectedUser: User = <User>{prenomUser:"", nomUser:"", urlPhotoProfil:"", mailUser:"", password:""};
  registerForm: FormGroup;
  tags: Tag[];
  fullTags: Tag[];
  selectedTag: number;


  ngOnInit() {
    this.getConnectedUser();
    this.registerForm=this.formBuilder.group({
      selectedTag:0
    });
  }

  getConnectedUser() {    
    this.userservice.getConnectedUser().subscribe(connectedUser=>this.connectedUser=connectedUser);
    this.userservice.getUserTagList().subscribe(tags=>this.tags=tags);
    this.dataservice.getAllTags().subscribe(fullTags => this.fullTags=fullTags);
  }

  onSubmit() {
    this.selectedTag = this.registerForm.controls.selectedTag.value;
    this.userservice.addUserTag(this.selectedTag).subscribe();
    this.router.navigateByUrl('/profil');
  }
}
