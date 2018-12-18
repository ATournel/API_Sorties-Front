import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private userservice: UserserviceService) { }

  connectedUser: User = <User>{prenomUser:"", nomUser:"", urlPhotoProfil:"", mailUser:"", password:""};
  tags: Tag[];


  ngOnInit() {
    this.getConnectedUser();
  }

  getConnectedUser() {    
    this.userservice.getConnectedUser().subscribe(connectedUser=>this.connectedUser=connectedUser);
    this.userservice.getUserTagList().subscribe(tags=>this.tags=tags);
  }

}
