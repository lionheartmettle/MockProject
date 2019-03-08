import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { DetailArticle, Comments } from '../data.modle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private artRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.artRoute.paramMap.subscribe((params: ParamMap) => {
      this.dataService.getOneArticle(params.get('slug')).subscribe((detail: DetailArticle) => {
        this.dataService.detailArticle = detail;
        console.log(detail);
      });
      this.dataService.getComment(params.get('slug')).subscribe((comments: Comments) => {
        this.dataService.comments = comments;
        console.log(comments);
      });
    });
  }

}
