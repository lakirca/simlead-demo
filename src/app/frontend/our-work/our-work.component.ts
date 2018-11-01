import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import { PageService } from "../../services/page.service";

@Component({
  selector: "app-our-work",
  templateUrl: "./our-work.component.html",
  styleUrls: [
    "./our-work.component.scss",
    "../../../assets/other/assets/css/bootstrap.min.css",
    "../../../assets/other/assets/css/font-awesome.min.css",
    "../../../assets/other/assets/css/magnific-popup.css",
    "../../../assets/other/assets/css/owl.carousel.css",
    "../../../assets/other/assets/css/owl.theme.default.css",
    "../../../assets/other/assets/css/style.css"
  ]
})
export class OurWorkComponent implements OnInit {
  articleList: any;
  offset = 6;
  nextKey: any; // for next button
  prevKeys: any[] = []; // for prev button
  subscription: any;
  constructor(
    private articleService: PageService,
    private db: AngularFireDatabase,
    private router: ActivatedRoute
  ) {
    window.scroll(0, 0)

  }

  // On init push all articles to ArticleList
  ngOnInit() {
    window.scroll(0, 0)

    this.getArticles();
  }

  nextPage() {
    this.prevKeys.push(_.first(this.articleList)["$key"]); // set current key as pointer for previous page
    this.getArticles(this.nextKey);
  }

  prevPage() {
    const prevKey = _.last(this.prevKeys); // use last key in array
    this.prevKeys = _.dropRight(this.prevKeys); // then remove the last key in the array

    this.getArticles(prevKey);
  }

  // Get All articles from DB
  getArticles(key?) {
    this.subscription = this.articleService
      .getArticles(this.offset, key)
      .subscribe(articles => {
        this.articleList = _.slice(articles, 0, this.offset);
        this.nextKey = _.get(articles[this.offset], "$key");
      });
  }

  // Get Single Article from DB
  getArticle(key?) {
    this.subscription = this.articleService
      .getArticles(key)
      .subscribe(articles => {
        this.articleList = _.slice(articles, 0, this.offset);
        this.nextKey = _.get(articles[this.offset], "$key");
      });
  }
}
