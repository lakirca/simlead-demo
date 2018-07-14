import { Injectable } from "@angular/core";
import {
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database-deprecated";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class PageService {
  artcl: Observable<any>;

  constructor(private db: AngularFireDatabase) {}

  // Get all articles
  getArticles(offset, startKey?): FirebaseListObservable<any> {
    return this.db.list("articles", {
      query: {
        orderByKey: true,
        startAt: startKey,
        limitToFirst: offset + 1
      }
    });
  }

  // Get Single Article
  getArticle(key?): Observable<any> {
    return (this.artcl = this.db.object("/articles/" + key));
  }
}
