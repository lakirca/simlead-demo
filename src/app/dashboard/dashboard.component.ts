import { Component, OnInit } from "@angular/core";
import { Article } from "..//articles/article.model";
import { CustomService } from "../articles/custom.service";
import { ToastrService } from "ngx-toastr";
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import * as firebase from "firebase";
import { Upload } from "../models/upload.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  articleList: Article[];
  private uid: string;
 
  constructor(
    private articleService: CustomService,
    private tostr: ToastrService,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    // Auth
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

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

  // Edit article
  onEdit(emp: Article) {
    this.articleService.selectedArticle = Object.assign({}, emp);
  }

  // Delete article
  onDelete(fileUpload: Upload) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.articleService.deleteArticle(fileUpload.$key);
      this.tostr.warning("Deleted Successfully", "Article register");
    }
  }
}
