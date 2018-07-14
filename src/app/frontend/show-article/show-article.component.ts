import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "../../../../node_modules/angularfire2/database-deprecated";
import { Article } from "../../articles/article.model";
import {
  ActivatedRoute,
  Router
} from "../../../../node_modules/@angular/router";
import { CustomService } from "../../articles/custom.service";

@Component({
  selector: "app-show-article",
  templateUrl: "./show-article.component.html",
  styleUrls: ["./show-article.component.scss"]
})
export class ShowArticleComponent implements OnInit {
  articleList: Article[];
  articleUrl: any;
  article: Article = new Article();

  constructor(
    private articleService: CustomService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // On init push all articles to ArticleList
  ngOnInit() {
    this.articleUrl = this.route.snapshot.params["id"];
    let x = this.articleService.getData();
    x.snapshotChanges().subscribe(item => {
      this.articleList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.articleList.push(y as Article);
      });
    });
    let ref = this.db.database.ref(`/articles/${this.articleUrl}`);
    ref.on("value", ref => {
      this.article = ref.val();
    });
  }

  goHome() {
    this.router.navigate([""]);
  }
}

