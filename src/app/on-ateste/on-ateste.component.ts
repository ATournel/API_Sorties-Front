import { Component, OnInit } from '@angular/core';
import { Activite } from '../models/activite';
import { DataserviceService } from "../services/dataservice.service";

@Component({
  selector: 'app-on-ateste',
  templateUrl: './on-ateste.component.html',
  styleUrls: ['./on-ateste.component.scss']
})
export class OnATesteComponent implements OnInit {

  activites: Activite[];

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getTestedActivites();
  }

  getTestedActivites() {
    this.dataservice.getTestedActivities().subscribe(activites => this.activites=activites);
  }

}
