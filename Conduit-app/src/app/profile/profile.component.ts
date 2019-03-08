import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Profile, ListArticle } from '../data.modle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private actRout: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.actRout.paramMap.subscribe((params: ParamMap) => {
      this.dataService.getProfile(params.get('profile')).subscribe((pro: Profile) => {
        this.dataService.profile = pro;
      });
      this.dataService.getArticleByProfile(params.get('profile')).subscribe((atrs: ListArticle) => {
        this.dataService.listArticle = atrs;
      });
    });
  }

}
