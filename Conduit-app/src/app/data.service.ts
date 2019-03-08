import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListArticle, DetailArticle, Profile, Comments } from './data.modle';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://conduit.productionready.io/api';
  URL_Article = `${this.url}/articles`;
  URL_Tag = `${this.url}/tags`;
  URL_Profile = `${this.url}/profiles/`;
  listArticle: ListArticle;
  tags: string[];
  profile: Profile;
  detailArticle: DetailArticle;
  comments: Comments;
  constructor(private httpClient: HttpClient) { }
  postUserLogin() {

  }
  getArticle(tag: string) {
    return this.httpClient.get(this.URL_Article, {params: {
      limit: '20',
      offset: '0',
      tag: tag
    }});
  }
  getTag() {
    return this.httpClient.get(this.URL_Tag);
  }
  getProfile(userName: string) {
    return this.httpClient.get(this.URL_Profile + userName);
  }
  getArticleByProfile(userName: string) {
    return this.httpClient.get(this.URL_Article, {params: {
      limit: '20',
      offset: '0',
      author: userName
    }});
  }
  getOneArticle(slug) {
    return this.httpClient.get(this.URL_Article + `/${slug}`);
  }
  getComment(slug) {
    return this.httpClient.get(`${this.URL_Article}/${slug}/comments`);
  }
}
