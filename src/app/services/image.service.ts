import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import "firebase/storage";
import * as firebase from "firebase";

@Injectable()
export class ImageService {
  private uid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImage(key: string) {
    return firebase
      .database()
      .ref("articles/" + key)
      .once("value")
      .then(snap => snap.val());
  }
}
