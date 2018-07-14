import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CustomService } from "../../articles/custom.service";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import { Article } from "../../articles/article.model";
import * as firebase from "firebase";
import { ActivatedRoute, Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: [
    "./article.component.scss",
    "../../../assets/other/assets/css/bootstrap.min.css",
    "../../../assets/other/assets/css/font-awesome.min.css",
    "../../../assets/other/assets/css/magnific-popup.css",
    "../../../assets/other/assets/css/owl.carousel.css",
    "../../../assets/other/assets/css/owl.theme.default.css",
    "../../../assets/other/assets/css/style.css"
  ]
})
export class ArticleComponent implements OnInit {
  articleList: Article[];

  constructor(
    private articleService: CustomService,
    private db: AngularFireDatabase,
    private router: Router
  ) {}

  // On init push all articles to ArticleList
  ngOnInit() {
    var x = this.articleService.getData();
    x.snapshotChanges().subscribe(item => {
      this.articleList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.articleList.push(y as Article);
      });
    });
  }

  moreOfOurWork() {
    this.router.navigate(['our_work'])
  }

  // Get all Articles from DB
  getArticles(): FirebaseListObservable<any> {
    return this.db.list("articles");
  }

  // Get single articles from DB
  getArticle(key: string) {
    return firebase
      .database()
      .ref("uploads/" + key)
      .once("value")
      .then(snap => snap.val());
  }
}
