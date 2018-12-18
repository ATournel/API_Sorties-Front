import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tags: Tag[];

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.getAllTags();
  }

  getAllTags(): void {
    this.dataservice.getAllTags().subscribe(tags => this.tags=tags)
  }

}
