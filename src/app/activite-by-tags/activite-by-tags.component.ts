import { Component, OnInit } from '@angular/core';
import { Activite } from '../models/activite';
import { DataserviceService } from "../services/dataservice.service";
import { ActivatedRoute } from "@angular/router";
import { Tag } from '../models/tag';

@Component({
  selector: 'app-activite-by-tags',
  templateUrl: './activite-by-tags.component.html',
  styleUrls: ['./activite-by-tags.component.scss']
})
export class ActiviteByTagsComponent implements OnInit {

  activites: Activite[];
  tag: Tag;
 

  constructor(private route: ActivatedRoute, private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getActiviteByTag();
  }

  getActiviteByTag() {
    const idTag = +this.route.snapshot.paramMap.get("idTag");
    //Print Tag name on top of page
    this.dataservice.getOneTag(idTag).subscribe(tag => this.tag=tag);
    this.dataservice.getActivitesByTag(idTag).subscribe(activites => this.activites=activites);
  }

}
