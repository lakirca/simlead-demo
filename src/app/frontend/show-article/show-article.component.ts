import { Component, OnInit, Renderer2 } from "@angular/core";
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
    private renderer: Renderer2,
    private articleService: CustomService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.addJsToElement("../../../assets/js/custom.js");
  }

  goTo(url) {
    window.location.href = `/#${url}`
  }

  // On init push all articles to ArticleList
  ngOnInit() {
    window.scroll(0, 0)
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
    ref.once("value", ref => {
      this.article = ref.val();
    });
  }

  change(url) {
    let ref = this.db.database.ref(`/articles/${url}`); 
    ref.once("value").then(ref => {
      return this.article = ref.val();
    });
  }

  goHome() {
    this.router.navigate([""]);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}

