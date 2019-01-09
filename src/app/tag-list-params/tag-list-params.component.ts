import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-tag-list-params',
  templateUrl: './tag-list-params.component.html',
  styleUrls: ['./tag-list-params.component.scss']
})
export class TagListParamsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userservice: UserserviceService, private router: Router) { }

  ngOnInit() {
    this.deleteTag();
  }

  public deleteTag() {
    const idTag = +this.route.snapshot.paramMap.get('idTag');
    this.userservice.deleteUserTag(idTag).subscribe();
    this.router.navigateByUrl('/validate');
  }

}
