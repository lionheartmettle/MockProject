import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ListArticle } from '../data.modle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile = 'Eric Simons';
  tag: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArticle('').subscribe((res: ListArticle) => {
      this.dataService.listArticle = res;
      console.log(this.dataService.listArticle);
    });
    this.dataService.getTag().subscribe((res: {tags: string[]}) => {
      this.dataService.tags = res.tags;
    });
  }
  changeTag(tag) {
    this.tag = tag;
    this.dataService.getArticle(tag).subscribe((res: ListArticle) => {
      this.dataService.listArticle = res;
    });
  }
}
