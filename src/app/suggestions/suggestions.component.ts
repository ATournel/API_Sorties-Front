import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';
import { Activite } from '../models/activite';
import { DataserviceService } from "../services/dataservice.service";
import { Tag } from '../models/tag';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  constructor(private dataservice: DataserviceService, private userservice: UserserviceService) { }

  connectedUser: User = <User>{prenomUser:"", nomUser:"", urlPhotoProfil:"", mailUser:"", password:""};

  activites: Activite[];

  ngOnInit() {
    this.getConnectedUser();
    this.getUserSugg();
  }

  getConnectedUser() {    
    this.userservice.getConnectedUser().subscribe(connectedUser=>this.connectedUser=connectedUser);
  }

  getUserSugg() {
    this.dataservice.getUserSuggestions().subscribe(activites=>this.activites=activites);
  }
}
