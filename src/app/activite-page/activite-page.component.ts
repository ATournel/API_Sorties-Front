import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../services/dataservice.service";
import { ActivatedRoute } from "@angular/router";
import { Activite } from '../models/activite';

@Component({
  selector: 'app-activite-page',
  templateUrl: './activite-page.component.html',
  styleUrls: ['./activite-page.component.scss']
})
export class ActivitePageComponent implements OnInit {

  activite: Activite;

  constructor(private route: ActivatedRoute, private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getOneActivite();
  }

  getOneActivite() {
    const idActivite = +this.route.snapshot.paramMap.get("idActivite");
    this.dataservice.getOneActivite(idActivite).subscribe(activite => this.activite=activite);
  }

}
