import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Article } from './article.model';
@Injectable()
export class CustomService {
  articleList: AngularFireList<any>;
  selectedArticle: Article = new Article();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.articleList = this.firebase.list('articles');
    return this.articleList;
  }

  insertArticle(article : Article)
  {
    this.articleList.push({
      title: article.title,
      website: article.website,
      skills: article.skills,
      body: article.body,
      url: article.url
    });
  }

  deleteArticle($key : string){
    this.articleList.remove($key);
  }

}
