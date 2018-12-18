import { Component, OnInit, Input } from '@angular/core';
import { Activite } from '../models/activite';
import { DataserviceService } from "../services/dataservice.service";

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {

  activites: Activite[];

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getAllActivites();
  }

  getAllActivites() {
   this.dataservice.getAllActivites().subscribe(activites => this.activites=activites);
  }

}
